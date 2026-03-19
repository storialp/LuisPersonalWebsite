import { contactLinks } from "../data/contact";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border py-12 px-8 bg-bg relative"
    >
      <div className="max-w-[860px] mx-auto flex justify-between items-center gap-4 flex-wrap">
        <div className="flex gap-10">
          {contactLinks.map(({ label, href, external, icon, color }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-xs text-text-muted no-verify tracking-[0.05em] uppercase transition-all duration-300 hover:text-text font-medium group"
              onClick={() =>
                (window as any).posthog?.capture("external_link_clicked", {
                  link_label: label,
                  link_href: href,
                  source: "footer",
                })
              }
            >
              <span
                className={`transition-colors duration-300 ${color} opacity-70 group-hover:opacity-100`}
              >
                {icon}
              </span>
              {label}
            </a>
          ))}
        </div>

        <p className="text-xs text-white/40 tracking-[0.03em]">
          © {new Date().getFullYear()} Luis Pericchi
        </p>
      </div>
    </footer>
  );
}
