import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import AboutSection from "./components/AboutSection";
import CTABanner from "./components/CTABanner";
import ContactSection from "./components/ContactSection";
import CoursesSection from "./components/CoursesSection";
import EnrollmentModal from "./components/EnrollmentModal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TargetAudienceSection from "./components/TargetAudienceSection";
import TeachingMethodSection from "./components/TeachingMethodSection";
import VisionMissionSection from "./components/VisionMissionSection";
import WhyChooseSection from "./components/WhyChooseSection";

export type CourseInterest =
  | "Islamic Studies Program"
  | "Arabic Language Program"
  | "English Program"
  | "";

export default function App() {
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [defaultCourse, setDefaultCourse] = useState<CourseInterest>("");

  const openEnrollModal = (course: CourseInterest = "") => {
    setDefaultCourse(course);
    setEnrollModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header onEnroll={() => openEnrollModal()} />

      <main>
        <HeroSection
          onEnroll={() => openEnrollModal()}
          onDemo={() => openEnrollModal()}
        />
        <AboutSection />
        <VisionMissionSection />
        <CoursesSection onEnroll={openEnrollModal} />
        <WhyChooseSection />
        <TeachingMethodSection />
        <TargetAudienceSection />
        <CTABanner onEnroll={() => openEnrollModal()} />
        <ContactSection />
      </main>

      <Footer />

      <EnrollmentModal
        open={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        defaultCourse={defaultCourse}
      />

      <Toaster richColors position="top-right" />
    </div>
  );
}
