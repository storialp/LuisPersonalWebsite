type TechBubbleProps = {
  name: string;
  logo?: string;
  href?: string;
  size?: 'sm' | 'md';
};

export default function TechBubble({
  name,
  logo,
  href,
  size = 'md',
}: TechBubbleProps) {
  const Component = href ? 'a' : 'span';

  const sizeClasses =
    size === 'sm'
      ? 'gap-1.5 rounded-md px-2 py-0.5 text-[10px] md:px-2.5 md:py-1 md:text-[11px]'
      : 'gap-2 rounded-[2px] px-3 py-1 text-xs';

  const baseClasses =
    'inline-flex items-center border font-medium tracking-[0.02em] text-text-muted bg-white/[0.03] border-white/[0.07] transition-all duration-200';

  const interactiveClasses = href
    ? 'cursor-pointer hover:-translate-y-0.5 hover:text-white hover:bg-white/[0.12] hover:border-white/40 hover:shadow-[0_0_14px_rgba(255,255,255,0.08)] focus-visible:-translate-y-0.5 focus-visible:text-white focus-visible:bg-white/[0.12] focus-visible:border-white/40 focus-visible:shadow-[0_0_14px_rgba(255,255,255,0.08)] focus-visible:outline-none'
    : 'cursor-default hover:text-white hover:bg-white/[0.4] hover:border-white/60 hover:shadow-[0_0_14px_rgba(255,255,255,0.08)]';

  const imageClasses =
    size === 'sm'
      ? 'h-3 w-3 object-contain opacity-80 brightness-90 transition-all duration-200 group-hover/bubble:opacity-100 group-hover/bubble:brightness-110 group-focus-visible/bubble:opacity-100 group-focus-visible/bubble:brightness-110 md:h-3.5 md:w-3.5'
      : 'h-[0.9rem] w-[0.9rem] object-contain opacity-80 brightness-90 transition-all duration-200 group-hover/bubble:opacity-100 group-hover/bubble:brightness-110 group-focus-visible/bubble:opacity-100 group-focus-visible/bubble:brightness-110';

  return (
    <Component
      {...(href
        ? {
            href,
            target: '_blank',
            rel: 'noopener noreferrer',
            title: `Open ${name} in a new tab`,
          }
        : {})}
      className={`group/bubble ${baseClasses} ${sizeClasses} ${interactiveClasses}`}
    >
      {logo ? <img src={logo} alt={name} className={imageClasses} /> : null}
      <span>{name}</span>
    </Component>
  );
}
