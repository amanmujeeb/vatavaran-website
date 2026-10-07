import './globals.css';

export const metadata = {
  title: 'Vatavaran Banquets & Lawns | Kalaburagi',
  description: 'A premium destination for weddings, receptions, engagements and celebrations in Kalaburagi, Karnataka.',
  keywords: ['Vatavaran Banquets', 'Vatavaran Lawns', 'function hall Kalaburagi', 'wedding venue Kalaburagi', 'banquet hall Kalaburagi'],
  openGraph: { title: 'Vatavaran Banquets & Lawns', description: 'Your celebration. Your space. Your moment.', type: 'website' }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
