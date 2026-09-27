import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data/portfolioData';
import { staggerContainer, viewportOnce } from '../utils/animation';

export function Services() {
  return (
    <section id="services" className="section-shell" aria-labelledby="services-title">
      <SectionHeader
        id="services-title"
        eyebrow="CAPABILITIES"
        title="What I Build "
        description="Practical web development skills focused on modern frontend experiences and full-stack MERN applications."
      />

      <motion.div
        className="services-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </motion.div>
    </section>
  );
}
