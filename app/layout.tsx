import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";

const inter = Inter({ subsets: ["latin"] });

// Добавим мета-теги, это полезно для SEO
export const metadata: Metadata = {
  title: "Мастерская [Имя Мастера]",
  description: "Ремонт одежды, мебели и вязание на заказ в Дубоссарах",
};

// Компонент футера.
// (Этот код у вас уже есть, он правильный)
function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <p className="footer-copyright">
          {/* Динамически получаем текущий год */}
          © {new Date().getFullYear()} [Имя Мастера]. Все права защищены.
        </p>
        <nav className="footer-links">
          <a href="/">Главная</a>
          <a href="/services">Услуги</a>
          <a href="/portfolio">Портфолио</a>
          <a href="/contact">Контакты</a>
          {/* Обязательно замените # на ваши реальные ссылки */}
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Telegram</a>
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