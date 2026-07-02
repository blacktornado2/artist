import { useState } from 'react';

const inputStyle = {
  padding: '13px 16px',
  border: '1px solid rgba(45,74,62,0.18)',
  fontSize: 14,
  fontFamily: "'DM Sans', sans-serif",
  color: '#1E1A14',
  background: '#FAFAF5',
  outline: 'none',
  width: '100%',
};

const steps = [
  {
    n: 1,
    title: 'Send an enquiry',
    body: "Describe what you have in mind — the subject, where it will hang, and the feel you're after.",
  },
  {
    n: 2,
    title: 'We talk it through',
    body: "I'll respond personally within a few days to discuss your vision and confirm details.",
  },
  {
    n: 3,
    title: 'Your painting is made',
    body: "I'll send progress photos and deliver the finished work, packed and signed.",
  },
];

export default function Commission() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="commission" className="mob-section" style={{ background: '#F5F0E8', padding: '88px 64px' }}>
      <div className="mob-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'start' }}>
        <div>
          <p
            style={{
              margin: '0 0 16px',
              fontSize: 10,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#8FA67A',
            }}
          >
            Commission a Painting
          </p>
          <h2
            style={{
              margin: '0 0 24px',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 48,
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.08,
              color: 'var(--ap-dark)',
            }}
          >
            A work made
            <br />
            for your space
          </h2>
          <p style={{ margin: '0 0 18px', fontSize: 15, lineHeight: 1.82, color: '#5A5040', fontWeight: 300 }}>
            I accept a small number of commissions each year — a way of making the work
            personal, and the connection between painting and home more deliberate.
          </p>
          <p style={{ margin: '0 0 36px', fontSize: 15, lineHeight: 1.82, color: '#5A5040', fontWeight: 300 }}>
            If you have a landscape, a memory, or a mood in mind — tell me. We'll talk
            about size, medium, and what would make it yours.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {steps.map((step) => (
              <div key={step.n} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    background: 'var(--ap-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      color: 'var(--ap-accent)',
                      fontSize: 14,
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: 'italic',
                    }}
                  >
                    {step.n}
                  </span>
                </div>
                <div>
                  <p style={{ margin: '0 0 4px', fontSize: 14, fontWeight: 500, color: 'var(--ap-dark)', letterSpacing: 0.3 }}>
                    {step.title}
                  </p>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: '#8A7A64', fontWeight: 300 }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background: '#fff',
            padding: '44px 40px',
            boxShadow: '0 2px 24px rgba(26,46,38,0.07)',
            border: '1px solid rgba(45,74,62,0.1)',
          }}
        >
          <p
            style={{
              margin: '0 0 28px',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 24,
              fontStyle: 'italic',
              color: 'var(--ap-dark)',
            }}
          >
            Tell me about your vision
          </p>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="mob-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <input placeholder="Your name" style={inputStyle} required />
              <input type="email" placeholder="Your email" style={inputStyle} required />
            </div>
            <select style={inputStyle} defaultValue="">
              <option value="">Subject matter</option>
              <option>Landscape</option>
              <option>Still life</option>
              <option>Both / not sure yet</option>
            </select>
            <select style={inputStyle} defaultValue="">
              <option value="">Approximate size</option>
              <option>Small (up to 40×50 cm)</option>
              <option>Medium (50×70 cm)</option>
              <option>Large (70×90 cm or bigger)</option>
              <option>Not sure — let's discuss</option>
            </select>
            <textarea
              placeholder="Describe your vision — a place, a feeling, how you imagine the painting in your home..."
              style={{ ...inputStyle, height: 130, resize: 'vertical' }}
            />
            <button
              type="submit"
              style={{
                padding: 16,
                background: 'var(--ap-dark)',
                color: '#F5F0E8',
                border: 'none',
                fontSize: 10,
                letterSpacing: 3,
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontWeight: 500,
                width: '100%',
              }}
            >
              Send Commission Enquiry
            </button>
            <p style={{ margin: 0, fontSize: 11, color: '#8FA67A', textAlign: 'center', lineHeight: 1.5 }}>
              {submitted
                ? 'Thank you — your enquiry has been sent.'
                : 'I read every message personally and respond within 3–5 days.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
