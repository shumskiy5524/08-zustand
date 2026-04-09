import './globals.css';
import { Roboto } from 'next/font/google';
import { Metadata } from 'next';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NoteHub',
  description: 'NoteHub — зручний застосунок для створення та управління нотатками',
  openGraph: {
    title: 'NoteHub',
    description: 'NoteHub — зручний застосунок для створення та управління нотатками',
    url: 'https://yourdomain.com',
    images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={roboto.variable}>
      <body>{children}</body>
    </html>
  );
}