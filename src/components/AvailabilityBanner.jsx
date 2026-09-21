import { CheckCircle2 } from 'lucide-react';
import { availability } from '../data/portfolioData';
import { GlassCard } from './GlassCard';

export function AvailabilityBanner() {
  return (
    <GlassCard className="availability-banner">
      <div className="status-pulse" aria-hidden="true" />
      <div>
        <h3>{availability.title}</h3>
        <p>{availability.description}</p>
      </div>
      <CheckCircle2 className="availability-icon" size={28} aria-hidden="true" />
    </GlassCard>
  );
}
