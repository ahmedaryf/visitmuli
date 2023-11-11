import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meemu Muli | Your Ultimate Surfing Destination",
  description:
    "Discover Surfing Paradise in Meemu Muli | Surf Adventures Await",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>{" "}
      </body>
    </html>
  );
}
