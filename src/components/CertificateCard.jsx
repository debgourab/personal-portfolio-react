import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animation';
import { GlassCard } from './GlassCard';

export function CertificateCard({ certificate, index }) {
  return (
    <GlassCard as={motion.article} className="certificate-card" variants={fadeUp}>
      <a
        href={certificate.image}
        target="_blank"
        rel="noopener noreferrer"
        className="certificate-image"
        aria-label={`View ${certificate.title} certificate`}
      >
        <img src={certificate.image} alt={`${certificate.title} certificate`} loading="lazy" />
      </a>
      <div className="certificate-body">
        <div className="certificate-topline">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <span>{certificate.category}</span>
        </div>
        <h3>{certificate.title}</h3>
        <p>{certificate.description}</p>
        <a href={certificate.image} target="_blank" rel="noopener noreferrer" className="text-link">
          View Certificate
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
    </GlassCard>
  );
}
