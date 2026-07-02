import PaintingIllustration from './PaintingIllustration.jsx';

export default function PaintingImage({ painting }) {
  if (painting?.image) {
    return (
      <img
        src={painting.image}
        alt={painting.title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    );
  }
  return <PaintingIllustration name={painting?.illustration || 'hills'} />;
}
