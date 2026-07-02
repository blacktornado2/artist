import { useState } from 'react';
import { useSiteConfig } from '../../context/SiteConfigContext.jsx';
import { updateConfig, uploadImage } from '../../api/client.js';
import { uniquePaintingId } from '../../utils/slugify.js';
import PaintingEditorCard from './PaintingEditorCard.jsx';
import {
  fieldStyle,
  labelStyle,
  fieldGroupStyle,
  sectionCardStyle,
  sectionTitleStyle,
  primaryButtonStyle,
  ghostButtonStyle,
} from './formStyles.js';

export default function AdminDashboard({ token, onLogout }) {
  const { config, refresh } = useSiteConfig();
  const [draft, setDraft] = useState(() => JSON.parse(JSON.stringify(config)));
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState(null);

  function setTop(key, value) {
    setDraft((d) => ({ ...d, [key]: value }));
  }
  function setHero(key, value) {
    setDraft((d) => ({ ...d, hero: { ...d.hero, [key]: value } }));
  }
  function setAbout(key, value) {
    setDraft((d) => ({ ...d, about: { ...d.about, [key]: value } }));
  }
  function setAboutParagraph(index, value) {
    setDraft((d) => {
      const paragraphs = [...d.about.paragraphs];
      paragraphs[index] = value;
      return { ...d, about: { ...d.about, paragraphs } };
    });
  }
  function addAboutParagraph() {
    setDraft((d) => ({ ...d, about: { ...d.about, paragraphs: [...d.about.paragraphs, ''] } }));
  }
  function removeAboutParagraph(index) {
    setDraft((d) => ({
      ...d,
      about: { ...d.about, paragraphs: d.about.paragraphs.filter((_, i) => i !== index) },
    }));
  }
  function setContact(key, value) {
    setDraft((d) => ({ ...d, contact: { ...d.contact, [key]: value } }));
  }
  function updatePainting(index, key, value) {
    setDraft((d) => {
      const paintings = [...d.paintings];
      paintings[index] = { ...paintings[index], [key]: value };
      return { ...d, paintings };
    });
  }
  function addPainting() {
    setDraft((d) => {
      const id = uniquePaintingId('New Painting', d.paintings.map((p) => p.id));
      return {
        ...d,
        paintings: [
          ...d.paintings,
          {
            id,
            title: 'New Painting',
            medium: 'Oil on canvas',
            size: '',
            year: String(new Date().getFullYear()),
            illustration: 'hills',
            image: null,
            desc: '',
          },
        ],
      };
    });
  }
  function removePainting(index) {
    setDraft((d) => ({ ...d, paintings: d.paintings.filter((_, i) => i !== index) }));
  }

  async function handlePaintingImageUpload(index, file) {
    const { url } = await uploadImage(file, token);
    updatePainting(index, 'image', url);
  }

  async function handleAboutImageUpload(e) {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    try {
      const { url } = await uploadImage(file, token);
      setAbout('image', url);
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    }
  }

  async function handleSave() {
    setSaving(true);
    setStatus(null);
    try {
      const updated = await updateConfig(draft, token);
      setDraft(updated);
      await refresh();
      setStatus({ type: 'success', message: 'Saved — changes are live on the site.' });
    } catch (err) {
      if (err.message === 'Unauthorized') {
        onLogout();
        return;
      }
      setStatus({ type: 'error', message: err.message });
    } finally {
      setSaving(false);
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F5F0E8' }}>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'var(--ap-dark)',
          padding: '0 40px',
          height: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 20,
              fontStyle: 'italic',
              color: '#F5F0E8',
            }}
          >
            Owner Dashboard
          </span>
          <a
            href="#gallery"
            style={{
              fontSize: 11,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.55)',
            }}
          >
            View site →
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {status && (
            <span
              style={{
                fontSize: 12,
                color: status.type === 'error' ? '#E8968A' : 'var(--ap-accent)',
              }}
            >
              {status.message}
            </span>
          )}
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            style={{ ...primaryButtonStyle, background: 'var(--ap-accent)', color: 'var(--ap-dark)' }}
          >
            {saving ? 'Saving…' : 'Save Changes'}
          </button>
          <button
            type="button"
            onClick={onLogout}
            style={{ ...ghostButtonStyle, borderColor: 'rgba(245,240,232,0.3)', color: '#F5F0E8' }}
          >
            Log Out
          </button>
        </div>
      </header>

      <main style={{ maxWidth: 960, margin: '0 auto', padding: '40px 40px 100px' }}>
        {/* Branding */}
        <section style={sectionCardStyle}>
          <h2 style={sectionTitleStyle}>Branding</h2>
          <div style={fieldGroupStyle}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={labelStyle}>Artist / Studio Name</label>
                <input
                  value={draft.artistName}
                  onChange={(e) => setTop('artistName', e.target.value)}
                  style={fieldStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Hero Painting</label>
                <select
                  value={draft.heroPaintingId}
                  onChange={(e) => setTop('heroPaintingId', e.target.value)}
                  style={fieldStyle}
                >
                  {draft.paintings.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Accent Color</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input
                    type="color"
                    value={draft.accentColor}
                    onChange={(e) => setTop('accentColor', e.target.value)}
                    style={{ width: 44, height: 40, border: 'none', padding: 0, background: 'none' }}
                  />
                  <input
                    value={draft.accentColor}
                    onChange={(e) => setTop('accentColor', e.target.value)}
                    style={fieldStyle}
                  />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Dark Background Color</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input
                    type="color"
                    value={draft.darkColor}
                    onChange={(e) => setTop('darkColor', e.target.value)}
                    style={{ width: 44, height: 40, border: 'none', padding: 0, background: 'none' }}
                  />
                  <input
                    value={draft.darkColor}
                    onChange={(e) => setTop('darkColor', e.target.value)}
                    style={fieldStyle}
                  />
                </div>
              </div>
            </div>
            <div>
              <label style={labelStyle}>Quote / Tagline</label>
              <textarea
                value={draft.tagline}
                onChange={(e) => setTop('tagline', e.target.value)}
                style={{ ...fieldStyle, height: 60, resize: 'vertical' }}
              />
            </div>
          </div>
        </section>

        {/* Hero */}
        <section style={sectionCardStyle}>
          <h2 style={sectionTitleStyle}>Hero Section</h2>
          <div style={fieldGroupStyle}>
            <div>
              <label style={labelStyle}>Eyebrow</label>
              <input
                value={draft.hero.eyebrow}
                onChange={(e) => setHero('eyebrow', e.target.value)}
                style={fieldStyle}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
              <div>
                <label style={labelStyle}>Heading Line 1</label>
                <input
                  value={draft.hero.headingLine1}
                  onChange={(e) => setHero('headingLine1', e.target.value)}
                  style={fieldStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Heading Emphasis</label>
                <input
                  value={draft.hero.headingEmphasis}
                  onChange={(e) => setHero('headingEmphasis', e.target.value)}
                  style={fieldStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Heading Line 2</label>
                <input
                  value={draft.hero.headingLine2}
                  onChange={(e) => setHero('headingLine2', e.target.value)}
                  style={fieldStyle}
                />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Body Copy</label>
              <textarea
                value={draft.hero.body}
                onChange={(e) => setHero('body', e.target.value)}
                style={{ ...fieldStyle, height: 70, resize: 'vertical' }}
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section style={sectionCardStyle}>
          <h2 style={sectionTitleStyle}>About the Artist</h2>
          <div style={fieldGroupStyle}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  value={draft.about.name}
                  onChange={(e) => setAbout('name', e.target.value)}
                  style={fieldStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Sub-label</label>
                <input
                  value={draft.about.subLabel}
                  onChange={(e) => setAbout('subLabel', e.target.value)}
                  style={fieldStyle}
                />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Portrait Photo</label>
              <label
                style={{
                  ...ghostButtonStyle,
                  display: 'inline-block',
                  cursor: 'pointer',
                  color: 'var(--ap-dark)',
                }}
              >
                {draft.about.image ? 'Replace Photo' : 'Upload Photo'}
                <input type="file" accept="image/*" onChange={handleAboutImageUpload} style={{ display: 'none' }} />
              </label>
              {draft.about.image && (
                <button
                  type="button"
                  onClick={() => setAbout('image', null)}
                  style={{ ...ghostButtonStyle, marginLeft: 10 }}
                >
                  Remove Photo
                </button>
              )}
            </div>
            {draft.about.paragraphs.map((paragraph, i) => (
              <div key={i}>
                <label style={labelStyle}>Paragraph {i + 1}</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  <textarea
                    value={paragraph}
                    onChange={(e) => setAboutParagraph(i, e.target.value)}
                    style={{ ...fieldStyle, height: 60, resize: 'vertical' }}
                  />
                  <button
                    type="button"
                    onClick={() => removeAboutParagraph(i)}
                    style={{ ...ghostButtonStyle, alignSelf: 'flex-start' }}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
            <button type="button" onClick={addAboutParagraph} style={{ ...ghostButtonStyle, alignSelf: 'flex-start' }}>
              + Add Paragraph
            </button>
          </div>
        </section>

        {/* Contact */}
        <section style={sectionCardStyle}>
          <h2 style={sectionTitleStyle}>Contact</h2>
          <div style={fieldGroupStyle}>
            <div>
              <label style={labelStyle}>Heading</label>
              <input
                value={draft.contact.heading}
                onChange={(e) => setContact('heading', e.target.value)}
                style={fieldStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Intro Copy</label>
              <textarea
                value={draft.contact.intro}
                onChange={(e) => setContact('intro', e.target.value)}
                style={{ ...fieldStyle, height: 60, resize: 'vertical' }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  value={draft.contact.email}
                  onChange={(e) => setContact('email', e.target.value)}
                  style={fieldStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Instagram</label>
                <input
                  value={draft.contact.instagram}
                  onChange={(e) => setContact('instagram', e.target.value)}
                  style={fieldStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Based In</label>
                <input
                  value={draft.contact.location}
                  onChange={(e) => setContact('location', e.target.value)}
                  style={fieldStyle}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Paintings */}
        <section style={sectionCardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h2 style={sectionTitleStyle}>Paintings ({draft.paintings.length})</h2>
            <button type="button" onClick={addPainting} style={ghostButtonStyle}>
              + Add Painting
            </button>
          </div>
          <div>
            {draft.paintings.map((painting, index) => (
              <PaintingEditorCard
                key={painting.id}
                painting={painting}
                onChange={(key, value) => updatePainting(index, key, value)}
                onImageUpload={(file) => handlePaintingImageUpload(index, file)}
                onRemove={() => removePainting(index)}
              />
            ))}
            {draft.paintings.length === 0 && (
              <p style={{ fontSize: 14, color: 'var(--ap-warm-subtle)', padding: '16px 0' }}>
                No paintings yet — add one above.
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
