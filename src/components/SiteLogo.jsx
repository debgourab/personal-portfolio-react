export function SiteLogo({ className = '' }) {
  return (
    <span className={`brand-logo ${className}`} aria-hidden="true">
      <img src="/logo.jpeg" alt="Deb" />
    </span>
  );
}
