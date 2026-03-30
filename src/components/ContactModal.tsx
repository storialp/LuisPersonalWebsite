import React, { useEffect, useRef } from "react";
import { contactLinks } from "../data/contact";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300" />

      {/* Modal Content */}
      <div
        ref={modalRef}
        className="relative w-full max-w-[480px] bg-[#0d0d0d] border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08]">
          <h2 className="text-lg font-medium tracking-tight text-white">Luis Pericchi</h2>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-white/40 hover:text-white transition-colors rounded-full hover:bg-white/5"
            aria-label="Close modal"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Contact Info List */}
        <div className="px-6 py-6 space-y-8">
          <section>
            <h3 className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.15em] mb-4">
              Contact Info
            </h3>
            <div className="space-y-6">
              {contactLinks.map((link) => (
                <div key={link.label} className="flex gap-4">
                  <div className={`mt-1 flex-shrink-0 ${link.color}`}>{link.icon}</div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-white/90">{link.label}</p>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-[#20D5B3] hover:underline decoration-1 underline-offset-4 break-all block"
                      onClick={() =>
                        (window as any).posthog?.capture("external_link_clicked", {
                          link_label: link.label,
                          link_href: link.href,
                          source: "contact_modal",
                        })
                      }
                    >
                      {link.href.replace("mailto:", "").replace("https://", "")}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Location Section - Adding context from the layout description */}
          <section>
            <h3 className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.15em] mb-4">
              Current Base
            </h3>
            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0 text-white/60">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-white/90">Milan, Italy</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer style action if needed, or just padding */}
        <div className="px-6 py-4 bg-white/[0.02] border-t border-white/[0.08] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-white/70 hover:text-white transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
