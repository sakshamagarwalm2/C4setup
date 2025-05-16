import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'GreenTrace | Green Hydrogen',
  description: 'Newtrace is on a mission to enable cost effective and reliable access to green hydrogen.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} font-sans antialiased bg-background`}>
        <div className="fixed inset-0 border-[8px] border-primary pointer-events-none z-[9999]"></div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}