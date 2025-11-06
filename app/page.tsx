// app/page.tsx

export default function HomePage() {
  return (
    /* Мы убрали <main className="flex min-h-screen flex-col items-center">...
      Так как это теперь находится в app/layout.tsx.
      
      Мы просто возвращаем наши секции, обернув их 
      в "Фрагмент" (пустые скобки <>...</>)
    */
    <>
      {/* СЕКЦИЯ 1: "ПЕРВЫЙ ЭКРАН" (HERO) */}
      <section 
        className="flex flex-col items-center justify-center h-screen w-full p-6 text-center"
        style={{ backgroundColor: 'rgba(30, 26, 42, 0.5)' }}
      >
        <div className="max-w-3xl">
          <h1 className="heading-hero">
            Мастерская N&N
          </h1>
          <h2 className="subheading-hero">
            От реставрации до уюта: новая жизнь для ваших вещей и вязание на заказ.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/repair" className="btn-primary inline-block">
              Услуги по ремонту
            </a>
            <a href="/knitting" className="btn-secondary inline-block">
              Вязание на заказ
            </a>
          </div>
        </div>
      </section>

      {/* СЕКЦИЯ 2: БЛОК "УСЛУГИ" */}
      <section className="w-full max-w-6xl p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ... (Карточка 1: Ремонт) ... */}
          <div className="service-card">
            <h3 className="card-title">Ремонт и Реставрация</h3>
            <p className="card-text">
              Восстанавливаю любимые вещи, от одежды до мебели. 
              Берусь за сложные случаи и гарантирую качество.
            </p>
            <a href="/repair" className="btn-primary py-2 px-5 text-sm">
              Смотреть примеры ремонта
            </a>
          </div>
          {/* ... (Карточка 2: Вязание) ... */}
          <div className="service-card">
            <h3 className="card-title">Вязание крючком</h3>
            <p className="card-text">
              Создаю уникальные вязаные изделия по вашим идеям. 
              Игрушки, уютный декор для дома и стильные аксессуары.
            </p>
            <a href="/knitting" className="btn-secondary py-2 px-5 text-sm">
              Галерея вязания
            </a>
          </div>
        </div>
      </section>

      {/* СЕКЦИЯ 3: БЛОК "ПОРТФОЛИО" */}
      <section className="w-full max-w-6xl p-6 md:p-12">
        <h2 className="section-title">Мои работы</h2>
        <div className="flex justify-center gap-4 mb-8">
          <button className="portfolio-filter-btn active">Все работы</button>
          <button className="portfolio-filter-btn">Ремонт</button>
          <button className="portfolio-filter-btn">Вязание</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ... (Примеры портфолио) ... */}
          <div className="portfolio-item">
            <div className="grid grid-cols-2">
              <div className="portfolio-image-wrapper">
                <img src="https://via.placeholder.com/400x400/A83C31/FFFFFF?text=ДО" alt="Работа до" />
                <span className="portfolio-image-label">ДО</span>
              </div>
              <div className="portfolio-image-wrapper">
                <img src="https://via.placeholder.com/400x400/DAA520/000000?text=ПОСЛЕ" alt="Работа после" />
                <span className="portfolio-image-label">ПОСЛЕ</span>
              </div>
            </div>
            <h4 className="portfolio-item-title">Перетяжка автокресла</h4>
            <p className="portfolio-item-description">
              Полное восстановление боковой поддержки и замена ткани.
            </p>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-image-wrapper">
              <img src="https://via.placeholder.com/400x400/00314A/FFFFFF?text=ВЯЗАНИЕ" alt="Вязаная игрушка" />
            </div>
            <h4 className="portfolio-item-title">Вязаный жираф "Соня"</h4>
            <p className="portfolio-item-description">
              Гипоаллергенная пряжа, безопасные глазки. Рост 30 см.
            </p>
          </div>
          <div className="portfolio-item">
            <div className="grid grid-cols-2">
              <div className="portfolio-image-wrapper">
                <img src="https://via.placeholder.com/400x400/5A2B2A/FFFFFF?text=ДО" alt="Работа до" />
                <span className="portfolio-image-label">ДО</span>
              </div>
              <div className="portfolio-image-wrapper">
                <img src="https://via.placeholder.com/400x400/C75C45/FFFFFF?text=ПОСЛЕ" alt="Работа после" />
                <span className="portfolio-image-label">ПОСЛЕ</span>
              </div>
            </div>
            <h4 className="portfolio-item-title">Ремонт старого стула</h4>
            <p className="portfolio-item-description">
              Замена наполнителя и полная перетяжка тканью клиента.
            </p>
          </div>
        </div>
      </section>

      {/* СЕКЦИЯ 4: БЛОК "ОБО МНЕ" */}
      <section className="about-section">
        <div className="about-content-wrapper">
          <div>
            <img 
              src="/images/master-photo.jpg" 
              alt="Фото мастера Надежды" 
              className="about-image"
            />
          </div>
          <div className="about-text-content">
            <h2 className="section-title">
              Привет, я Надя
            </h2>
            <p>
              Моя страсть — дарить вещам вторую жизнь и создавать уют с нуля. 
              Уже более 10 лет я занимаюсь ремонтом и реставрацией...
            </p>
            <p>
              А в свободное время я полностью погружаюсь в творчество — 
              вяжу крючком...
            </p>
            <a href="/about" className="btn-secondary py-2 px-5 text-sm">
              Узнать мою историю
            </a>
          </div>
        </div>
      </section>

      {/* СЕКЦИЯ 5: БЛОК "ПРИЗЫВ К ДЕЙСТВИЮ" (CTA) */}
      <section className="cta-section">
        <div className="cta-content-wrapper">
          <h2 className="section-title">
            Готовы обсудить ваш проект?
          </h2>
          <p className="cta-text">
            Свяжитесь со мной, и мы обсудим детали...
          </p>
          <a href="/contact" className="btn-primary">
            Рассчитать мой проект
          </a>
        </div>
      </section>
    </>
  );
}