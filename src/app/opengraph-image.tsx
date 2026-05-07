import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Asam Shan — Senior Software Engineer';
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
          justifyContent: 'space-between',
          padding: '72px 78px',
          background: 'linear-gradient(135deg, #191511 0%, #100F0E 58%, #0B0A09 100%)',
          color: '#F0E9DF',
          fontFamily: 'Georgia, serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -180,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 520,
            background: 'rgba(216, 168, 79, 0.12)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -220,
            left: -160,
            width: 520,
            height: 520,
            borderRadius: 520,
            background: 'rgba(255, 255, 255, 0.04)',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            zIndex: 1,
            fontFamily: 'monospace',
            fontSize: 17,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#8C8377',
          }}
        >
          Senior Software Engineer
        </div>

        <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 92,
              letterSpacing: -5,
              lineHeight: 0.86,
              marginBottom: 28,
            }}
          >
            Asam Shan
          </div>
          <div
            style={{
              width: 780,
              fontFamily: 'Arial, sans-serif',
              fontSize: 31,
              lineHeight: 1.32,
              color: '#C4BAAD',
            }}
          >
            Production web3 systems, AI-assisted developer tooling, and engineering workflows that survive contact with reality.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 1,
            fontFamily: 'monospace',
            fontSize: 17,
          }}
        >
          <div style={{ display: 'flex', gap: 15, color: '#D8A84F' }}>
            <span>TypeScript</span>
            <span>·</span>
            <span>Web3</span>
            <span>·</span>
            <span>AI workflows</span>
          </div>
          <span style={{ color: '#8C8377' }}>cv.shan8851.com</span>
        </div>
      </div>
    ),
    { ...size },
  );

export { OgImage as default };
