import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { hero, roles } from "../data/portfolioData";
import { SocialLinks } from "../components/SocialLinks";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const nameParts = hero.name.split(" ");
  const lastName = nameParts.length > 1 ? nameParts.pop() : "";
  const highlightedName = nameParts.join(" ") || hero.name;

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2300);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <section
      id="home"
      className="hero-section section-shell"
      aria-labelledby="hero-title"
    >
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="hero-eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title">
            <span className="name-accent">{highlightedName}</span>
            {lastName ? (
              <>
                {" "}
                <span className="name-white">{lastName}</span>
              </>
            ) : null}
          </h1>
          <div className="role-line" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                animate={
                  prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                }
                exit={prefersReducedMotion ? undefined : { opacity: 0.25, y: -12 }}
                transition={{ duration: 0.32 }}
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <p className="hero-intro">{hero.intro}</p>
          <SocialLinks />
          <div className="hero-actions">
            <a className="btn-primary" href="#contact">
              Hire Me
              <ArrowRight size={19} aria-hidden="true" />
            </a>
            <a className="btn-secondary" href="#projects">
              View Projects
              <ArrowRight size={19} aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="profile-stage"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="profile-photo">
            <img
              src={hero.profileImage}
              alt="Deb Gourab Biswas profile"
              fetchPriority="high"
            />
          </div>
          <div className="profile-badge">
            <span className="status-pulse" aria-hidden="true" />
            Open to Work
          </div>
        </motion.div>
      </div>
    </section>
  );
}
