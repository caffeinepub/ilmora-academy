import { Heart } from "lucide-react";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.12 0.04 155) 0%, oklch(0.16 0.05 155) 100%)",
      }}
    >
      {/* Geometric pattern top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url('/assets/generated/geometric-pattern-bg-transparent.dim_1200x800.png')",
          backgroundSize: "480px auto",
          opacity: 0.05,
        }}
      />

      {/* Gold top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.71 0.12 75 / 0.6), oklch(0.71 0.12 75 / 0.6), transparent)",
        }}
      />

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M18 2L20.5 13.5L32 11L22.5 18L32 25L20.5 22.5L18 34L15.5 22.5L4 25L13.5 18L4 11L15.5 13.5Z"
                    fill="oklch(0.71 0.12 75)"
                    stroke="oklch(0.58 0.11 72)"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="4"
                    fill="white"
                    fillOpacity="0.9"
                  />
                </svg>
              </div>
              <div className="leading-tight">
                <span
                  className="font-display text-xl font-bold block leading-none"
                  style={{ color: "oklch(0.97 0.008 90)" }}
                >
                  Ilmora
                </span>
                <span
                  className="font-sans text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "oklch(0.71 0.12 75)" }}
                >
                  Academy
                </span>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.72 0.02 90)" }}
            >
              Ilmora Academy is an online institute dedicated to Islamic
              Studies, Arabic language, and English grammar education. We aim to
              nurture knowledge, character, and intellectual growth through
              structured and authentic learning.
            </p>
            {/* Social */}
            <div className="flex gap-3 pt-2">
              {[
                { Icon: SiFacebook, href: "#", label: "Facebook" },
                { Icon: SiInstagram, href: "#", label: "Instagram" },
                { Icon: SiYoutube, href: "#", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "oklch(1 0 0 / 0.05)",
                    border: "1px solid oklch(1 0 0 / 0.1)",
                    color: "oklch(0.72 0.02 90)",
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-display text-base font-bold mb-5 uppercase tracking-wider"
              style={{ color: "oklch(0.71 0.12 75)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="text-sm transition-colors hover:text-brand-gold flex items-center gap-2 group"
                    style={{ color: "oklch(0.72 0.02 90)" }}
                    data-ocid="footer.link"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full transition-all duration-200 group-hover:scale-125"
                      style={{ background: "oklch(0.71 0.12 75 / 0.5)" }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="font-display text-base font-bold mb-5 uppercase tracking-wider"
              style={{ color: "oklch(0.71 0.12 75)" }}
            >
              Contact
            </h3>
            <div className="space-y-3">
              {[
                { label: "Email", value: "info@ilmoraacademy.com" },
                { label: "Email 2", value: "ilmoraacademy2@gmail.com" },
                { label: "Mobile", value: "+91 93908 35388" },
                { label: "WhatsApp", value: "+91 73965 31870" },
                { label: "Location", value: "Online — India & Worldwide" },
              ].map((item) => (
                <div key={item.label}>
                  <div
                    className="text-xs font-bold uppercase tracking-wider mb-0.5"
                    style={{ color: "oklch(0.71 0.12 75 / 0.7)" }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "oklch(0.72 0.02 90)" }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: "1px solid oklch(1 0 0 / 0.08)",
            color: "oklch(0.6 0.01 90)",
          }}
        >
          <span>© {currentYear} Ilmora Academy. All rights reserved.</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-brand-gold transition-colors"
          >
            Built with{" "}
            <Heart
              size={12}
              className="fill-current mx-0.5"
              style={{ color: "oklch(0.71 0.12 75)" }}
            />{" "}
            using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
