import { Inter } from "next/font/google";
import "./globals.css";

import { StoreProvider } from "@/src/01_app/providers/StoreProvider";
import dynamic from "next/dynamic";

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
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
