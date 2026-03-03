import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

interface HeaderProps {
  onEnroll: () => void;
}

export default function Header({ onEnroll }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo — use button for SPA nav */}
        <button
          type="button"
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => handleNavClick("#home")}
          data-ocid="nav.link"
          aria-label="Ilmora Academy – go to top"
        >
          <div className="w-9 h-9 flex items-center justify-center">
            <svg
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              role="img"
              aria-label="Ilmora Academy star logo"
            >
              <title>Ilmora Academy logo star</title>
              <path
                d="M18 2L20.5 13.5L32 11L22.5 18L32 25L20.5 22.5L18 34L15.5 22.5L4 25L13.5 18L4 11L15.5 13.5Z"
                fill="oklch(0.71 0.12 75)"
                stroke="oklch(0.58 0.11 72)"
                strokeWidth="0.5"
              />
              <circle cx="18" cy="18" r="4" fill="oklch(0.34 0.1 155)" />
            </svg>
          </div>
          <div className="leading-tight">
            <span
              className="font-display text-lg font-bold text-brand-green-deep block leading-none"
              style={{ lineHeight: "1.1" }}
            >
              Ilmora
            </span>
            <span className="font-sans text-xs font-semibold text-brand-gold tracking-widest uppercase">
              Academy
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="px-4 py-2 text-sm font-semibold text-foreground/80 hover:text-brand-green transition-colors rounded-md hover:bg-brand-green-light/30"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            onClick={onEnroll}
            className="btn-gold rounded-full px-6 text-sm"
            data-ocid="nav.primary_button"
          >
            Enroll Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-brand-green-light/30 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-3 text-sm font-semibold text-foreground/80 hover:text-brand-green hover:bg-brand-green-light/30 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  setMobileOpen(false);
                  onEnroll();
                }}
                className="btn-gold w-full mt-2 rounded-full"
                data-ocid="nav.primary_button"
              >
                Enroll Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
