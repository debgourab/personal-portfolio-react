import { Navbar } from './components/Navbar';
import { BackgroundEffects } from './components/BackgroundEffects';
import { AvailabilityBanner } from './components/AvailabilityBanner';
import { ScrollToTop } from './components/ScrollToTop';
import { About } from './sections/About';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';
import { Education } from './sections/Education';
import { Footer } from './sections/Footer';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Services } from './sections/Services';
import { Skills } from './sections/Skills';
import { Stats } from './sections/Stats';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <BackgroundEffects />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <Services />
        <Projects />
        <Contact />
        <section className="availability-section section-shell" aria-label="Availability">
          <AvailabilityBanner />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
