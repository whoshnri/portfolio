"use client"
// import GitHubCalendar from 'react-github-calendar';
import Hero from '@/app/components/Hero'
import Skills from "./components/Skills"
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";





export default function Header() {
  return (
    <div className={`relative relative px-4 bg-black max-w-[500px] mx-auto rounded-lg py-10 border border-gray-800`}>
      <Hero/>
      <Skills/>
      <Blogs/>
      <Footer/>

    </div>

  );
}
