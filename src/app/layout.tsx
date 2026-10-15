import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, DM_Sans, Caveat } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-handwriting',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'A Little More of You — Romantic Birthday Scrapbook',
  description:
    'A handmade romantic digital scrapbook filled with Polaroid memories, love notes, and birthday surprises.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable} ${dmSans.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F7F0E5] text-[#464039] antialiased paper-texture selection:bg-[#E7D7C3] selection:text-[#8B514B]">
        {children}
      </body>
    </html>
  );
}
