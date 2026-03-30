import { useEffect, useState } from "react";
import ContactModal from "./ContactModal";
import SpotifyWidget from "./SpotifyWidget";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

interface NavBarProps {
  path: string;
}

const navigation = [
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Travel", href: "/travel" },
  { name: "Contact", href: "#contact", isModal: true },
];

export default function NavBar({ path }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navIsSolid = scrolled || mobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setContactModalOpen(true);
  };

  const handleNavItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <nav
          className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
            navIsSolid
              ? "bg-[rgba(8,8,8,0.88)] border-b border-white/[0.06] backdrop-blur-2xl"
              : "border-b border-transparent bg-transparent"
          }`}
        >
          <div className="flex h-[60px] w-full items-center px-5 md:px-8">
            <a
              href="/"
              className="text-[0.7rem] font-medium uppercase tracking-[0.1em] text-text-muted md:hidden"
              onClick={handleNavItemClick}
            >
              Luis
            </a>

            <div className="hidden w-[248px] shrink-0 lg:block" aria-hidden="true" />

            <div className="hidden min-w-0 flex-1 justify-center md:flex">
              <div className="flex items-center gap-6 lg:gap-8 xl:gap-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={item.isModal ? handleContactClick : undefined}
                    className="text-[0.68rem] font-medium uppercase tracking-[0.1em] text-text-muted transition-colors duration-200 hover:text-text lg:text-xs"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden w-[248px] shrink-0 justify-end lg:flex">
              <SpotifyWidget className="w-[240px] max-w-[240px]" />
            </div>

            <SheetTrigger asChild>
              <button
                type="button"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={
                  mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 md:hidden"
              >
                <span className="relative block h-4 w-4">
                  <span
                    className={`absolute left-0 top-[2px] h-[1.5px] w-4 rounded-full bg-text transition-all duration-300 ${
                      mobileMenuOpen ? "translate-y-[5px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[7px] h-[1.5px] w-4 rounded-full bg-text transition-all duration-300 ${
                      mobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[12px] h-[1.5px] w-4 rounded-full bg-text transition-all duration-300 ${
                      mobileMenuOpen ? "-translate-y-[5px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </SheetTrigger>
          </div>
        </nav>

        <SheetContent
          side="top"
          hideClose
          id="mobile-navigation"
          className="top-[68px] left-4 right-4 mx-auto max-w-[860px] rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:hidden"
        >
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <SheetDescription className="sr-only">
            Browse site sections and contact options.
          </SheetDescription>
          <div className="space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={item.isModal ? handleContactClick : handleNavItemClick}
                aria-current={path === item.href ? "page" : undefined}
                className="flex items-center rounded-2xl border border-transparent px-4 py-3 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-text-muted transition-all duration-200 hover:border-white/10 hover:bg-white/[0.04] hover:text-text"
              >
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}


