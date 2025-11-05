// app/components/Header.tsx

/* ОБЯЗАТЕЛЬНО: "use client", потому что мы используем useState */
"use client"; 

import { useState } from 'react';
import Link from 'next/link'; // Используем Link от Next.js для быстрой навигации

export default function Header() {
  // 1. Создаем "состояние" (state) для мобильного меню
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 2. Функция, которая "переключает" состояние
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // (true -> false, false -> true)
  };

  return (
    <header className="header-wrapper">
      <div className="header-content">
        
        {/* --- Логотип --- */}
        <Link href="/" className="header-logo">
          Neftiida
        </Link>

        {/* --- Навигация (Десктоп) --- */}
        <nav className="header-nav-desktop">
          <Link href="/" className="header-nav-link">Главная</Link>
          <Link href="/services" className="header-nav-link">Услуги</Link>
          <Link href="/portfolio" className="header-nav-link">Портфолио</Link>
          <Link href="/about" className="header-nav-link">Обо мне</Link>
          <Link href="/contact" className="header-nav-link">Контакты</Link>
        </nav>

        {/* --- Кнопка (Гамбургер) --- */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu} // (Вызываем нашу функцию по клику)
          aria-label="Открыть меню"
        >
          {/* Это SVG иконка. Она меняется в зависимости от состояния */}
          {isMobileMenuOpen ? (
            // Иконка "Крестик" (X)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            // Иконка "Гамбургер"
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

      </div>

      {/* --- Выпадающее мобильное меню --- */}
      {/* Мы добавляем класс 'open' ТОЛЬКО если isMobileMenuOpen === true
      */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <Link href="/" className="mobile-nav-link" onClick={toggleMobileMenu}>Главная</Link>
          <Link href="/services" className="mobile-nav-link" onClick={toggleMobileMenu}>Услуги</Link>
          <Link href="/portfolio" className="mobile-nav-link" onClick={toggleMobileMenu}>Портфолио</Link>
          <Link href="/about" className="mobile-nav-link" onClick={toggleMobileMenu}>Обо мне</Link>
          <Link href="/contact" className="mobile-nav-link" onClick={toggleMobileMenu}>Контакты</Link>
        </nav>
      </div>
    </header>
  );
}