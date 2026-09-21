import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animation';
import { GithubIcon } from './BrandIcons';
import { GlassCard } from './GlassCard';

export function ProjectCard({ project }) {
  const Icon = project.icon;

  return (
    <GlassCard as={motion.article} className="project-card" variants={fadeUp}>
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="project-image"
        aria-label={`Open ${project.title} live demo`}
      >
        <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
        <span>
          <ExternalLink size={18} aria-hidden="true" />
        </span>
      </a>
      <div className="project-body">
        <div className="project-title-row">
          <span className="icon-tile small">
            <Icon size={19} aria-hidden="true" />
          </span>
          <h3>{project.title}</h3>
        </div>
        <p>{project.description}</p>
        <div className="tag-list" aria-label={`${project.title} technologies`}>
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-actions">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <GithubIcon size={18} />
            GitHub
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary btn-compact">
            Live Demo
            <ExternalLink size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </GlassCard>
  );
}
