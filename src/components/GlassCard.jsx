import { forwardRef } from 'react';

export const GlassCard = forwardRef(function GlassCard(
  { as: Component = 'div', className = '', children, ...props },
  ref,
) {
  return (
    <Component ref={ref} className={`glass-card ${className}`} {...props}>
      {children}
    </Component>
  );
});
