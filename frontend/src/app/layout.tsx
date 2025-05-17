'use client'

import { Work_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ApiProvider } from '@/lib/api-context';

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} font-sans antialiased bg-background`}>
        <ApiProvider>
          <div className="fixed inset-0 border-[8px] border-primary pointer-events-none z-[9999]"></div>
          <Header />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ApiProvider>
      </body>
    </html>
  );
}