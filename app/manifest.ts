import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chayachobi Photographer Portfolio',
    short_name: 'Chayachobi',
    description: 'Welcome to Chayachobi, where every frame tells a story. Founded in 2022, our journey began with a simple love for capturing moments and turning them into timeless memories. We believe every picture holds a piece of time — a reflection of beauty, culture, and emotion. From intimate portraits to grand celebrations, Chayachobi continues to frame stories that stay close to the heart.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/Logo.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
    ],
  }
}