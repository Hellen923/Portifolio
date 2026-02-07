export default function Success() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0fa3b1 0%, #3dccc7 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        padding: '3rem',
        borderRadius: '20px',
        maxWidth: '500px'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✓</div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Thank You!</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
          Your message has been sent successfully. I'll get back to you as soon as possible.
        </p>
        <a href="/" style={{
          display: 'inline-block',
          background: 'white',
          color: '#0fa3b1',
          padding: '1rem 2rem',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '1.1rem'
        }}>
          Back to Portfolio
        </a>
      </div>
    </div>
  );
}
