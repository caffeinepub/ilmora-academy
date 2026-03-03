import { Button } from "@/components/ui/button";
import { BookOpen, Star } from "lucide-react";
import { motion } from "motion/react";

interface HeroSectionProps {
  onEnroll: () => void;
  onDemo: () => void;
}

export default function HeroSection({ onEnroll, onDemo }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background:
          "linear-gradient(145deg, oklch(0.16 0.05 155) 0%, oklch(0.25 0.1 155) 50%, oklch(0.22 0.08 160) 100%)",
      }}
    >
      {/* Geometric pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url('/assets/generated/geometric-pattern-bg-transparent.dim_1200x800.png')",
          backgroundSize: "480px auto",
          backgroundRepeat: "repeat",
          opacity: 0.07,
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 60% 50%, oklch(0.34 0.1 155 / 0.3) 0%, transparent 70%)",
        }}
      />

      {/* Gold accent top */}
      <div
        className="absolute top-0 left-0 right-0 h-1 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.71 0.12 75), oklch(0.71 0.12 75), transparent)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left – Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit"
              style={{
                background: "oklch(0.71 0.12 75 / 0.15)",
                border: "1px solid oklch(0.71 0.12 75 / 0.4)",
              }}
            >
              <Star size={14} className="fill-brand-gold text-brand-gold" />
              <span className="text-brand-gold text-sm font-semibold tracking-wide">
                Where Knowledge Flourishes.
              </span>
              <Star size={14} className="fill-brand-gold text-brand-gold" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ color: "oklch(0.97 0.008 90)" }}
            >
              Transform Your{" "}
              <span style={{ color: "oklch(0.71 0.12 75)" }}>
                Learning Journey
              </span>{" "}
              with Authentic Islamic & Language Education
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="text-lg leading-relaxed"
              style={{ color: "oklch(0.85 0.015 90)" }}
            >
              Ilmora Academy provides structured online courses in Islamic
              Studies, Arabic Language, and English Grammar — designed for
              clarity, confidence, and character building.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button
                onClick={onEnroll}
                size="lg"
                className="btn-gold rounded-full px-8 py-6 text-base font-bold shadow-gold"
                data-ocid="hero.primary_button"
              >
                <BookOpen size={18} className="mr-2" />
                Enroll Now
              </Button>
              <Button
                onClick={onDemo}
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-base font-bold border-2 transition-all hover:shadow-lg"
                style={{
                  borderColor: "oklch(0.71 0.12 75 / 0.6)",
                  color: "oklch(0.97 0.008 90)",
                  background: "transparent",
                }}
                data-ocid="hero.secondary_button"
              >
                Book Free Demo Class
              </Button>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex gap-8 pt-4"
            >
              {[
                { value: "500+", label: "Students Enrolled" },
                { value: "3", label: "Programs Offered" },
                { value: "India &", label: "Worldwide" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="font-display text-2xl font-bold"
                    style={{ color: "oklch(0.71 0.12 75)" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs font-medium"
                    style={{ color: "oklch(0.75 0.02 90)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right – Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            {/* Gold frame / glow */}
            <div
              className="absolute inset-8 rounded-3xl blur-2xl pointer-events-none"
              style={{ background: "oklch(0.71 0.12 75 / 0.1)" }}
            />
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ border: "2px solid oklch(0.71 0.12 75 / 0.3)" }}
            >
              <img
                src="/assets/generated/hero-illustration.dim_800x600.png"
                alt="Student learning Islamic studies online with laptop and books"
                className="w-full max-w-xl object-cover"
                loading="eager"
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.16 0.05 155 / 0.3) 0%, transparent 50%)",
                }}
              />
            </div>

            {/* Floating accents */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3.5,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 w-16 h-16 opacity-60"
            >
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M32 4L35.5 26.5L58 30L35.5 33.5L32 56L28.5 33.5L6 30L28.5 26.5Z"
                  fill="oklch(0.71 0.12 75)"
                  stroke="oklch(0.58 0.11 72)"
                  strokeWidth="1"
                />
              </svg>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 w-12 h-12 opacity-50"
            >
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M24 3L27 20.5L44.5 24L27 27L24 44.5L21 27L3.5 24L21 20.5Z"
                  fill="oklch(0.71 0.12 75)"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M0 64L60 53.3C120 42.7 240 21.3 360 16C480 10.7 600 21.3 720 32C840 42.7 960 53.3 1080 53.3C1200 53.3 1320 42.7 1380 37.3L1440 32V64H1380C1320 64 1200 64 1080 64C960 64 840 64 720 64C600 64 480 64 360 64C240 64 120 64 60 64H0Z"
            fill="oklch(0.98 0.005 90)"
          />
        </svg>
      </div>
    </section>
  );
}
