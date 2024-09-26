import { Layout } from '@/components/dom/Layout/Layout';
import '@/global.css';

export const metadata = {
  title: 'SUBLIME SYSTEMS',
  description: 'Website of Nathanael Blackbour, web developer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
