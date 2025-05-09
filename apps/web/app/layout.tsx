import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import ChatWidget from './components/ChatWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AtVest - Automated Crypto Trading Investment',
  description: 'Invest in our rasta-trendier trading strategy and earn profits while we manage your investments',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${inter.className} min-h-screen transition-colors duration-300`}>
        <ThemeProvider>
          <AuthProvider>
            {children}
            <ChatWidget />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
