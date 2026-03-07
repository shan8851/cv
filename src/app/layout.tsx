import type { Metadata } from 'next';
import { JetBrains_Mono, IBM_Plex_Mono, Outfit } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['600', '700'],
});

const outfit = Outfit({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['800'],
});

export const metadata: Metadata = {
  title: 'Asam Shan | Senior Full Stack Engineer',
  description:
    'Senior Full Stack Engineer shipping production web3 applications across payments, bridging, and staking. Currently at Polygon.',
  metadataBase: new URL('https://www.shan8851.com'),
  keywords: [
    'Asam Shan',
    'Full Stack Engineer',
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
    title: 'Asam Shan | Senior Full Stack Engineer',
    description:
      'Senior Full Stack Engineer shipping production web3 applications across payments, bridging, and staking. Currently at Polygon.',
    url: 'https://www.shan8851.com',
    siteName: 'Asam Shan',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asam Shan | Senior Full Stack Engineer',
    description:
      'Senior Full Stack Engineer shipping production web3 applications. Currently at Polygon.',
    creator: '@shan8851',
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
      className={`${jetbrainsMono.variable} ${ibmPlexMono.variable} ${outfit.variable} font-mono antialiased`}
      style={{ fontFamily: 'var(--font-mono)' }}
    >
      {children}
    </body>
  </html>
);

export { RootLayout as default };
