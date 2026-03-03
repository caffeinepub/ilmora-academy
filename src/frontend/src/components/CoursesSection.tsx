import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import type { CourseInterest } from "../App";

interface CoursesSectionProps {
  onEnroll: (course: CourseInterest) => void;
}

const programs = [
  {
    id: 1,
    title: "Islamic Studies Program",
    icon: "/assets/generated/islamic-studies-icon.dim_400x400.png",
    iconAlt: "Open Quran with Islamic ornaments",
    color: "oklch(0.34 0.1 155)",
    bgColor: "oklch(0.25 0.1 155)",
    badgeColor: "oklch(0.71 0.12 75 / 0.15)",
    badgeText: "Core Foundation",
    courseInterest: "Islamic Studies Program" as CourseInterest,
    courses: [
      "Quran Reading with Tajweed",
      "Basic & Advanced Tafseer",
      "Hadith Studies",
      "Aqeedah (Islamic Creed)",
      "Fiqh (Islamic Jurisprudence)",
      "Seerah of Prophet Muhammad ﷺ",
      "Islamic History",
      "Character & Moral Development",
    ],
  },
  {
    id: 2,
    title: "Arabic Language Program",
    icon: "/assets/generated/arabic-language-icon.dim_400x400.png",
    iconAlt: "Arabic calligraphy and open book",
    color: "oklch(0.34 0.1 155)",
    bgColor: "oklch(0.22 0.08 155)",
    badgeColor: "oklch(0.71 0.12 75 / 0.15)",
    badgeText: "Language Mastery",
    courseInterest: "Arabic Language Program" as CourseInterest,
    courses: [
      "Basic Arabic for Beginners",
      "Arabic Grammar (Nahw & Sarf)",
      "Classical Arabic Text Reading",
      "Quranic Arabic",
      "Spoken Arabic",
      "Translation Skills (Arabic ↔ English/Urdu)",
    ],
  },
  {
    id: 3,
    title: "English Program",
    icon: "/assets/generated/english-program-icon.dim_400x400.png",
    iconAlt: "English books and graduation cap",
    color: "oklch(0.34 0.1 155)",
    bgColor: "oklch(0.20 0.06 155)",
    badgeColor: "oklch(0.71 0.12 75 / 0.15)",
    badgeText: "Communication Skills",
    courseInterest: "English Program" as CourseInterest,
    courses: [
      "Basic English Grammar",
      "Spoken English",
      "Writing Skills",
      "Academic English for Students",
    ],
  },
];

export default function CoursesSection({ onEnroll }: CoursesSectionProps) {
  return (
    <section id="courses" className="py-24 bg-background">
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
              What We Teach
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-green-deep mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive, structured programs designed to nurture knowledge,
            language, and character at every level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              data-ocid={`courses.item.${program.id}`}
              className="flex flex-col rounded-2xl overflow-hidden shadow-card hover:shadow-green transition-all duration-300 group"
              style={{ border: "1px solid oklch(0.88 0.02 155)" }}
            >
              {/* Card header with image */}
              <div
                className="relative h-52 overflow-hidden"
                style={{
                  background: `linear-gradient(145deg, ${program.bgColor} 0%, oklch(0.16 0.05 155) 100%)`,
                }}
              >
                {/* Geometric overlay */}
                <div
                  className="absolute inset-0 pointer-events-none overflow-hidden"
                  style={{
                    backgroundImage:
                      "url('/assets/generated/geometric-pattern-bg-transparent.dim_1200x800.png')",
                    backgroundSize: "280px auto",
                    opacity: 0.1,
                  }}
                />
                <img
                  src={program.icon}
                  alt={program.iconAlt}
                  className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
                {/* Badge */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold tracking-wide"
                  style={{
                    background: "oklch(0.71 0.12 75 / 0.25)",
                    color: "oklch(0.88 0.07 80)",
                    border: "1px solid oklch(0.71 0.12 75 / 0.4)",
                  }}
                >
                  {program.badgeText}
                </div>
              </div>

              {/* Card body */}
              <div className="flex-1 flex flex-col p-6 bg-card">
                <h3 className="font-display text-xl font-bold text-brand-green-deep mb-4">
                  {program.title}
                </h3>

                <ul className="flex-1 space-y-2 mb-6">
                  {program.courses.map((course) => (
                    <li
                      key={course}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 shrink-0"
                        style={{ color: "oklch(0.34 0.1 155)" }}
                      />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => onEnroll(program.courseInterest)}
                  className="btn-green w-full rounded-full font-bold py-5"
                >
                  Enroll in This Program
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
