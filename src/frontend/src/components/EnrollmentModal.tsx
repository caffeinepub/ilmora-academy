import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import type { CourseInterest } from "../App";
import { useActor } from "../hooks/useActor";

interface EnrollmentModalProps {
  open: boolean;
  onClose: () => void;
  defaultCourse: CourseInterest;
}

const courseOptions: CourseInterest[] = [
  "Islamic Studies Program",
  "Arabic Language Program",
  "English Program",
];

export default function EnrollmentModal({
  open,
  onClose,
  defaultCourse,
}: EnrollmentModalProps) {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [courseInterest, setCourseInterest] =
    useState<CourseInterest>(defaultCourse);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync default course
  useEffect(() => {
    setCourseInterest(defaultCourse);
  }, [defaultCourse]);

  // Reset on open
  useEffect(() => {
    if (open) {
      setSubmitted(false);
    }
  }, [open]);

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      // Delay reset so transition looks clean
      setTimeout(() => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setSubmitted(false);
      }, 300);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !courseInterest) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!actor) {
      toast.error("Connection not ready. Please try again.");
      return;
    }
    setIsSubmitting(true);
    try {
      await actor.submitEnrollmentRequest(
        name.trim(),
        email.trim(),
        phone.trim(),
        courseInterest,
        message.trim() || null,
      );
      setSubmitted(true);
      toast.success("Enrollment request submitted! We'll contact you soon.");
    } catch {
      toast.error("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent
        className="max-w-lg rounded-2xl p-0 overflow-hidden"
        style={{ border: "1px solid oklch(0.88 0.02 155)" }}
        data-ocid="enrollment.modal"
      >
        {/* Header */}
        <div
          className="relative px-6 py-5"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.16 0.05 155) 0%, oklch(0.25 0.1 155) 100%)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            style={{
              backgroundImage:
                "url('/assets/generated/geometric-pattern-bg-transparent.dim_1200x800.png')",
              backgroundSize: "320px auto",
              opacity: 0.08,
            }}
          />
          <div className="relative z-10">
            <DialogHeader>
              <DialogTitle
                className="font-display text-xl font-bold"
                style={{ color: "oklch(0.97 0.008 90)" }}
              >
                Enroll at Ilmora Academy
              </DialogTitle>
              <DialogDescription style={{ color: "oklch(0.78 0.02 90)" }}>
                Fill in your details and we'll reach out within 24 hours.
              </DialogDescription>
            </DialogHeader>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-1.5 rounded-lg transition-colors hover:bg-white/10"
            style={{ color: "oklch(0.78 0.02 90)" }}
            aria-label="Close"
            data-ocid="enrollment.close_button"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {submitted ? (
            <div
              className="flex flex-col items-center text-center py-8"
              data-ocid="enrollment.success_state"
            >
              <CheckCircle2
                size={60}
                className="mb-4"
                style={{ color: "oklch(0.34 0.1 155)" }}
              />
              <h3 className="font-display text-2xl font-bold text-brand-green-deep mb-3">
                You're Enrolled!
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-sm">
                Thank you, <strong>{name}</strong>! Your enrollment request has
                been received. Our team will contact you at{" "}
                <strong>{email}</strong> within 24 hours.
              </p>
              <Button
                onClick={handleClose}
                className="btn-green rounded-full px-8"
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label
                  htmlFor="enroll-name"
                  className="text-sm font-bold text-brand-green-deep mb-1.5 block"
                >
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="enroll-name"
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                  className="border-brand-green-light/50"
                  data-ocid="enrollment.name_input"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="enroll-email"
                    className="text-sm font-bold text-brand-green-deep mb-1.5 block"
                  >
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="enroll-email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    className="border-brand-green-light/50"
                    data-ocid="enrollment.email_input"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="enroll-phone"
                    className="text-sm font-bold text-brand-green-deep mb-1.5 block"
                  >
                    Phone / WhatsApp <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="enroll-phone"
                    type="tel"
                    placeholder="+91 XXXXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    autoComplete="tel"
                    className="border-brand-green-light/50"
                    data-ocid="enrollment.phone_input"
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="enroll-course"
                  className="text-sm font-bold text-brand-green-deep mb-1.5 block"
                >
                  Course Interest <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={courseInterest}
                  onValueChange={(v) => setCourseInterest(v as CourseInterest)}
                  required
                >
                  <SelectTrigger
                    id="enroll-course"
                    className="border-brand-green-light/50"
                    data-ocid="enrollment.course_select"
                  >
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    {courseOptions.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor="enroll-message"
                  className="text-sm font-bold text-brand-green-deep mb-1.5 block"
                >
                  Message / Questions{" "}
                  <span className="text-muted-foreground font-normal">
                    (optional)
                  </span>
                </Label>
                <Textarea
                  id="enroll-message"
                  placeholder="Any specific questions, preferred timings, or notes..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="border-brand-green-light/50 resize-none"
                  data-ocid="enrollment.textarea"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold w-full rounded-full font-bold py-6 mt-2"
                data-ocid="enrollment.submit_button"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Enrollment Request"
                )}
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
