import {
  BookOpen,
  Briefcase,
  GraduationCap,
  Heart,
  Home,
  Star,
} from "lucide-react";
import { motion } from "motion/react";

const audiences = [
  {
    icon: GraduationCap,
    label: "School Students",
    desc: "Ages 6–18, all levels",
  },
  { icon: BookOpen, label: "College Students", desc: "Undergraduate & above" },
  { icon: Star, label: "Madrasah Students", desc: "Supplementary & advanced" },
  {
    icon: Briefcase,
    label: "Working Professionals",
    desc: "Flexible evening batches",
  },
  { icon: Home, label: "Homemakers", desc: "Flexible timing available" },
  {
    icon: Heart,
    label: "Anyone Interested",
    desc: "Islamic & language studies",
  },
];

export default function TargetAudienceSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.95 0.018 155)" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="gold-divider mb-6 max-w-xs mx-auto">
            <span className="text-sm font-bold tracking-widest text-brand-gold uppercase">
              For Everyone
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-green-deep mb-4">
            Who Is This For?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ilmora Academy is designed for every sincere learner, regardless of
            age, background, or level.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center p-5 rounded-2xl bg-card shadow-card hover:shadow-green transition-all duration-300 group"
              style={{ border: "1px solid oklch(0.88 0.02 155)" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.25 0.1 155), oklch(0.34 0.1 155))",
                }}
              >
                <audience.icon size={24} className="text-white" />
              </div>
              <h3 className="font-display text-sm font-bold text-brand-green-deep mb-1">
                {audience.label}
              </h3>
              <p className="text-xs text-muted-foreground leading-snug">
                {audience.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA small note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Available for students from{" "}
          <strong className="text-brand-green-deep">India</strong> and{" "}
          <strong className="text-brand-green-deep">worldwide</strong> — all
          classes are conducted online.
        </motion.p>
      </div>
    </section>
  );
}
