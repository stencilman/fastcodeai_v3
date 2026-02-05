export default function manifest() {
  return {
    name: 'FastCode AI',
    short_name: 'FastCode',
    description: 'Fast Code AI - Accelerating Innovation',
    start_url: '/',
    display: 'standalone',
    background_color: '#00081f',
    theme_color: '#00081f',
    icons: [
      {
        src: '/FastCodeAI_color.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
