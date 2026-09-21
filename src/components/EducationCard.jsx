import { ExternalLink } from 'lucide-react';
import { GlassCard } from './GlassCard';

export function EducationCard({ item }) {
  return (
    <GlassCard as="article" className="education-card">
      <div className="education-index">{item.number}</div>
      <div className="education-logo">
        <img src={item.logo} alt={`${item.institution} logo`} loading="lazy" />
      </div>
      <div className="education-content">
        <span className="chip">{item.type}</span>
        <h3>{item.institution}</h3>
        <p>{item.program}</p>
        <div className="education-meta">
          <span>
            Passing
            <strong>{item.passing}</strong>
          </span>
          {item.cgpa ? (
            <span>
              CGPA
              <strong>{item.cgpa}</strong>
            </span>
          ) : null}
        </div>
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-link">
          Visit {item.type}
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
    </GlassCard>
  );
}
