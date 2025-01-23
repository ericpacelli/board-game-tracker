import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Sidebar } from './components/sidebar';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Board Game Tracker",
    description: "Track your board game collection and plays",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex w-screen h-screen overflow-hidden`}>
                <Sidebar />
                <main className='flex-1 p-4 overflow-y-auto'>
                    <div>
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
