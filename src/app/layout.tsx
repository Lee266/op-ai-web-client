import type { Metadata } from 'next';
import { Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ai Lab',
  description: 'AIの開発に関するアプリケーションです',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#fff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
