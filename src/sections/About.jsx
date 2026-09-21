import { about } from '../data/portfolioData';
import { AnimatedSection } from '../components/AnimatedSection';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';

export function About() {
  return (
    <section id="about" className="section-shell" aria-labelledby="about-title">
      <SectionHeader
        id="about-title"
        eyebrow="About Me"
        title="Crafting Digital Experiences With Passion"
        description="Focused on clean interfaces, reusable components and practical full-stack web development."
      />

      <div className="about-grid">
        <AnimatedSection className="about-visual">
          <img src={about.image} alt="Developer workstation with code editor" loading="lazy" />
          <div className="about-visual-card">
            <strong>MERN Stack</strong>
            <span>React, Node, Express, MongoDB</span>
          </div>
        </AnimatedSection>

        <AnimatedSection className="about-copy">
          <h3>Frontend, React & Full-Stack Developer</h3>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="highlight-grid">
            {about.highlights.map(({ label, icon: Icon }) => (
              <GlassCard key={label} className="highlight-card">
                <Icon size={20} aria-hidden="true" />
                <span>{label}</span>
              </GlassCard>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
