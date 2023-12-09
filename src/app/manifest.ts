import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: '#fff',
    background_color: '#fff',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    name: 'AI lab',
    short_name: 'Lab',
    description: 'AIの開発に関するアプリケーションです。',
    icons: [
      {
        src: './favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
        purpose: 'maskable',
      },
      {
        src: './icon.png',
        sizes: '512x512',
      },
    ],
  };
}
