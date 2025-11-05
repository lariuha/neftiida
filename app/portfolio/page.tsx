// app/portfolio/page.tsx

/* ВАЖНО: Мы добавляем "use client" в самом верху.
  Это говорит Next.js, что страница интерактивная 
  (мы будем использовать React state для фильтров).
*/
"use client"; 

import { useState } from 'react';

// --- Наши "типы" данных ---
// (Это для TypeScript, чтобы он "понимал" структуру наших данных)
type PortfolioCategory = 'all' | 'repair' | 'knitting';

type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  category: PortfolioCategory;
  image1: string; // "После" или основное фото
  image2?: string; // "До" (опционально)
};

// --- Мок-данные (Временные данные, пока нет CMS) ---
// Замените "https://via.placeholder.com/..." на ваши реальные фото
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Перетяжка автокресла',
    description: 'Полное восстановление боковой поддержки.',
    category: 'repair',
    image1: 'https://via.placeholder.com/400x400/DAA520/000000?text=ПОСЛЕ',
    image2: 'https://via.placeholder.com/400x400/A83C31/FFFFFF?text=ДО'
  },
  {
    id: 2,
    title: 'Вязаный жираф "Соня"',
    description: 'Гипоаллергенная пряжа, безопасные глазки.',
    category: 'knitting',
    image1: 'https://via.placeholder.com/400x400/00314A/FFFFFF?text=ВЯЗАНИЕ'
  },
  {
    id: 3,
    title: 'Ремонт старого стула',
    description: 'Замена наполнителя и полная перетяжка.',
    category: 'repair',
    image1: 'https://via.placeholder.com/400x400/C75C45/FFFFFF?text=ПОСЛЕ',
    image2: 'https://via.placeholder.com/400x400/5A2B2A/FFFFFF?text=ДО'
  },
  {
    id: 4,
    title: 'Детский плед "Облачко"',
    description: 'Мягкая плюшевая пряжа, размер 100x100 см.',
    category: 'knitting',
    image1: 'https://via.placeholder.com/400x400/00314A/FFFFFF?text=ВЯЗАНИЕ+2'
  },
  {
    id: 5,
    title: 'Художественная штопка джинс',
    description: 'Ремонт разрыва с восстановлением плетения.',
    category: 'repair',
    image1: 'https://via.placeholder.com/400x400/DAA520/000000?text=ПОСЛЕ+2',
    image2: 'https://via.placeholder.com/400x400/A83C31/FFFFFF?text=ДО+2'
  },
  {
    id: 6,
    title: 'Интерьерные корзины',
    description: 'Набор из 3-х корзин для ванной.',
    category: 'knitting',
    image1: 'https://via.placeholder.com/400x400/00314A/FFFFFF?text=ВЯЗАНИЕ+3'
  },
];
// --- Конец Мок-данных ---


export default function PortfolioPage() {
  // --- Логика фильтрации ---
  // 1. Создаем "состояние" (state) для хранения активного фильтра
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>('all');

  // 2. Фильтруем наши работы на лету
  const filteredItems = portfolioItems.filter(item => {
    if (activeFilter === 'all') return true; // Показать все
    return item.category === activeFilter; // Показать по категории
  });
  // --- Конец логики ---

  return (
    <div className="page-container" style={{maxWidth: '72rem'}}> {/* (max-w-6xl) */}
      <h1 className="page-title">Портфолио</h1>
      <p className="page-description">
        Здесь собраны примеры моих работ по ремонту и вязанию.
      </p>

      {/* --- Кнопки-фильтры --- */}
      <div className="flex justify-center gap-4 mb-8">
        <button 
          /* Динамически добавляем класс 'active', если 
            activeFilter === 'all'.
            Мы используем `className` + тернарный оператор.
          */
          className={`portfolio-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          // По клику меняем состояние на 'all'
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

      {/* --- Сетка портфолио --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Мы "маппим" (проходимся) по НАШЕМУ ФИЛЬТРОВАННОМУ массиву 
          и рендерим карточку для каждого элемента.
        */}
        {filteredItems.map(item => (
          <div key={item.id} className="portfolio-item">
            
            {/* Проверяем, есть ли 'image2' (фото "До").
              Если есть - рендерим сетку из 2-х фото (До/После).
              Если нет - рендерим 1 фото (Вязание).
            */}
            {item.image2 ? (
              // Карточка "До/После" (Ремонт)
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
                <img src={item.image1} alt={item.title} />
              </div>
            )}
            
            <h4 className="portfolio-item-title">{item.title}</h4>
            <p className="portfolio-item-description">{item.description}</p>
          </div>
        ))}

        {/* --- Сообщение, если ничего не найдено --- */}
        {filteredItems.length === 0 && (
          <p className="text-brand-light/70 text-center md:col-span-2 lg:col-span-3">
            В этой категории пока нет работ.
          </p>
        )}

      </div>
    </div>
  );
}