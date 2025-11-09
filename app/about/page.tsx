export default function AboutPage() {
  return (

    <section 
      className="hero-section" 
      style={{justifyContent: 'flex-start', paddingBottom: '6rem'}}
    >   

      <h1 className="heading-hero">Моя история</h1>

      <div 
        className="service-card" 
        style={{maxWidth: '64rem', width: '100%', margin: '2rem auto 0 auto'}}
      >
        <div className="about-content-wrapper" style={{alignItems: 'flex-start'}}>
          
          {/* Колонка 1: Фото */}
          <div>
            <img 
              src="/images/master-photo.jpg"
              alt="Фото мастера Надежды" 
              className="about-image"
            />
          </div>

          {/* Колонка 2: Текст */}
          <div className="about-text-content">
            <h2 
              className="section-title">
              Привет! Меня зовут Надежда.
            </h2>
            
            <p>
              Сколько я себя помню, я всегда что-то мастерила. В детстве это были
              платья для кукол из старых занавесок, потом — первые попытки
              перешить мамины джинсы. Со временем это увлечение переросло
              в настоящую страсть и профессию.
            </p>
            <p>
              <strong>Ремонт для меня</strong> — это не просто замена молнии.
              Это почти магия. Я обожаю тот момент, когда ко мне приносят
              старое, "уставшее" кресло, которое пылилось на даче, и через
              несколько дней оно возвращается к владельцу полностью обновленным,
              готовым служить еще 20 лет. Или когда удается "спасти"
              любимую кожаную куртку от пореза.
            </p>
            <p>
              <strong>А вязание</strong> — это моя медитация. Это способ
              создать что-то абсолютно новое, теплое и уютное с нуля.
              Каждая вязаная игрушка для меня — это маленький персонаж
              со своим характером.
            </p>
            <p>
              Я верю, что вещи должны служить долго и приносить радость.
              Буду рада помочь вам обновить любимое или создать
              что-то совершенно новое!
            </p>

            <div style={{marginTop: '2rem'}}>
              <a href="/contact" className="btn-primary">
                Связаться со мной
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}