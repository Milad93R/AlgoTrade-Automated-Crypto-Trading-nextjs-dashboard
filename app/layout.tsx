import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Providers } from "./providers";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AtVest - Automated Crypto Trading Investment',
  description: 'Invest in our automated trading strategy and earn profits while we manage your investments',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
