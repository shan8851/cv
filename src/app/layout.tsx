import type { Metadata } from 'next';
import { Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: '400',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Asam Shan | Senior Frontend Engineer',
  description:
    'Frontend-focused engineer shipping production web3 products across bridging, governance, and analytics. Currently at Polygon.',
  metadataBase: new URL('https://cv.shan8851.com'),
  keywords: [
    'Asam Shan',
    'Frontend Engineer',
    'Web3',
    'Polygon',
    'TypeScript',
    'React',
    'Next.js',
    'EVM',
    'Blockchain',
    'Software Engineer',
  ],
  authors: [{ name: 'Asam Shan' }],
  creator: 'Asam Shan',
  openGraph: {
    title: 'Asam Shan | Senior Frontend Engineer',
    description:
      'Frontend-focused engineer shipping production web3 products across bridging, governance, and analytics. Currently at Polygon.',
    url: 'https://cv.shan8851.com',
    siteName: 'Asam Shan',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        alt: 'Asam Shan — Senior Frontend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asam Shan | Senior Frontend Engineer',
    description:
      'Frontend-focused engineer shipping production web3 products. Currently at Polygon.',
    creator: '@shan8851',
    images: [
      {
        url: '/opengraph-image',
        alt: 'Asam Shan — Senior Frontend Engineer',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body
      className={`${instrumentSerif.variable} ${jetbrainsMono.variable} font-mono antialiased`}
    >
      {children}
    </body>
  </html>
);

export { RootLayout as default };
