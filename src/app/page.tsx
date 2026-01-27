import Link from 'next/link';

const templates = [
  { id: 'heritage', name: 'The Heritage', icon: '🕌', description: 'Traditional & Timeless - Arabesque patterns' },
  { id: 'modern-ummah', name: 'Modern Ummah', icon: '✨', description: 'Minimalist & Clean - SaaS-like design' },
  { id: 'community-hub', name: 'Community Hub', icon: '🤝', description: 'Vibrant & Energetic - Card-based' },
  { id: 'institution', name: 'Institution', icon: '🏛️', description: 'Corporate & Trustworthy - Professional' },
  { id: 'sanctuary', name: 'Sanctuary', icon: '🌿', description: 'Nature & Green Deen - Organic shapes' },
  { id: 'qiyam', name: 'Qiyam', icon: '🌙', description: 'Immersive & Ethereal - Glassmorphism' },
];

export default function Home() {
  return (
    <main style={{
      padding: '3rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
    }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>
          🕋 Universal Masjid Templates
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
          Select a design flavor to preview. Each template has unique aesthetics and styling.
        </p>
      </header>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem',
      }}>
        {templates.map((template) => (
          <Link
            key={template.id}
            href={`/${template.id}`}
            style={{
              display: 'block',
              padding: '2rem',
              border: '2px solid #e2e8f0',
              borderRadius: '1rem',
              background: '#fff',
              transition: 'transform 0.2s, box-shadow 0.2s',
              textDecoration: 'none',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{template.icon}</div>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>
              {template.name}
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              {template.description}
            </p>
            <span style={{
              display: 'inline-block',
              padding: '0.375rem 0.75rem',
              background: '#1a5d3a',
              color: 'white',
              fontSize: '0.75rem',
              fontWeight: 600,
              borderRadius: '9999px',
            }}>
              Preview →
            </span>
          </Link>
        ))}
      </div>

      <footer style={{ marginTop: '4rem', textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid #e2e8f0' }}>
        <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
          Built with Next.js App Router
        </p>
      </footer>
    </main>
  );
}
