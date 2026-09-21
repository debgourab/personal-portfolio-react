import { Moon, Sun } from 'lucide-react';

export function ThemeToggle({ theme, onToggle, className = '' }) {
  const isDark = theme === 'dark';
  const Icon = isDark ? Moon : Sun;

  return (
    <button
      type="button"
      className={`icon-button ${className}`}
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <Icon size={19} strokeWidth={2.2} aria-hidden="true" />
    </button>
  );
}
