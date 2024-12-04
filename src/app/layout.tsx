import React from 'react';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';

export const metadata = {
  title: 'Ryan Alexander',
  description: 'Personal website and portfolio',
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-zinc-950 text-zinc-100">
        <Navigation>{children}</Navigation>
      </body>
    </html>
  );
}