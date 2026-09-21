import { AnimatedSection } from './AnimatedSection';

export function SectionHeader({ eyebrow, title, description, align = 'center', id }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center mx-auto';

  return (
    <AnimatedSection className={`section-header ${alignment}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
      <span className="section-rule" aria-hidden="true" />
    </AnimatedSection>
  );
}
