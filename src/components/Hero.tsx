export default function Hero() {
  return (
    <section
      style={{
        minHeight: '91vh',
        display: 'flex',
        alignItems: 'flex-end',
        backgroundColor: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 2rem 7rem',
      }}
    >
      {/* Ambient radial glow — impressionist sunrise warmth */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '65vw',
          height: '65vw',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse, rgba(207,123,84,0.06) 0%, transparent 55%)',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle lavender mist — bottom left */}
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-15%',
          width: '55vw',
          height: '55vw',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse, rgba(139,126,163,0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Location */}
        <p
          style={{
            fontFamily: "'Lora', serif",
            fontSize: '0.67rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--lavender)',
            marginBottom: '2rem',
            animation: 'fadeUp 0.6s 0.05s both cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          Milan, Italy
        </p>

        {/* Name — large Playfair Display */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(3.5rem, 9.5vw, 8.5rem)',
            fontWeight: 400,
            lineHeight: 0.92,
            color: 'var(--cream)',
            letterSpacing: '-0.02em',
            marginBottom: '3.5rem',
            animation: 'fadeUp 0.75s 0.15s both cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          Luis
          <br />
          <em style={{ fontStyle: 'italic', color: 'rgba(28, 21, 16, 0.55)' }}>
            Pericchi
          </em>
        </h1>

        {/* Coral rule */}
        <div
          style={{
            width: '40px',
            height: '1px',
            backgroundColor: 'var(--gold)',
            marginBottom: '2rem',
            animation: 'fadeUp 0.65s 0.32s both cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        {/* Bio */}
        <p
          style={{
            fontFamily: "'Lora', serif",
            fontSize: '0.92rem',
            color: 'var(--cream-muted)',
            maxWidth: '400px',
            lineHeight: 1.85,
            marginBottom: '3rem',
            animation: 'fadeUp 0.65s 0.42s both cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          Founder and engineer. Currently building{' '}
          <span style={{ color: 'var(--cream)' }}>Endpoint</span>. Previously at{' '}
          <span style={{ color: 'var(--cream)' }}>Yummy (YC&nbsp;S21)</span> and APX.
          Studying CS&nbsp;&amp;&nbsp;Economics at Bocconi.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            animation: 'fadeUp 0.65s 0.52s both cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <a
            href="#experience"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.7rem 1.75rem',
              backgroundColor: 'var(--gold)',
              color: 'var(--bg)',
              fontFamily: "'Lora', serif",
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Experience
          </a>

          <a
            href="mailto:pericchiluis@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.7rem 1.75rem',
              border: '1px solid rgba(28, 21, 16, 0.15)',
              color: 'var(--cream-muted)',
              fontFamily: "'Lora', serif",
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-gold)';
              e.currentTarget.style.color = 'var(--cream)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(28, 21, 16, 0.15)';
              e.currentTarget.style.color = 'var(--cream-muted)';
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
