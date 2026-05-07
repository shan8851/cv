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
          background: '#0F0F0F',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: 96,
              color: '#E8E4DF',
              fontStyle: 'italic',
              lineHeight: 1,
              marginBottom: '20px',
            }}
          >
            Asam Shan
          </div>

          <div
            style={{
              fontSize: 28,
              color: '#9A9590',
              fontFamily: 'monospace',
              marginBottom: '40px',
            }}
          >
            Senior Frontend Engineer (Web3 Product)
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {['Polygon', 'TypeScript', 'React', 'Next.js', 'EVM'].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #2A2A2A',
                  borderRadius: '100px',
                  color: '#9A9590',
                  fontSize: 16,
                  fontFamily: 'monospace',
                  background: '#171717',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid #2A2A2A',
            paddingTop: '20px',
            color: '#5C5854',
            fontSize: 14,
            fontFamily: 'monospace',
          }}
        >
          <span>shan8851.com</span>
          <span style={{ color: '#D4A039' }}>cv.shan8851.com</span>
        </div>
      </div>
    ),
    { ...size },
  );

export { OgImage as default };
