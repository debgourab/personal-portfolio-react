import { motion } from 'framer-motion';
import { CertificateCard } from '../components/CertificateCard';
import { SectionHeader } from '../components/SectionHeader';
import { certifications } from '../data/portfolioData';
import { staggerContainer, viewportOnce } from '../utils/animation';

export function Certifications() {
  return (
    <section id="certifications" className="section-shell" aria-labelledby="certifications-title">
      <SectionHeader
        id="certifications-title"
        eyebrow="Certifications"
        title="Credentials & Learning"
        description=""
      />

      <motion.div
        className="certification-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {certifications.map((certificate, index) => (
          <CertificateCard key={certificate.title} certificate={certificate} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
