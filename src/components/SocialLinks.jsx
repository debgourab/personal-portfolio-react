import { socialLinks } from '../data/portfolioData';

export function SocialLinks({ className = '', variant = 'icon' }) {
  return (
    <div className={`social-links ${className}`}>
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          className={variant === 'pill' ? 'social-pill' : 'social-icon'}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          aria-label={label}
          title={label}
        >
          <Icon size={20} aria-hidden="true" />
          {variant === 'pill' ? <span>{label}</span> : null}
        </a>
      ))}
    </div>
  );
}
