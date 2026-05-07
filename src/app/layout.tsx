import type { Metadata } from 'next';
import { IBM_Plex_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: '400',
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Asam Shan | Senior Software Engineer',
  description:
    'Senior software engineer shipping production web3 systems and AI-assisted developer tooling. Currently at Polygon.',
  metadataBase: new URL('https://cv.shan8851.com'),
  keywords: [
    'Asam Shan',
    'Senior Software Engineer',
    'Web3',
    'Polygon',
    'TypeScript',
    'React',
    'Next.js',
    'EVM',
    'Blockchain',
    'AI workflows',
    'Developer tooling',
    'Software Engineer',
  ],
  authors: [{ name: 'Asam Shan' }],
  creator: 'Asam Shan',
  openGraph: {
    title: 'Asam Shan | Senior Software Engineer',
    description:
      'Senior software engineer shipping production web3 systems and AI-assisted developer tooling. Currently at Polygon.',
    url: 'https://cv.shan8851.com',
    siteName: 'Asam Shan',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        alt: 'Asam Shan — Senior Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asam Shan | Senior Software Engineer',
    description:
      'Senior software engineer shipping web3 systems and AI-assisted developer tooling.',
    creator: '@shan8851',
    images: [
      {
        url: '/opengraph-image',
        alt: 'Asam Shan — Senior Software Engineer',
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
      className={`${instrumentSerif.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      {children}
    </body>
  </html>
);

export { RootLayout as default };
