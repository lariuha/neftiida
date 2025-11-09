import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "N&N",
  description: "Ремонт одежды, мебели и вязание на заказ в Дубоссарах",

  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};


function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <p className="footer-copyright">
          © {new Date().getFullYear()} N&N. Все права защищены.
        </p>
        <nav className="footer-links">
          <a href="/">Главная</a>
          <a href="/services">Услуги</a>
          <a href="/portfolio">Портфолио</a>
          <a href="/contact">Контакты</a>
          <a href="https://www.instagram.com/neftiida_handmade.md" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://t.me/+37369697829" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href="https://vk.com/neftiida" target="_blank" rel="noopener noreferrer">ВКонтакте</a>
        </nav>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head />
      <body className={inter.className + " flex flex-col min-h-screen"}>
        <Header />
        
        <main className="flex-grow flex flex-col items-center">
          {children} 
        </main>
        
        <Footer />
      </body>
    </html>
  );
}