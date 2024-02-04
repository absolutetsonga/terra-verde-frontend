import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

import { StoreProvider } from "@/src/01_app/providers/StoreProvider";
import { Sidebar } from "@/src/04_widgets/sidebar/ui";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const ToastProvider = dynamic(
  () => import("../src/01_app/providers/ToastProvider"),
  {
    ssr: false,
  }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToastProvider />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            <Sidebar />
            {children}
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
