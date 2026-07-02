import { useRef, useState } from 'react';
import PaintingImage from '../PaintingImage.jsx';
import { fieldStyle, labelStyle, dangerButtonStyle, ghostButtonStyle } from './formStyles.js';

const ILLUSTRATION_OPTIONS = [
  { value: 'hills', label: 'Misty hills' },
  { value: 'coastal', label: 'Coastline' },
  { value: 'lemons', label: 'Lemon still life' },
  { value: 'golden', label: 'Golden field' },
  { value: 'flowers', label: 'Flower bouquet' },
  { value: 'forest', label: 'Forest' },
];

export default function PaintingEditorCard({ painting, onChange, onImageUpload, onRemove }) {
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  async function handleFileChange(e) {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    setUploading(true);
    setUploadError(null);
    try {
      await onImageUpload(file);
    } catch (err) {
      setUploadError(err.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '160px 1fr auto',
        gap: 20,
        alignItems: 'start',
        padding: '20px 0',
        borderBottom: '1px solid rgba(45,74,62,0.1)',
      }}
    >
      <div>
        <div
          style={{
            aspectRatio: '4/3',
            overflow: 'hidden',
            border: '1px solid rgba(45,74,62,0.12)',
            marginBottom: 8,
          }}
        >
          <PaintingImage painting={painting} />
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          style={{ ...ghostButtonStyle, width: '100%', fontSize: 9, padding: '8px 10px' }}
        >
          {uploading ? 'Uploading…' : 'Upload Photo'}
        </button>
        {uploadError && (
          <p style={{ margin: '6px 0 0', fontSize: 11, color: '#A0402C' }}>{uploadError}</p>
        )}
        {!painting.image && (
          <div style={{ marginTop: 8 }}>
            <label style={{ ...labelStyle, margin: '0 0 4px' }}>Placeholder art</label>
            <select
              value={painting.illustration || 'hills'}
              onChange={(e) => onChange('illustration', e.target.value)}
              style={{ ...fieldStyle, fontSize: 12, padding: '8px 10px' }}
            >
              {ILLUSTRATION_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        )}
        {painting.image && (
          <button
            type="button"
            onClick={() => onChange('image', null)}
            style={{ ...ghostButtonStyle, width: '100%', fontSize: 9, padding: '8px 10px', marginTop: 8 }}
          >
            Remove Photo
          </button>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <label style={labelStyle}>Title</label>
          <input
            value={painting.title}
            onChange={(e) => onChange('title', e.target.value)}
            style={fieldStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Year</label>
          <input
            value={painting.year}
            onChange={(e) => onChange('year', e.target.value)}
            style={fieldStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Medium</label>
          <input
            value={painting.medium}
            onChange={(e) => onChange('medium', e.target.value)}
            style={fieldStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Size</label>
          <input
            value={painting.size}
            onChange={(e) => onChange('size', e.target.value)}
            style={fieldStyle}
          />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={labelStyle}>Description</label>
          <textarea
            value={painting.desc}
            onChange={(e) => onChange('desc', e.target.value)}
            style={{ ...fieldStyle, height: 70, resize: 'vertical' }}
          />
        </div>
      </div>

      <button type="button" onClick={onRemove} style={dangerButtonStyle}>
        Remove
      </button>
    </div>
  );
}
