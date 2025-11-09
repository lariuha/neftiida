import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="hero-section"> 
      <div className="max-w-3xl">
        
        <h1 className="heading-hero" style={{ 
          fontSize: '6rem', 
          lineHeight: '1', 
          marginBottom: '1rem' 
        }}>
          404
        </h1>
        
        <h2 className="subheading-hero" style={{ 
          fontSize: '1.5rem', 
          marginBottom: '1.5rem' 
        }}>
          Страница не найдена
        </h2>
        
        <p className="cta-text" style={{ 
          maxWidth: '40rem', 
          margin: '0 auto 2.5rem auto' 
        }}>
          Извините, но страница, которую вы ищете, не существует 
          или была перемещена.
        </p>
        
        <Link href="/" className="btn-primary inline-block">
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
}