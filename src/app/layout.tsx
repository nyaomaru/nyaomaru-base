import { Metadata } from 'next';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Nyaomaru',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
