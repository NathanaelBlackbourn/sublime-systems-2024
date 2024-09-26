import { Layout } from '@/components/dom/Layout/Layout';
import '@/global.css';
import localFont from 'next/font/local';

const inter = localFont({
  src: './InterVariable.woff2',
  weight: '100-900',
  display: 'swap',
});

export const metadata = {
  title: 'SUBLIME SYSTEMS',
  description: 'Website of Nathanael Blackbourn, web developer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={inter.className}>
      <head />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
