import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animation';
import { GlassCard } from './GlassCard';

export function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <GlassCard as={motion.article} className="service-card" variants={fadeUp}>
      <span className="service-number">{service.number}</span>
      <span className="icon-tile">
        <Icon size={25} aria-hidden="true" />
      </span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <a href="#contact" className="inline-action">
        Inquire
        <ArrowRight size={16} aria-hidden="true" />
      </a>
    </GlassCard>
  );
}
