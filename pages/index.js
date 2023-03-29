import Head from 'next/head'
import { useRef, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './Hero';
import Services from './Services';
import Clients from './Clients';
import About from './About';
import Contact from './Contact';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Home() {


  useEffect(() => {
    AOS.init()
    AOS.refresh();
  }, [])

  const heroSection = useRef(null)
  const servicesSection = useRef(null)
  const clientsSection = useRef(null)
  const aboutSection = useRef(null)
  const contactSection = useRef(null)

  const scroll = (section) => {
    if (section === "hero") window.scrollTo({ top: heroSection.current.offsetTop, behavior: "smooth" })
    else if (section === "services") window.scrollTo({ top: servicesSection.current.offsetTop, behavior: "smooth" })
    else if (section === "clients") window.scrollTo({ top: clientsSection.current.offsetTop, behavior: "smooth" })
    else if (section === "about") window.scrollTo({ top: aboutSection.current.offsetTop, behavior: "smooth" })
    else if (section === "contact") window.scrollTo({ top: contactSection.current.offsetTop, behavior: "smooth" })
  }

  return (
    <div>
      <Head>
        <title>SM Creative Marketing</title>
        <meta name="description" content="Boas ideias devem sempre brilhar!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg" />
        <Navbar scroll={scroll} />
        <section ref={heroSection}>
          <Hero />
        </section>
        <section ref={servicesSection}>
          <Services />
        </section>
        <section ref={clientsSection}>
          <Clients />
        </section>
        <section ref={aboutSection}>
          <About />
        </section>
        <section ref={contactSection}>
          <Contact />
        </section>
      </main>

    </div>
  )
}
