import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./(header)/Header";
import Footer from "./(footer)/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eveil G",
  description: "Votre éveil de conscience commence ici!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bg`}>
        <Header />
        <div className="mb-[5rem] ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
