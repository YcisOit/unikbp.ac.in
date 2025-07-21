import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header1 from './components/Header1';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Karmaveer Bhaurao Patil University,Satara",
  description: "Karmaveer Bhaurao Patil University,Satara",
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {/* इथे Header1 समाविष्ट करा */}
        <Header1 />

  
        {children}

        {/* इथे Footer समाविष्ट करा */}
        <Footer />
      </body>
    </html>
  );
}
