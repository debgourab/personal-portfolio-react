import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeader } from '../components/SectionHeader';
import { projects } from '../data/portfolioData';
import { staggerContainer, viewportOnce } from '../utils/animation';

export function Projects() {
  return (
    <section id="projects" className="section-shell" aria-labelledby="projects-title">
      <SectionHeader
        id="projects-title"
        eyebrow="PROJECTS"
        title="Selected Development Projects"
        description="Hands-on projects demonstrating React, frontend development, REST APIs and MERN stack implementation."
      />

      <motion.div
        className="projects-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
