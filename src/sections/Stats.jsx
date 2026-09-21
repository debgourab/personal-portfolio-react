import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { stats } from '../data/portfolioData';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/animation';
import { GlassCard } from '../components/GlassCard';

function StatCard({ stat }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [displayValue, setDisplayValue] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const Icon = stat.icon;

  useEffect(() => {
    if (!isInView) {
      return undefined;
    }

    if (prefersReducedMotion) {
      return undefined;
    }

    const controls = animate(0, stat.value, {
      duration: 1.1,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, prefersReducedMotion, stat.value]);

  const visibleValue = prefersReducedMotion && isInView ? stat.value : displayValue;

  return (
    <GlassCard as={motion.article} className="stat-card" variants={fadeUp} ref={ref}>
      <span className="icon-tile">
        <Icon size={25} aria-hidden="true" />
      </span>
      <strong>
        {visibleValue}
        {stat.suffix}
      </strong>
      <span>{stat.label}</span>
    </GlassCard>
  );
}

export function Stats() {
  return (
    <motion.section
      className="stats-section"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
      aria-label="Portfolio statistics"
    >
      {stats.map((stat) => (
        <StatCard key={stat.label} stat={stat} />
      ))}
    </motion.section>
  );
}
