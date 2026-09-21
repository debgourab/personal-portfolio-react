import { footer } from '../data/portfolioData';
import { SiteLogo } from '../components/SiteLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div>
        <a href="#home" className="brand" aria-label="Back to top">
          <SiteLogo />
        </a>
        <p>{footer.summary}</p>
      </div>
      <div className="footer-socials">
        {footer.links.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={label}
            title={label}
          >
            <Icon size={19} aria-hidden="true" />
          </a>
        ))}
      </div>
      <p className="copyright">&copy; {currentYear} Deb Gourab Biswas. All rights reserved.</p>
    </footer>
  );
}
