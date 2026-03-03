import { Button } from "@/components/ui/button";
import { BookOpen, Phone } from "lucide-react";
import { motion } from "motion/react";

interface CTABannerProps {
  onEnroll: () => void;
}

export default function CTABanner({ onEnroll }: CTABannerProps) {
  return (
    <section
      className="py-24 relative overflow-hidden geometric-bg"
      style={{
        background:
          "linear-gradient(145deg, oklch(0.16 0.05 155) 0%, oklch(0.25 0.1 155) 50%, oklch(0.2 0.08 160) 100%)",
      }}
    >
      {/* Gold radial accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.71 0.12 75 / 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Decorative star */}
      <div className="absolute top-8 left-8 opacity-20 pointer-events-none">
        <svg
          viewBox="0 0 80 80"
          className="w-20 h-20"
          style={{ fill: "oklch(0.71 0.12 75)" }}
          aria-hidden="true"
          focusable="false"
        >
          <path d="M40 4L45 32.5L73.5 37L45 41.5L40 70L35 41.5L6.5 37L35 32.5Z" />
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 opacity-15 pointer-events-none">
        <svg
          viewBox="0 0 60 60"
          className="w-16 h-16"
          style={{ fill: "oklch(0.71 0.12 75)" }}
          aria-hidden="true"
          focusable="false"
        >
          <path d="M30 3L33.5 24L54.5 27.5L33.5 31L30 52L26.5 31L5.5 27.5L26.5 24Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div
              className="w-16 h-px"
              style={{ background: "oklch(0.71 0.12 75 / 0.5)" }}
            />
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              style={{ fill: "oklch(0.71 0.12 75)" }}
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12 1L14.5 9.5L23 12L14.5 14.5L12 23L9.5 14.5L1 12L9.5 9.5Z" />
            </svg>
            <div
              className="w-16 h-px"
              style={{ background: "oklch(0.71 0.12 75 / 0.5)" }}
            />
          </div>

          <h2
            className="font-display text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "oklch(0.97 0.008 90)" }}
          >
            Start Your Learning Journey Today
          </h2>
          <p
            className="text-xl mb-10 leading-relaxed"
            style={{ color: "oklch(0.84 0.02 90)" }}
          >
            Book a Free Demo Class and experience structured Islamic and
            language education — no obligation, just pure knowledge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onEnroll}
              size="lg"
              className="btn-gold rounded-full px-10 py-6 text-base font-bold shadow-gold"
              data-ocid="cta.primary_button"
            >
              <BookOpen size={18} className="mr-2" />
              Enroll Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 py-6 text-base font-bold border-2 transition-all"
              style={{
                borderColor: "oklch(1 0 0 / 0.3)",
                color: "oklch(0.97 0.008 90)",
                background: "transparent",
              }}
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              data-ocid="cta.secondary_button"
            >
              <Phone size={18} className="mr-2" />
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
