import { portfolioItems } from '@/app/data/portfolio-data';

export default function HomePage() {

  const featuredWorks = portfolioItems.slice(0, 3);

  return (
    <>
      <section className="hero-section">
        <div className="max-w-6xl">
          <h1 className="heading-hero">
            Мастерская N&N
          </h1>
          <h2 className="subheading-hero"> 
            От реставрации до уюта: новая жизнь для ваших вещей и вязание на заказ.
          </h2>

          <div className="hero-card-grid">
            
            <div className="service-card">
              <h3 className="card-title">Ремонт и реставрация</h3>
              <p className="card-text">
                Восстанавливаю любимые вещи, от одежды до мебели. 
                Берусь за сложные случаи и гарантирую качество.
              </p>
              <a href="/services" className="btn-primary py-2 px-5 text-sm">
                Подробнее о ремонте
              </a>
            </div>

            <div className="service-card">
              <h3 className="card-title">Вязание крючком</h3>
              <p className="card-text">
                Создаю уникальные вязаные изделия по вашим идеям. 
                Одежда, игрушки, декор для дома и стильные аксессуары.
              </p>
              <a href="/portfolio" className="btn-secondary py-2 px-5 text-sm">
                Галерея вязания
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Мои работы</h2>
        
        <div className="portfolio-filter-wrapper">
          <button className="portfolio-filter-btn active">Все работы</button>
          <button className="portfolio-filter-btn">Ремонт</button>
          <button className="portfolio-filter-btn">Вязание</button>
        </div>
        
        <div className="portfolio-grid">        
          {featuredWorks.map(item => (
            <div key={item.id} className="portfolio-item">
              
              {item.image2 ? (
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
        </div>
        
        <div className="portfolio-view-all">
          <a href="/portfolio" className="btn-primary">
            Смотреть все работы
          </a>
        </div>
      </section>

      <section className="content-section about-section">
        <div className="about-content-wrapper">
          <div>
            <img 
              src="/images/master-photo.jpg" 
              alt="Фото мастера Надежды" 
              className="about-image"
            />
          </div>
          <div className="about-text-content">
            <h2 className="section-title" style={{textAlign: 'left'}}>
              Привет, я Надя
            </h2>
            <p>
              Моя страсть — дарить вещам вторую жизнь и создавать уют с нуля...
            </p>
            <p>
              А в свободное время я полностью погружаюсь в творчество...
            </p>
            <a href="/about" className="btn-secondary py-2 px-5 text-sm">
              Узнать мою историю
            </a>
          </div>
        </div>
      </section>

      <section className="content-section cta-section">
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