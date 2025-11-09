"use client"; 

import { useState } from 'react';
import { portfolioItems, type PortfolioCategory } from '@/app/data/portfolio-data';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>('all');

  const filteredItems = portfolioItems.filter(item => {
    if (activeFilter === 'all') return true; 
    return item.category === activeFilter;
  });

  return (
    <section 
      className="hero-section" 
      style={{justifyContent: 'flex-start', minHeight: '100vh'}}
    >
      
      <h1 className="heading-hero">Портфолио</h1>
      <h2 className="subheading-hero" style={{maxWidth: '42rem', marginBottom: '2rem'}}>
        Здесь собраны примеры моих работ по ремонту и вязанию.
      </h2>

      <div className="portfolio-filter">
        <button 
          className={`portfolio-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          Все работы
        </button>
        
        <button 
          className={`portfolio-filter-btn ${activeFilter === 'repair' ? 'active' : ''}`}
          onClick={() => setActiveFilter('repair')}
        >
          Ремонт
        </button>
        
        <button 
          className={`portfolio-filter-btn ${activeFilter === 'knitting' ? 'active' : ''}`}
          onClick={() => setActiveFilter('knitting')}
        >
          Вязание
        </button>
      </div>

      <div 
        className="portfolio-grid"
        style={{maxWidth: '72rem', width: '100%', margin: '0 auto'}}
      >
        
        {filteredItems.map(item => (
          <div key={item.id} className="portfolio-item">
            
            {item.image2 ? (
              // Карточка "До/После" (2 фото)
              <div className="grid grid-cols-2">
                <div className="portfolio-image-wrapper">
                  <img src={item.image2} alt="Работа до" />
                  <span className="portfolio-image-label">ДО</span>
                </div>
                <div className="portfolio-image-wrapper">
                  <img src={item.image1} alt="Работа после" />
                  <span className="portfolio-image-label">ПОСЛЕ</span>
                </div>
              </div>
            ) : (
              // Карточка "Вязание" (1 фото)
              <div className="portfolio-image-wrapper">
                <img 
                  src={item.image1} 
                  alt={item.title} 
                  className="portfolio-image-knitting"
                />
              </div>
            )}
            
            <h4 className="portfolio-item-title">{item.title}</h4>
            <p className="portfolio-item-description">{item.description}</p>
          </div>
        ))}

        {/* --- Сообщение, если ничего не найдено --- */}
        {filteredItems.length === 0 && (
          <p className="portfolio-grid-empty">
            В этой категории пока нет работ.
          </p>
        )}

      </div>
    </section>
  );
}