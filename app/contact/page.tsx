"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
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
    <section 
      className="hero-section" 
      style={{justifyContent: 'flex-start', minHeight: 'calc(100vh + 200px)'}}
    >
      
      <h1 className="heading-hero">Свяжитесь со мной</h1>
      <h2 className="subheading-hero" style={{maxWidth: '42rem', marginBottom: '2rem'}}>
        Выберите удобный способ связи
      </h2>

      <div 
        className="service-card"
        style={{maxWidth: '42rem', width: '100%', margin: '0 auto 2rem auto'}}
      >
        <h3 className="card-title">Прямая связь</h3>
        
        <a href="tel:+37369697829" className="contact-list-item">
          <span className="contact-list-item-title">Телефон</span>
          <span className="contact-list-item-value">+ 373 69 697 829</span>
        </a>
        <a href="mailto:neftiidaa555@gmail.com" className="contact-list-item">
          <span className="contact-list-item-title">Email</span>
          <span className="contact-list-item-value">neftiidaa555@gmail.com</span>
        </a>

        <div className="contact-links-grid" style={{marginTop: '1.5rem'}}>
          
          <a href="https://t.me/+37369697829" target="_blank" rel="noopener noreferrer" className="social-btn social-btn-telegram">
            Telegram
          </a>
          <a href="https://www.instagram.com/neftiida_handmade.md" target="_blank" rel="noopener noreferrer" className="social-btn social-btn-instagram">
            Instagram
          </a>
          <a href="https://vk.com/neftiida" target="_blank" rel="noopener noreferrer" className="social-btn social-btn-vk">
            ВКонтакте
          </a>
        </div>
      </div>
      <div 
        className="service-card"
        style={{maxWidth: '42rem', width: '100%', margin: '0 auto'}}
      >
        <h3 className="card-title">Отправить заявку</h3>
        <form onSubmit={handleSubmit} className="text-left">
          
          <div className="form-grid-container">
            
            <div className="form-grid-item-full">
              <label htmlFor="name" className="form-label">Имя</label>
              <input 
                type="text" 
                name="name" 
                id="name"
                className="form-input" 
                placeholder="Как к вам обращаться?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-grid-item-full">
              <label htmlFor="phone" className="form-label">Телефон или Мессенджер</label>
              <input 
                type="text" 
                name="phone" 
                id="phone"
                className="form-input" 
                placeholder="Telegram, Viber, или номер"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="form-grid-item-full">
              <label htmlFor="message" className="form-label">Опишите задачу</label>
              <textarea 
                name="message" 
                id="message"
                rows={5} 
                className="form-input"
                placeholder="Например: 'Нужно перетянуть сиденье авто'..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button 
              type="submit" 
              className="btn-primary"
              disabled={status === 'loading'}
              style={{
                marginTop: 12,                 
                opacity: status === 'loading' ? 0.7 : 1,
                cursor: status === 'loading' ? 'wait' : 'pointer'
              }}
            >
              {status === 'loading' ? 'Отправка...' : 'Отправить заявку'}
            </button>
          </div>

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
      </div>

    </section>
  );
}