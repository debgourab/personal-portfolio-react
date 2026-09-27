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
        title="Full Stack Developer Focused on React & MERN"
        description="Building responsive, maintainable web applications using React, JavaScript, Node.js, Express.js and MongoDB."
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
          <h3>Full Stack Developer | React & MERN Stack</h3>
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
