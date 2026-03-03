import {
  BadgeDollarSign,
  BarChart3,
  BookOpen,
  Clock,
  FileText,
  Layers,
  User,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    desc: "Carefully planned lessons that build progressively from basics to advanced levels.",
  },
  {
    icon: User,
    title: "Personal Attention",
    desc: "Individual focus on each student's pace, strengths, and areas for improvement.",
  },
  {
    icon: Users,
    title: "One-to-One & Group Classes",
    desc: "Flexible learning formats to suit both personalized and collaborative study.",
  },
  {
    icon: Clock,
    title: "Flexible Timing",
    desc: "Schedule classes at convenient times — morning, afternoon, or evening slots available.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Fees",
    desc: "Quality education made accessible with transparent, competitive pricing.",
  },
  {
    icon: BarChart3,
    title: "Monthly Assessments",
    desc: "Regular evaluations to track progress and reinforce understanding.",
  },
  {
    icon: Layers,
    title: "Separate Batches",
    desc: "Dedicated batches for different age groups, levels, and language backgrounds.",
  },
  {
    icon: FileText,
    title: "Study Materials Provided",
    desc: "Comprehensive PDF notes, assignments, and reference materials included.",
  },
];

export default function WhyChooseSection() {
  return (
    <section
      id="why-us"
      className="py-24 relative overflow-hidden geometric-bg"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.16 0.05 155) 0%, oklch(0.22 0.09 158) 100%)",
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <div
              className="flex-1 max-w-[80px] h-px"
              style={{ background: "oklch(0.71 0.12 75 / 0.5)" }}
            />
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: "oklch(0.71 0.12 75)" }}
            >
              Our Advantages
            </span>
            <div
              className="flex-1 max-w-[80px] h-px"
              style={{ background: "oklch(0.71 0.12 75 / 0.5)" }}
            />
          </div>
          <h2
            className="font-display text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "oklch(0.97 0.008 90)" }}
          >
            Why Choose Ilmora Academy?
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "oklch(0.8 0.02 90)" }}
          >
            We go beyond simply teaching — we build confident, knowledgeable,
            and morally grounded individuals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "oklch(1 0 0 / 0.05)",
                border: "1px solid oklch(1 0 0 / 0.1)",
                backdropFilter: "blur(4px)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ background: "oklch(0.71 0.12 75 / 0.15)" }}
              >
                <feature.icon
                  size={22}
                  style={{ color: "oklch(0.71 0.12 75)" }}
                />
              </div>
              <h3
                className="font-display text-base font-bold mb-2 leading-snug"
                style={{ color: "oklch(0.97 0.008 90)" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.78 0.02 90)" }}
              >
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
