"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "../components/components/ui/sonner";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import { Suspense } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Suspense fallback={<div>loading....</div>}>
          <Provider store={store}>
            <div className="w-full max-w-[3840px] mx-auto font-poppins">
              <Toaster position="top-right" richColors />
              {children}
            </div>
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
