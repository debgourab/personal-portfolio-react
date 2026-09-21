import { EducationCard } from '../components/EducationCard';
import { SectionHeader } from '../components/SectionHeader';
import { education } from '../data/portfolioData';

export function Education() {
  return (
    <section id="education" className="section-shell" aria-labelledby="education-title">
      <SectionHeader
        id="education-title"
        eyebrow="Education"
        title="Academic Journey & Training"
        description="A focused timeline of academic programs and full-stack development training."
      />

      <div className="education-list">
        {education.map((item) => (
          <EducationCard key={item.institution} item={item} />
        ))}
      </div>
    </section>
  );
}
