export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: 'var(--bg)',
      }}
    >
      {/* Primary ambient glow — large, centered */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 90% 70% at 50% 45%, rgba(32, 213, 179, 0.07) 0%, transparent 65%)',
          animation: 'pulse-glow 8s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      {/* Secondary accent — top-left */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 40% 30% at 15% 25%, rgba(32, 213, 179, 0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      {/* Tertiary accent — bottom-right */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 35% 25% at 85% 75%, rgba(32, 213, 179, 0.03) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      {/* Hairline horizon */}
      <div
        style={{
          position: 'absolute',
          left: '10%',
          right: '10%',
          top: '50%',
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, rgba(32, 213, 179, 0.12) 30%, rgba(32, 213, 179, 0.12) 70%, transparent)',
          transform: 'translateY(-90px)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '0 2rem',
          maxWidth: '860px',
          width: '100%',
        }}
      >
        <p
          style={{
            fontSize: '0.7rem',
            color: 'var(--accent)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '2.5rem',
            animation: 'fadeUp 0.8s 0.1s both',
          }}
        >
          Milan, Italy
        </p>

        <h1
          style={{
            fontSize: 'clamp(4rem, 12vw, 8rem)',
            fontWeight: 200,
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            color: 'var(--text)',
            marginBottom: '3rem',
            animation: 'fadeUp 0.8s 0.25s both',
          }}
        >
          Luis
          <br />
          <span
            style={{
              fontWeight: 400,
              background: 'linear-gradient(135deg, var(--text) 40%, rgba(32, 213, 179, 0.7) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Pericchi
          </span>
        </h1>

        <p
          style={{
            fontSize: '1rem',
            color: 'var(--text-muted)',
            lineHeight: 1.85,
            maxWidth: '440px',
            margin: '0 auto 3.5rem',
            animation: 'fadeUp 0.8s 0.4s both',
          }}
        >
          Founder and engineer. Currently building{' '}
          <a
            href="https://endpoint.health"
            style={{
              color: 'var(--accent)',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '0.7')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Endpoint
          </a>
          . Previously at Yummy (YC&nbsp;S21) and APX.
          Studying CS&nbsp;&amp;&nbsp;Economics at Bocconi.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeUp 0.8s 0.55s both',
          }}
        >
          <a
            href="#experience"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.5rem',
              fontSize: '0.75rem',
              fontWeight: 400,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text)',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '2px',
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(12px)',
              transition: 'border-color 0.25s, background 0.25s, color 0.25s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'rgba(32,213,179,0.35)';
              e.currentTarget.style.background = 'rgba(32,213,179,0.07)';
              e.currentTarget.style.color = 'var(--accent)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              e.currentTarget.style.color = 'var(--text)';
            }}
          >
            Experience
          </a>

          <a
            href="mailto:pericchiluis@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.65rem 1.5rem',
              fontSize: '0.75rem',
              fontWeight: 400,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              transition: 'color 0.25s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            Contact ↗
          </a>
        </div>
      </div>

      {/* Bottom vignette fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '220px',
          background: 'linear-gradient(transparent, var(--bg))',
          pointerEvents: 'none',
        }}
      />

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          animation: 'fadeIn 1s 1.2s both',
        }}
      >
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.15))',
          }}
        />
      </div>
    </section>
  );
}
