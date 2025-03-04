import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "learning next js",
    template: "%s | Learning "
  },
  description: "try to learn",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        <main className="h-screen h-max-[600px]">
          {children} 
          {/* children e all component load hobe */}
        </main>
        
        <footer> this is footer</footer>
      </body>
    </html>
  );
}
