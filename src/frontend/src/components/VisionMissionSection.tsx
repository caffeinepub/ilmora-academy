import { CheckCircle2, Eye, Target } from "lucide-react";
import { motion } from "motion/react";

const missionPoints = [
  "To provide accessible and structured Islamic education",
  "To simplify Arabic grammar for all levels",
  "To strengthen English communication skills",
  "To develop intellectual and moral excellence",
];

export default function VisionMissionSection() {
  return (
    <section
      className="py-24 relative overflow-hidden geometric-bg"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.95 0.018 155) 0%, oklch(0.93 0.015 90) 100%)",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="gold-divider mb-6 max-w-xs mx-auto">
            <span className="text-sm font-bold tracking-widest text-brand-gold uppercase">
              Our Purpose
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-green-deep">
            Vision & Mission
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="h-full p-8 rounded-2xl relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, oklch(0.25 0.1 155) 0%, oklch(0.16 0.05 155) 100%)",
              }}
            >
              {/* Geometric pattern overlay */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
                style={{
                  backgroundImage:
                    "url('/assets/generated/geometric-pattern-bg-transparent.dim_1200x800.png')",
                  backgroundSize: "320px auto",
                  opacity: 0.08,
                }}
              />
              {/* Gold corner accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, oklch(0.71 0.12 75 / 0.2), transparent 70%)",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "oklch(0.71 0.12 75 / 0.2)" }}
                  >
                    <Eye size={22} style={{ color: "oklch(0.71 0.12 75)" }} />
                  </div>
                  <h3
                    className="font-display text-2xl font-bold"
                    style={{ color: "oklch(0.97 0.008 90)" }}
                  >
                    Our Vision
                  </h3>
                </div>

                <p
                  className="text-lg leading-relaxed font-display italic"
                  style={{ color: "oklch(0.88 0.02 90)" }}
                >
                  "To build a generation grounded in authentic Islamic knowledge
                  and equipped with strong language skills to engage confidently
                  with the modern world."
                </p>

                {/* Decorative star divider */}
                <div className="mt-8 flex items-center gap-3">
                  <div
                    className="flex-1 h-px"
                    style={{ background: "oklch(0.71 0.12 75 / 0.3)" }}
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
                    className="flex-1 h-px"
                    style={{ background: "oklch(0.71 0.12 75 / 0.3)" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="h-full p-8 rounded-2xl"
              style={{
                background: "oklch(1 0 0)",
                border: "2px solid oklch(0.88 0.02 155)",
                boxShadow: "0 4px 24px oklch(0.34 0.1 155 / 0.1)",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "oklch(0.95 0.018 155)" }}
                >
                  <Target size={22} style={{ color: "oklch(0.34 0.1 155)" }} />
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-green-deep">
                  Our Mission
                </h3>
              </div>

              <div className="space-y-4">
                {missionPoints.map((point, idx) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.4 }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-green-light/30 transition-colors duration-200"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0"
                      style={{ color: "oklch(0.71 0.12 75)" }}
                    />
                    <span className="text-base text-foreground/80 leading-relaxed">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
