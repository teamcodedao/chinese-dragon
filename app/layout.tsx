import type {Metadata} from 'next';
import {RocknRoll_One} from 'next/font/google';
import './globals.css';

const font = RocknRoll_One({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Chinese Dragon',
  description: 'Chinese Dragon',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
