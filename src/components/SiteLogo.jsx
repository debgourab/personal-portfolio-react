export function SiteLogo({ className = '' }) {
  return (
    <span className={`brand-logo ${className}`} aria-hidden="true">
      <img src="/public/logo.jpeg" alt="Deb" />
    </span>
  );
}
