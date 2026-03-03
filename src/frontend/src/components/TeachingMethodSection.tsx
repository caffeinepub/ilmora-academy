import {
  ClipboardList,
  FileText,
  Monitor,
  PenTool,
  TrendingUp,
  Video,
} from "lucide-react";
import { motion } from "motion/react";

const methods = [
  {
    icon: Video,
    title: "Live Interactive Classes",
    desc: "Real-time sessions with dedicated teachers via Zoom or Google Meet.",
    number: "01",
  },
  {
    icon: Monitor,
    title: "Screen-based Teaching",
    desc: "Engaging visual instruction using screen sharing for clear explanations.",
    number: "02",
  },
  {
    icon: PenTool,
    title: "Digital Whiteboard",
    desc: "Interactive whiteboard for grammar diagrams, Arabic script, and Tajweed rules.",
    number: "03",
  },
  {
    icon: FileText,
    title: "PDF Notes",
    desc: "Well-organized notes for every lesson, available for download and review.",
    number: "04",
  },
  {
    icon: ClipboardList,
    title: "Homework & Assignments",
    desc: "Structured practice tasks to reinforce concepts learned in each class.",
    number: "05",
  },
  {
    icon: TrendingUp,
    title: "Regular Progress Evaluation",
    desc: "Monthly assessments and feedback reports to track your learning journey.",
    number: "06",
  },
];

export default function TeachingMethodSection() {
  return (
    <section className="py-24 bg-background">
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
              How We Teach
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-green-deep mb-4">
            Our Teaching Method
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A modern, structured approach that makes learning accessible,
            engaging, and effective for students worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((method, i) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative flex gap-5 p-6 rounded-2xl bg-card shadow-card hover:shadow-green transition-all duration-300 group overflow-hidden"
              style={{ border: "1px solid oklch(0.88 0.02 155)" }}
            >
              {/* Large number bg */}
              <div
                className="absolute top-3 right-3 font-display text-6xl font-bold pointer-events-none select-none leading-none"
                style={{ color: "oklch(0.34 0.1 155 / 0.06)" }}
              >
                {method.number}
              </div>

              <div
                className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: "oklch(0.95 0.018 155)" }}
              >
                <method.icon
                  size={22}
                  style={{ color: "oklch(0.34 0.1 155)" }}
                />
              </div>

              <div className="relative z-10">
                <h3 className="font-display text-base font-bold text-brand-green-deep mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {method.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
