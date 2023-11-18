import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Rock,Paper and Scissors with a Crypto-Enabled GPT',
  description: 'Demo forked from  Syndicate.io ,GitHub repo by ian @syndicateio in couple hours with OpenAI and Syndicate.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
