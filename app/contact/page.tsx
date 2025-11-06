// app/contact/page.tsx

/* 1. Превращаем в Клиентский Компонент */
"use client";

import { useState } from 'react';

export default function ContactPage() {
  /* 2. Добавляем "состояния" (state) */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  /* 3. Функция отправки */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Запрещаем форме перезагружать страницу
    setStatus('loading');
    setStatusMessage('Отправка...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, message }),
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage('Спасибо! Ваша заявка отправлена.');
        // Очищаем поля
        setName('');
        setPhone('');
        setMessage('');
      } else {
        const errorData = await response.json();
        setStatus('error');
        setStatusMessage(`Ошибка: ${errorData.message || 'Не удалось отправить.'}`);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setStatusMessage('Ошибка сети. Попробуйте позже.');
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Свяжитесь со мной</h1>
      <p className="page-description">
        Расскажите о своей идее, и я свяжусь с вами в ближайшее время.
      </p>

      {/* 4. Привязываем 'onSubmit' к нашей функции */}
      <form onSubmit={handleSubmit} className="text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <div className="sm:col-span-1">
            <label htmlFor="name" className="block text-sm font-medium text-brand-light/90 mb-1">Имя</label>
            <input 
              type="text" 
              name="name" 
              id="name"
              className="form-input" 
              placeholder="Как к вам обращаться?"
              value={name} // 5. Привязываем state
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="phone" className="block text-sm font-medium text-brand-light/90 mb-1">Телефон или Мессенджер</label>
            <input 
              type="text" 
              name="phone" 
              id="phone"
              className="form-input" 
              placeholder="Telegram, Viber, или номер"
              value={phone} // 5. Привязываем state
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-brand-light/90 mb-1">Опишите задачу</label>
            <textarea 
              name="message" 
              id="message"
              rows={5} 
              className="form-input"
              placeholder="Например: 'Нужно перетянуть сиденье авто'..."
              value={message} // 5. Привязываем state
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
        </div>

        {/* 6. Кнопка и сообщения о статусе */}
        <div className="mt-6 text-center">
          <button 
            type="submit" 
            className="btn-primary"
            // Блокируем кнопку во время загрузки
            disabled={status === 'loading'}
            style={{ 
              opacity: status === 'loading' ? 0.7 : 1,
              cursor: status === 'loading' ? 'wait' : 'pointer'
            }}
          >
            {status === 'loading' ? 'Отправка...' : 'Отправить заявку'}
          </button>
        </div>

        {/* 7. Сообщения о статусе */}
        {status === 'success' && (
          <p className="mt-4 text-center" style={{ color: '#4ade80' }}>
            {statusMessage}
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-center" style={{ color: '#f87171' }}>
            {statusMessage}
          </p>
        )}
      </form>

      {/* ... (Блок с прямыми контактами остается без изменений) ... */}
      <div className="contact-links">
        {/* ... */}
      </div>
    </div>
  );
}