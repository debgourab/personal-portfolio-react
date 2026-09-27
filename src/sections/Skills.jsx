import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { SkillCard } from '../components/SkillCard';
import { skillGroups } from '../data/portfolioData';
import { staggerContainer, viewportOnce } from '../utils/animation';

export function Skills() {
  return (
    <section id="skills" className="section-shell" aria-labelledby="skills-title">
      <SectionHeader
        id="skills-title"
        eyebrow="Skills"
        title="Technical Skills & Tools"
        description="Technologies I use to build responsive frontend and full-stack web applications."
      />

      <motion.div
        className="skills-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {skillGroups.map((group) => (
          <SkillCard key={group.title} group={group} />
        ))}
      </motion.div>
    </section>
  );
}
