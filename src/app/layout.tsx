import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import VoronoiBackground from "./_components/VoronoiBackground";
import NavBar from "./_components/NavBar";

export const metadata: Metadata = {
  title: "Salaryman Dev",
  description: "Personal website for Robert Kennedy (SalarymanDev)",
  icons: [{ rel: "icon", type: "image/png", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-gray-800">
        <NavBar />
        <main className="relative z-10 flex min-h-screen w-auto items-center justify-center">
          <div className="w-auto rounded-lg bg-gray-900 bg-opacity-50 p-8 shadow-lg backdrop-blur-sm">
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </div>
        </main>
        <VoronoiBackground />
      </body>
    </html>
  );
}
