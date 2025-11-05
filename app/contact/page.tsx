// app/contact/page.tsx

export default function ContactPage() {
  return (
    // Контент этой страницы, как и Главной,
    // автоматически обернется в <main> и <Footer> из layout.tsx
    <div className="page-container">
      <h1 className="page-title">Свяжитесь со мной</h1>
      <p className="page-description">
        Расскажите о своей идее, и я свяжусь с вами в ближайшее время.
      </p>

      {/* Обертка для формы */}
      <form action="#" method="POST" className="text-left">
        {/* Используем grid-сетку для полей */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Поле "Имя" */}
          <div className="sm:col-span-1">
            <label htmlFor="name" className="block text-sm font-medium text-brand-light/90 mb-1">Имя</label>
            <input 
              type="text" 
              name="name" 
              id="name"
              className="form-input" 
              placeholder="Как к вам обращаться?" 
            />
          </div>

          {/* Поле "Телефон" */}
          <div className="sm:col-span-1">
            <label htmlFor="phone" className="block text-sm font-medium text-brand-light/90 mb-1">Телефон или Мессенджер</label>
            <input 
              type="text" 
              name="phone" 
              id="phone"
              className="form-input" 
              placeholder="Telegram, Viber, или номер"
            />
          </div>

          {/* Поле "Сообщение" (на всю ширину) */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-brand-light/90 mb-1">Опишите задачу</label>
            <textarea 
              name="message" 
              id="message"
              rows={5} 
              className="form-input"
              placeholder="Например: 'Нужно перетянуть сиденье авто' или 'Хочу заказать вязаного котика'"
            ></textarea>
          </div>
        </div>

        {/* Кнопка "Отправить" */}
        <div className="mt-6 text-center">
          {/* Мы переиспользуем наш главный класс .btn-primary */}
          <button type="submit" className="btn-primary">
            Отправить заявку
          </button>
        </div>
      </form>


      {/* Раздел "Прямые контакты" */}
      <div className="contact-links">
        <p>Или напишите мне напрямую в удобный мессенджер:</p>
        <div className="contact-links-grid">
          
          {/* Замените # на вашу реальную ссылку (например, https://t.me/username) */}
          <a href="#" className="social-btn">
            {/* Вставьте иконку, если хотите */}
            Написать в Telegram
          </a>
          
          {/* Замените # на вашу реальную ссылку (например, viber://chat?number=%2B123456789) */}
          <a href="#" className="social-btn" style={{backgroundColor: '#7360F2'}}> {/* Кастомный цвет Viber */}
            Написать в Viber
          </a>
        </div>
      </div>

    </div>
  );
}