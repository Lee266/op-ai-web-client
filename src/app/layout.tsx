import { UserProvider } from '@auth0/nextjs-auth0/client';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from 'next';
import { Viewport } from 'next';
import { Inter } from 'next/font/google';
import MUIThemeProvider from './components/providers/ThemeProvider';
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
      <UserProvider>
        <MUIThemeProvider>
          <body className={inter.className}>
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>{children}</AppRouterCacheProvider>
          </body>
        </MUIThemeProvider>
      </UserProvider>
    </html>
  );
}
