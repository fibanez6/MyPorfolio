import { GTagManager } from '../components/google/GTagManage';
import NavBar from '../components/NavBar';
import Certificates from '../components/sections/Certificate';
import ContactSection from '../components/sections/Contact';
import ExperienceSection from '../components/sections/Experience';
import HeroSection from '../components/sections/Hero';
import { Main } from '../components/sections/Main';
import { SEO } from '../components/sections/SEO';


export default function Home() {
  return (
    <div>
      {/* HEAD */}
      <SEO />
      <GTagManager />

      {/* BODY */}
      <NavBar />
      <HeroSection />
      <Main>
        <ExperienceSection />
        <Certificates />
        <ContactSection />
      </Main>
    </div>
  )
}
