import './style.css'
import { spreads } from './spreads.js'

const book = document.querySelector('.book')
const stack = document.querySelector('.spread-stack')
const rings = document.querySelector('.rings')
const prevBtn = document.querySelector('.edge-btn--prev')
const nextBtn = document.querySelector('.edge-btn--next')

const FLIP_MS = () => {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--flip-ms')
  return parseFloat(raw) || 1200
}

let index = 0
let busy = false
/** @type {HTMLElement[]} */
let nodes = []

function renderRight(right) {
  const parts = []

  if (right.role != null) {
    parts.push('<header class="intro">')
    if (right.title) parts.push(`<h1>${right.title}</h1>`)
    parts.push(`<p class="role">${right.role}</p>`)
    for (const p of right.paragraphs || []) parts.push(`<p>${p}</p>`)
    parts.push('</header>')
  } else {
    if (right.title) parts.push(`<h2>${right.title}</h2>`)
    for (const p of right.paragraphs || []) parts.push(`<p>${p}</p>`)
  }

  if (right.job) {
    const j = right.job
    parts.push('<article class="job">')
    parts.push(`<h3>${j.name} <span>— ${j.label}</span></h3>`)
    parts.push(`<p class="meta">${j.meta}</p>`)
    parts.push(`<p>${j.summary}</p>`)
    parts.push('<ul>')
    for (const b of j.bullets) parts.push(`<li>${b}</li>`)
    parts.push('</ul>')
    if (j.link) {
      parts.push(
        `<p><a href="${j.link.href}" target="_blank" rel="noreferrer">${j.link.label}</a></p>`
      )
    }
    parts.push('</article>')
  }

  if (right.links?.length) {
    parts.push('<ul class="links">')
    for (const link of right.links) {
      const external = link.href.startsWith('http')
      parts.push(
        `<li><a href="${link.href}"${external ? ' target="_blank" rel="noreferrer"' : ''}>${link.label}</a></li>`
      )
    }
    parts.push('</ul>')
  }

  if (right.hint) parts.push(`<p class="hint">${right.hint}</p>`)

  return parts.join('')
}

function leftMarkup(left) {
  return `
    <div class="page page--left">
      <img class="page-art" src="${left.image}" alt="${left.desc}" draggable="false" />
      <p class="page-caption">${left.desc}</p>
    </div>
  `
}

function build() {
  stack.replaceChildren()
  nodes = spreads.map((spread, i) => {
    const nextLeft = spreads[i + 1]?.left ?? spread.left
    const el = document.createElement('article')
    el.className = 'spread'
    el.dataset.index = String(i)
    el.innerHTML = `
      ${leftMarkup(spread.left)}
      <div class="leaf">
        <div class="leaf-face leaf-face--front">
          <div class="page page--right">${renderRight(spread.right)}</div>
        </div>
        <div class="leaf-face leaf-face--back">
          ${leftMarkup(nextLeft)}
        </div>
      </div>
    `
    stack.append(el)
    return el
  })
}

function leafOf(el) {
  return el.querySelector('.leaf')
}

function syncChrome() {
  prevBtn.disabled = index <= 0 || busy
  nextBtn.disabled = index >= nodes.length - 1 || busy
  nodes.forEach((node, i) => {
    node.setAttribute('aria-hidden', i === index ? 'false' : 'true')
  })
}

function settle() {
  nodes.forEach((node, i) => {
    node.classList.remove('is-current', 'is-under', 'is-flipping')
    const leaf = leafOf(node)
    leaf.style.transition = 'none'
    if (i < index) {
      leaf.classList.add('is-turned')
    } else {
      leaf.classList.remove('is-turned')
    }
    void leaf.offsetWidth
    leaf.style.transition = ''
  })
  nodes[index].classList.add('is-current')
  busy = false
  syncChrome()
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function go(delta) {
  const next = index + delta
  if (busy || next < 0 || next >= nodes.length) return false

  busy = true
  syncChrome()

  const current = nodes[index]
  const target = nodes[next]
  const duration = FLIP_MS()

  if (delta > 0) {
    // Turn current right page over — its back shows the next left image
    current.classList.remove('is-current')
    target.classList.add('is-under')
    current.classList.add('is-flipping')
    const leaf = leafOf(current)
    void leaf.offsetWidth
    leaf.classList.add('is-turned')
    await wait(duration + 40)
  } else {
    // Turn previous right page back from facedown onto the current spread
    const leaf = leafOf(target)
    current.classList.remove('is-current')
    current.classList.add('is-under')
    target.classList.add('is-flipping')
    leaf.style.transition = 'none'
    leaf.classList.add('is-turned')
    void leaf.offsetWidth
    leaf.style.transition = ''
    // next frame so the browser commits the facedown pose before opening
    await wait(32)
    leaf.classList.remove('is-turned')
    await wait(duration + 40)
  }

  index = next
  settle()
  return true
}

function renderRings() {
  const spacing = parseFloat(getComputedStyle(rings).getPropertyValue('--ring-spacing'))
  const count = Math.max(5, Math.floor(rings.clientHeight / spacing))
  if (rings.children.length === count) return

  rings.replaceChildren()
  for (let i = 0; i < count; i++) {
    const ring = document.createElement('span')
    ring.className = 'ring'
    ring.innerHTML =
      '<span class="hole hole--left"></span>' +
      '<span class="hole hole--right"></span>' +
      '<span class="wire"></span>'
    rings.append(ring)
  }
}

prevBtn.addEventListener('click', () => go(-1))
nextBtn.addEventListener('click', () => go(1))

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
    e.preventDefault()
    go(1)
  } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
    e.preventDefault()
    go(-1)
  }
})

// one deliberate wheel tick → one page (not a fast scroll)
let wheelLock = false
book.addEventListener(
  'wheel',
  async (e) => {
    e.preventDefault()
    if (busy || wheelLock) return
    if (Math.abs(e.deltaY) < 8 && Math.abs(e.deltaX) < 8) return
    const forward = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY > 0 : e.deltaX > 0
    wheelLock = true
    const moved = await go(forward ? 1 : -1)
    setTimeout(
      () => {
        wheelLock = false
      },
      moved ? FLIP_MS() + 280 : 0
    )
  },
  { passive: false }
)

let startX = null
let startY = null
let swiped = false

book.addEventListener('pointerdown', (e) => {
  if (busy) return
  if (e.target.closest('a, button')) return
  startX = e.clientX
  startY = e.clientY
  swiped = false
})

book.addEventListener('pointerup', (e) => {
  if (startX == null) return
  const dx = e.clientX - startX
  const dy = e.clientY - startY
  startX = null
  startY = null
  if (Math.abs(dx) >= 56 && Math.abs(dx) > Math.abs(dy)) {
    swiped = true
    go(dx < 0 ? 1 : -1)
  }
})

book.addEventListener('pointercancel', () => {
  startX = null
  startY = null
})

book.addEventListener('click', (e) => {
  if (busy || swiped) {
    swiped = false
    return
  }
  if (e.target.closest('a, button, .book-nav')) return
  const rect = book.getBoundingClientRect()
  const x = e.clientX - rect.left
  go(x > rect.width * 0.5 ? 1 : -1)
})

build()
settle()
new ResizeObserver(renderRings).observe(rings)
renderRings()
