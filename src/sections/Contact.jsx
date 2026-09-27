import { Send } from 'lucide-react';
import { useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { contact } from '../data/portfolioData';

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!emailPattern.test(values.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!values.subject.trim()) {
      nextErrors.subject = 'Please enter a subject.';
    }

    if (!values.message.trim()) {
      nextErrors.message = 'Please enter your message.';
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setStatus(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setStatus({ type: 'error', message: 'Please fix the highlighted fields.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'info', message: 'Sending your message...' });

    try {
      const response = await fetch(import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        throw new Error(result.message || 'Message could not be sent right now.');
      }

      setStatus({
        type: 'success',
        message: result.message || 'Thanks, your message was sent successfully.',
      });
      setValues(initialValues);
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Message could not be sent right now. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldProps = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: handleChange,
    'aria-invalid': errors[name] ? 'true' : 'false',
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  return (
    <section id="contact" className="section-shell" aria-labelledby="contact-title">
      <SectionHeader
        id="contact-title"
        eyebrow="LET'S CONNECT"
        title="Open to Full-Time Opportunities"
        description="Seeking Full Stack, MERN, React and Frontend Developer opportunities."
      />

      <div className="contact-grid">
        <AnimatedSection className="contact-info">
          <GlassCard className="contact-panel">
            <span className="section-eyebrow">Contact Information</span>
            <h3>Get in Touch</h3>
            <p>
              Feel free to contact me regarding developer opportunities or project discussions.
            </p>

            <div className="contact-list">
              {contact.details.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-item"
                >
                  <span className="icon-tile small">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <span>
                    <small>{label}</small>
                    <strong>{value}</strong>
                  </span>
                </a>
              ))}
            </div>
          </GlassCard>
        </AnimatedSection>

        <AnimatedSection className="contact-form-wrap" delay={0.08}>
          <GlassCard as="form" className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label htmlFor="name">Your Name</label>
              <input type="text" autoComplete="name" {...fieldProps('name')} />
              {errors.name ? <p id="name-error">{errors.name}</p> : null}
            </div>

            <div className="form-row">
              <label htmlFor="email">Your Email</label>
              <input type="email" autoComplete="email" {...fieldProps('email')} />
              {errors.email ? <p id="email-error">{errors.email}</p> : null}
            </div>

            <div className="form-row">
              <label htmlFor="subject">Subject</label>
              <input type="text" {...fieldProps('subject')} />
              {errors.subject ? <p id="subject-error">{errors.subject}</p> : null}
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea rows="5" {...fieldProps('message')} />
              {errors.message ? <p id="message-error">{errors.message}</p> : null}
            </div>

            <button type="submit" className="btn-primary justify-center" disabled={isSubmitting}>
              <Send size={19} aria-hidden="true" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {status ? (
              <p className={`form-status ${status.type}`} role="status" aria-live="polite">
                {status.message}
              </p>
            ) : null}
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
