// app/services/page.tsx

export default function ServicesPage() {
  return (
    // Мы переиспользуем .page-container со страницы "Контакты"
    <div className="page-container" style={{maxWidth: '64rem'}}> {/* (max-w-5xl) */}
      <h1 className="page-title">Мои услуги</h1>
      <p className="page-description">
        Нахожу решение для ремонта или создаю уют с нуля.
      </p>

      {/* --- СЕКЦИЯ 1: РЕМОНТ --- */}
      <div className="service-section">
        <h2>Ремонт и Реставрация</h2>
        <p>
          Даю вторую жизнь любимым вещам. Использую качественные материалы
          и гарантирую аккуратность в работе, берусь за сложные случаи.
        </p>
        
        <ul className="service-list">
          <li>Перетяжка и ремонт мягкой мебели (диваны, кресла)</li>
          <li>Ремонт и перетяжка стульев и пуфов</li>
          <li>Ремонт автомобильных кресел (порезы, прожоги)</li>
          <li>Восстановление боковой поддержки автокресел</li>
          <li>Ремонт и замена молний (куртки, джинсы, сумки)</li>
          <li>Художественная штопка и ремонт разрывов</li>
          <li>Подгонка одежды по фигуре</li>
          <li>Ремонт кожаных изделий</li>
        </ul>

        <div className="process-steps">
          <h3>Как строится работа (Ремонт):</h3>
          <ol className="list-decimal list-inside text-brand-light/80 space-y-2">
            <li>
              <strong>Бесплатная оценка:</strong> Вы присылаете мне фото 
              проблемы (в Telegram или Viber).
            </li>
            <li>
              <strong>Расчет:</strong> Я оцениваю сложность, 
              стоимость и помогаю с выбором материалов.
            </li>
            <li>
              <strong>Работа:</strong> Выполняю ремонт в оговоренные сроки.
            </li>
          </ol>
        </div>
      </div>

      {/* --- СЕКЦИЯ 2: ВЯЗАНИЕ --- */}
      <div className="service-section">
        <h2>Вязание крючком на заказ</h2>
        <p>
          Создаю уникальные изделия по вашей идее или фото. Использую
          качественную пряжу, включая гипоаллергенную для детей.
        </p>

        <ul className="service-list">
          <li>Вязаные игрушки (Амигуруми)</li>
          <li>Детская одежда (пинетки, комбинезоны, шапочки)</li>
          <li>Одежда для взрослых (кардиганы, шали, шапки)</li>
          <li>Аксессуары (сумки, авоськи)</li>
          <li>Уют для дома (пледы, декоративные подушки)</li>
          <li>Интерьерные корзинки и коврики</li>
        </ul>

        <div className="process-steps">
          <h3>Как строится работа (Вязание):</h3>
          <ol className="list-decimal list-inside text-brand-light/80 space-y-2">
            <li>
              <strong>Идея:</strong> Вы присылаете фото или описание того,
              что вы хотите.
            </li>
            <li>
              <strong>Обсуждение:</strong> Мы утверждаем размер, пряжу,
              цвета и сроки.
            </li>
            <li>
              <strong>Создание:</strong> Я приступаю к работе (обычно
              требуется предоплата за материалы).
            </li>
          </ol>
        </div>
      </div>

      {/* --- CTA (Призыв к действию) --- */}
      {/* Мы переиспользуем стили из cta-section с главной страницы */}
      <div className="cta-section" style={{paddingTop: '2rem', paddingBottom: '1rem'}}>
        <div className="cta-content-wrapper">
          <h2 className="section-title" style={{fontSize: '1.875rem'}}>
            Есть вопрос или проект?
          </h2>
          <a href="/contact" className="btn-primary">
            Написать мне
          </a>
        </div>
      </div>

    </div>
  );
}