import { useState } from 'react';
import { useSiteConfig } from '../context/SiteConfigContext.jsx';

const inputStyle = {
  padding: '14px 16px',
  background: 'rgba(245,240,232,0.05)',
  border: '1px solid rgba(201,168,76,0.18)',
  fontSize: 14,
  fontFamily: "'DM Sans', sans-serif",
  color: '#F5F0E8',
  outline: 'none',
  width: '100%',
};

export default function Contact() {
  const { config } = useSiteConfig();
  const { contact } = config;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="mob-section" style={{ background: 'var(--ap-dark)', padding: '80px 64px' }}>
      <div className="mob-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
        <div>
          <p
            style={{
              margin: '0 0 16px',
              fontSize: 11,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: 'var(--ap-accent)',
            }}
          >
            Get in Touch
          </p>
          <h2
            style={{
              margin: '0 0 24px',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 44,
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#F5F0E8',
              lineHeight: 1.1,
              maxWidth: 420,
            }}
          >
            {contact.heading}
          </h2>
          <p style={{ margin: '0 0 40px', fontSize: 15, lineHeight: 1.8, color: 'rgba(245,240,232,0.58)', fontWeight: 300 }}>
            {contact.intro}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { label: 'Email', value: contact.email },
              { label: 'Instagram', value: contact.instagram },
              { label: 'Based in', value: contact.location },
            ].map((item) => (
              <div key={item.label}>
                <p
                  style={{
                    margin: '0 0 4px',
                    fontSize: 11,
                    letterSpacing: 3,
                    textTransform: 'uppercase',
                    color: 'rgba(201,168,76,0.65)',
                  }}
                >
                  {item.label}
                </p>
                <p style={{ fontSize: 20, color: '#F5F0E8', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p
            style={{
              margin: '0 0 24px',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 22,
              fontStyle: 'italic',
              color: 'rgba(245,240,232,0.72)',
            }}
          >
            Send a quick message
          </p>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <input placeholder="Your name" style={inputStyle} required />
            <input type="email" placeholder="Your email" style={inputStyle} required />
            <textarea placeholder="Your message..." style={{ ...inputStyle, height: 120, resize: 'vertical' }} />
            <button
              type="submit"
              style={{
                padding: 15,
                background: 'var(--ap-accent)',
                color: 'var(--ap-dark)',
                border: 'none',
                fontSize: 10,
                letterSpacing: 3,
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontWeight: 600,
                width: '100%',
              }}
            >
              {submitted ? 'Message Sent' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
