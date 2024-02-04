import "./globals.css";

import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

import { StoreProvider } from "@/src/01_app/providers/StoreProvider";
import { Sidebar } from "@/src/04_widgets/sidebar/ui";

const inter = Inter({ subsets: ["latin"] });

const ToastProvider = dynamic(
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
        <body className={`${inter.className} w-full min-h-screen `}>
          <ToastProvider />
          <div className="relative flex w-full min-h-screen">
            <Sidebar />
            <div className="flex-grow">{children}</div>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
