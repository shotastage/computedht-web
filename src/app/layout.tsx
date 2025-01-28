// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Breadcrumbs from '@/components/Breadcrumbs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ComputeDHT - Next Generation Distributed Computing',
  description: 'DHT-based distributed computing platform with WebAssembly runtime',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navigation />
        <Breadcrumbs />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
