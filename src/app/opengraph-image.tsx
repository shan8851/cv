import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Asam Shan — Senior Frontend Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const OgImage = () =>
  new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0A0A0F',
          fontFamily: 'monospace',
        }}
      >
        {/* Decorative top bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px',
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
          <span style={{ color: '#4A4A5E', fontSize: 16, marginLeft: 12 }}>shan@portfolio</span>
        </div>

        {/* Terminal border */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #1E1E2E',
            borderRadius: '12px',
            padding: '48px',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          {/* Prompt line */}
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '24px' }}>
            <span style={{ color: '#00FFCC', fontSize: 24 }}>$</span>
            <span style={{ color: '#6B6B80', fontSize: 24, marginLeft: 12 }}>cat about.md</span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: '#00FFCC',
              letterSpacing: '-2px',
              lineHeight: 1,
              marginBottom: '16px',
            }}
          >
            Asam Shan
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 28,
              color: '#6B6B80',
              marginBottom: '32px',
            }}
          >
            Senior Frontend Engineer (Web3 Product)
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {['Polygon', 'TypeScript', 'React', 'Next.js', 'EVM'].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #1E1E2E',
                  borderRadius: '6px',
                  color: '#E0E0E8',
                  fontSize: 18,
                  background: '#12121A',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Status bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '16px',
            color: '#4A4A5E',
            fontSize: 14,
          }}
        >
          <span>UTF-8 · TypeScript · Spaces: 2</span>
          <span>shan8851.com</span>
        </div>
      </div>
    ),
    { ...size },
  );

export { OgImage as default };
