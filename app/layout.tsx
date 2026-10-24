import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { LanguageProvider } from '@/components/LanguageProvider';
import './globals.css';
const serif = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-serif', display: 'swap' });
const sans = Manrope({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
export const metadata: Metadata = { title: 'Bay Marina | Sushi à la carte em Setúbal', description: 'Conheça o Bay Marina, em Setúbal. Sushi preparado ao seu pedido, buffet à la carte e um espaço para ficar.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-PT"><body className={`${serif.variable} ${sans.variable}`}><LanguageProvider>{children}</LanguageProvider><Analytics /></body></html>;
}
