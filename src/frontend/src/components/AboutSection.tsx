import { Award, BookOpen, Languages, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

const pillars = [
  {
    icon: BookOpen,
    title: "Sound Understanding of Islam",
    desc: "Authentic Islamic knowledge rooted in classical scholarship and primary sources.",
  },
  {
    icon: Languages,
    title: "Strong Arabic Grammar",
    desc: "Mastery of Nahw & Sarf for fluent understanding of the Quran and classical texts.",
  },
  {
    icon: MessageSquare,
    title: "Clear English Communication",
    desc: "Practical grammar and spoken skills for confident academic and professional expression.",
  },
  {
    icon: Award,
    title: "Academic & Moral Excellence",
    desc: "Building character, integrity, and intellectual discipline alongside academic achievement.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="gold-divider mb-6 max-w-xs mx-auto">
            <span className="text-sm font-bold tracking-widest text-brand-gold uppercase">
              About Us
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-green-deep mb-6">
            About Ilmora Academy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ilmora Academy is an online educational platform dedicated to
            delivering authentic Islamic knowledge and strong language
            foundations in Arabic and English.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Body text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div
              className="relative p-8 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.16 0.05 155) 0%, oklch(0.25 0.1 155) 100%)",
              }}
            >
              {/* Geometric accent */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
                style={{
                  backgroundImage:
                    "url('/assets/generated/geometric-pattern-bg-transparent.dim_1200x800.png')",
                  backgroundSize: "320px auto",
                  opacity: 0.08,
                }}
              />
              <div className="relative z-10">
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ color: "oklch(0.88 0.02 90)" }}
                >
                  Our mission is to nurture students with sound understanding of
                  Islam, strong Arabic grammar skills (Nahw & Sarf), clear
                  English communication, and academic and moral excellence.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "oklch(0.88 0.02 90)" }}
                >
                  We combine{" "}
                  <span
                    style={{ color: "oklch(0.71 0.12 75)" }}
                    className="font-semibold"
                  >
                    traditional scholarship
                  </span>{" "}
                  with modern teaching methods to create a structured and
                  engaging learning experience for students worldwide — from
                  India to any corner of the globe.
                </p>
                <div
                  className="mt-6 pt-6"
                  style={{ borderTop: "1px solid oklch(0.71 0.12 75 / 0.3)" }}
                >
                  <p
                    className="font-display text-xl italic"
                    style={{ color: "oklch(0.71 0.12 75)" }}
                  >
                    "Rooted in Faith. Growing in Knowledge."
                  </p>
                </div>
              </div>
            </div>

            {/* Live / Mode info */}
            <div className="flex gap-4 flex-wrap">
              {[
                { label: "Mode", value: "Live Online Classes" },
                { label: "Platform", value: "Zoom / Google Meet" },
                { label: "Audience", value: "Children to Adults" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex-1 min-w-[120px] p-4 rounded-xl border border-brand-green-light/50"
                  style={{ background: "oklch(0.95 0.018 155)" }}
                >
                  <div className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-brand-green-deep">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Four pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-card shadow-card hover:shadow-green transition-shadow duration-300 group"
                style={{ border: "1px solid oklch(0.88 0.02 155)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300"
                  style={{ background: "oklch(0.95 0.018 155)" }}
                >
                  <pillar.icon
                    size={22}
                    style={{ color: "oklch(0.34 0.1 155)" }}
                  />
                </div>
                <h3 className="font-display text-base font-bold text-brand-green-deep mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
