import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animation';
import { GlassCard } from './GlassCard';

const levelWidths = {
  Comfortable: '88%',
  'Working Knowledge': '70%',
  Learning: '48%',
};

export function SkillCard({ group }) {
  const Icon = group.icon;

  return (
    <GlassCard as={motion.article} className={`skill-card accent-${group.accent}`} variants={fadeUp}>
      <div className="card-heading">
        <span className="icon-tile">
          <Icon size={25} aria-hidden="true" />
        </span>
        <h3>{group.title}</h3>
      </div>
      <div className="skill-list">
        {group.skills.map((skill) => (
          <div className="skill-row" key={skill.name}>
            <div>
              <span>{skill.name}</span>
              <small>{skill.level}</small>
            </div>
            <div className="skill-track" aria-hidden="true">
              <span style={{ width: levelWidths[skill.level] ?? '60%' }} />
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
