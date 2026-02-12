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
        
        {/* Bouncing Hearts Animation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '2rem'
        }}>
          <style>{`
            @keyframes bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-15px); }
            }
            .heart {
              display: inline-block;
              width: 20px;
              height: 20px;
              background: white;
              clip-path: polygon(50% 0%, 100% 35%, 82% 100%, 50% 75%, 18% 100%, 0% 35%);
            }
            .heart-1 { animation: bounce 0.6s ease-in-out infinite; }
            .heart-2 { animation: bounce 0.6s ease-in-out 0.2s infinite; }
            .heart-3 { animation: bounce 0.6s ease-in-out 0.4s infinite; }
          `}</style>
          <div className="heart heart-1" style={{ background: 'white' }}></div>
          <div className="heart heart-2" style={{ background: 'white' }}></div>
          <div className="heart heart-3" style={{ background: 'white' }}></div>
        </div>
        
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
