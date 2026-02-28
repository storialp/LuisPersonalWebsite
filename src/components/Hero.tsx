export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_45%,rgba(32,213,179,0.07)_0%,transparent_65%)] animate-[pulse-glow_8s_ease-in-out_infinite] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_15%_25%,rgba(32,213,179,0.04)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_25%_at_85%_75%,rgba(32,213,179,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="absolute left-[10%] right-[10%] top-1/2 h-[1px] -translate-y-[90px] bg-gradient-to-r from-transparent via-[rgba(32,213,179,0.12)] to-transparent pointer-events-none" />

      <div className="relative z-10 text-center px-8 max-w-[860px] w-full">
        <p className="text-xs text-accent tracking-[0.2em] uppercase mb-10 animate-[fadeUp_0.8s_0.1s_both]">
          Milan, Italy
        </p>

        <h1 className="text-[clamp(4rem,12vw,8rem)] font-extralight leading-[1.05] tracking-tight text-text mb-12 animate-[fadeUp_0.8s_0.25s_both]">
          Luis
          <br />
          <span className="font-normal bg-gradient-to-br from-text to-[rgba(32,213,179,0.7)] bg-clip-text text-transparent">
            Pericchi
          </span>
        </h1>

        <p className="text-[1.05rem] text-text-muted leading-[1.75] max-w-[480px] mx-auto mb-14 animate-[fadeUp_0.8s_0.4s_both]">
          Founder and engineer. Currently building{' '}
          <a
            href="https://endpoint.health"
            className="text-accent no-underline transition-opacity duration-200 hover:opacity-70"
          >
            Endpoint
          </a>
          . Previously at Yummy (YC&nbsp;S21) and APX. Studied CS&nbsp;&amp;&nbsp;Economics at
          Bocconi in Milan.
        </p>

        <div className="flex gap-4 justify-center flex-wrap animate-[fadeUp_0.8s_0.55s_both]">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-medium tracking-[0.08em] uppercase text-text no-verify border border-white/10 rounded-[2px] bg-white/[0.04] backdrop-blur-xl transition-all duration-250 hover:border-[rgba(32,213,179,0.35)] hover:bg-[rgba(32,213,179,0.07)] hover:text-accent"
          >
            Experience
          </a>

          <a
            href="mailto:pericchiluis@gmail.com"
            className="inline-flex items-center px-6 py-2.5 text-xs font-medium tracking-[0.08em] uppercase text-text-muted no-verify transition-colors duration-250 hover:text-text"
          >
            Contact ↗
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[220px] bg-gradient-to-t from-transparent to-bg pointer-events-none" />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-[fadeIn_1s_1.2s_both]">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/[0.15]" />
      </div>
    </section>
  );
}
