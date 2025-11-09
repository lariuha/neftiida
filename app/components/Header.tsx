"use client"; 

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header-wrapper">
      <div className="header-content">
        
        <Link href="/" className="header-logo">
          <img 
            src="/images/logo.png" 
            alt="Мастерская N&N Логотип" 
            style={{ height: '56px' }}
          />
          Мастерская N&N
        </Link>

        {/* --- Навигация (Десктоп) --- */}
        <nav className="header-nav-desktop">
          <Link href="/" className={`header-nav-link ${pathname === '/' ? 'header-nav-link-active' : ''}`}>
            Главная
          </Link>
          <Link href="/services" className={`header-nav-link ${pathname === '/services' ? 'header-nav-link-active' : ''}`}>
            Услуги
          </Link>
          <Link href="/portfolio" className={`header-nav-link ${pathname === '/portfolio' ? 'header-nav-link-active' : ''}`}>
            Портфолио
          </Link>
          <Link href="/about" className={`header-nav-link ${pathname === '/about' ? 'header-nav-link-active' : ''}`}>
            Обо мне
          </Link>
          <Link href="/contact" className={`header-nav-link ${pathname === '/contact' ? 'header-nav-link-active' : ''}`}>
            Контакты
          </Link>
        </nav>

        {/* --- Кнопка (Гамбургер) --- */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Открыть меню"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

      </div>

      {/* --- Выпадающее мобильное меню --- */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <Link href="/" className={`mobile-nav-link ${pathname === '/' ? 'mobile-nav-link-active' : ''}`} onClick={toggleMobileMenu}>
            Главная
          </Link>
          <Link href="/services" className={`mobile-nav-link ${pathname === '/services' ? 'mobile-nav-link-active' : ''}`} onClick={toggleMobileMenu}>
            Услуги
          </Link>
          <Link href="/portfolio" className={`mobile-nav-link ${pathname === '/portfolio' ? 'mobile-nav-link-active' : ''}`} onClick={toggleMobileMenu}>
            Портфолио
          </Link>
          <Link href="/about" className={`mobile-nav-link ${pathname === '/about' ? 'mobile-nav-link-active' : ''}`} onClick={toggleMobileMenu}>
            Обо мне
          </Link>
          <Link href="/contact" className={`mobile-nav-link ${pathname === '/contact' ? 'mobile-nav-link-active' : ''}`} onClick={toggleMobileMenu}>
            Контакты
          </Link>
        </nav>
      </div>
    </header>
  );
}