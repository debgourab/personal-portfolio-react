import { Download } from 'lucide-react';
import { useState } from 'react';
import { resumePath } from '../data/portfolioData';

export function ResumeButton({ className = '', compact = false }) {
  const [isChecking, setIsChecking] = useState(false);

  const handleDownload = async () => {
    setIsChecking(true);

    try {
      const response = await fetch(resumePath, { method: 'HEAD' });

      if (!response.ok) {
        window.alert(
          'Resume PDF is not available yet. Add it at public/resume/Deb-Gourab-Biswas-Resume.pdf.',
        );
        return;
      }

      const link = document.createElement('a');
      link.href = resumePath;
      link.download = 'Deb-Gourab-Biswas-Resume.pdf';
      document.body.append(link);
      link.click();
      link.remove();
    } catch {
      window.alert(
        'Resume PDF could not be checked. Add it at public/resume/Deb-Gourab-Biswas-Resume.pdf.',
      );
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <button
      type="button"
      className={`btn-primary ${compact ? 'btn-compact' : ''} ${className}`}
      onClick={handleDownload}
      disabled={isChecking}
    >
      <span>{isChecking ? 'Checking...' : 'Download CV'}</span>
      <Download size={compact ? 17 : 19} aria-hidden="true" />
    </button>
  );
}
