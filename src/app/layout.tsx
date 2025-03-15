import { Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from '@/components/Navbar';
import { GoogleAnalytics } from '@next/third-parties/google'

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
});

const description = 'Welcome to my website, here you will find all the information about me that you will need.';
const siteName = 'Atharva Bangle';
const url = 'https://atharva-bangle.tech';

export const metadata = {
  title: {
    template: `%s | ${siteName}`,
    default: siteName,
  },
  description,
  openGraph: {
    description,
    url,
    type: 'website',
    siteName,
    locale: 'in_IND',
  },
  authors: [{ name: 'Atharva Bangle'}],
  creator: 'Atharva Bangle',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <ClerkProvider>
    <html lang="en" className={sourceSans3.className}>
      <body>
        <Navbar />
        { children }
      </body>
      <GoogleAnalytics gaId="G-7L4LT1FBQD" />
    </html>
  </ClerkProvider>
  );
}