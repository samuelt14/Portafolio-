import { profile, links, cv, projects, skills, about, experience } from './data/portfolio'
import { useState } from 'react'
import Intro from './components/intro'
import { PLAY_INTRO } from './lib/intro'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [intro, setIntro] = useState(PLAY_INTRO)
  return (
    <>
      {intro && <Intro profile={profile} onDone={() => setIntro(false)} />}
      <Navbar name={profile.name} />
      <main>
        <Hero profile={profile} skills={skills} cv={cv} />
        <Projects projects={projects} />
        <Skills skills={skills} projects={projects} />
        <About about={about} experience={experience} />
        <Contact links={links} cv={cv} />
      </main>
      <Footer name={profile.name} />
    </>
  )
}
