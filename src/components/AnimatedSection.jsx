import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../utils/animation';

export function AnimatedSection({ children, className = '', delay = 0, as = 'div' }) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
