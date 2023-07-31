import '../globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My awesome site',
  description: 'The best next-sanity-app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
