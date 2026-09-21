import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navigation } from '../data/portfolioData';
import { useActiveSection } from '../hooks/useActiveSection';
import { MobileMenu } from './MobileMenu';
import { ResumeButton } from './ResumeButton';
import { SiteLogo } from './SiteLogo';
import { ThemeToggle } from './ThemeToggle';

const sectionIds = navigation.map((item) => item.id);

export function Navbar({ theme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-header ${isScrolled || isMenuOpen ? 'is-scrolled' : ''}`}>
      <a href="#home" className="brand" onClick={closeMenu} aria-label="Go to home section">
        <SiteLogo />
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.id} href={item.href} className={activeSection === item.id ? 'active' : ''}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <ResumeButton className="desktop-resume" compact />
        <button
          type="button"
          className="icon-button menu-toggle"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <MobileMenu
        id="mobile-menu"
        isOpen={isMenuOpen}
        navigation={navigation}
        activeSection={activeSection}
        onNavigate={closeMenu}
      />
    </header>
  );
}
