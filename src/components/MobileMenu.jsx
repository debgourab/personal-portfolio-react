import { AnimatePresence, motion } from 'framer-motion';
import { ResumeButton } from './ResumeButton';

export function MobileMenu({ id, isOpen, navigation, activeSection, onNavigate }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          id={id}
          className="mobile-menu"
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={activeSection === item.id ? 'active' : ''}
                onClick={onNavigate}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ResumeButton className="w-full justify-center" />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
