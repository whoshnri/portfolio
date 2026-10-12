import './style.css'

const rings = document.querySelector('.rings')

function renderRings() {
  const spacing = parseFloat(getComputedStyle(rings).getPropertyValue('--ring-spacing'))
  const count = Math.max(4, Math.floor(rings.clientHeight / spacing))
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

new ResizeObserver(renderRings).observe(rings)
