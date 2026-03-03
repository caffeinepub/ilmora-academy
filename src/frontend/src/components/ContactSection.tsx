import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@ilmoraacademy.com",
    href: "mailto:info@ilmoraacademy.com",
  },
  {
    icon: Mail,
    label: "Email 2",
    value: "ilmoraacademy2@gmail.com",
    href: "mailto:ilmoraacademy2@gmail.com",
  },
  {
    icon: Phone,
    label: "Mobile",
    value: "+91 93908 35388",
    href: "tel:+919390835388",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+91 73965 31870",
    href: "https://wa.me/917396531870",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Online (India & Worldwide)",
    href: null,
  },
];

export default function ContactSection() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!actor) {
      toast.error("Connection not ready. Please try again.");
      return;
    }
    setIsSubmitting(true);
    try {
      await actor.submitContactMessage(
        name.trim(),
        email.trim(),
        message.trim(),
      );
      setSubmitted(true);
      toast.success("Message sent! We'll get back to you shortly.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      toast.error("Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
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
              Get In Touch
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-green-deep mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? Reach out and we'll be happy to help you start your
            learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div
              className="relative p-8 rounded-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, oklch(0.16 0.05 155) 0%, oklch(0.25 0.1 155) 100%)",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
                style={{
                  backgroundImage:
                    "url('/assets/generated/geometric-pattern-bg-transparent.dim_1200x800.png')",
                  backgroundSize: "320px auto",
                  opacity: 0.07,
                }}
              />
              <div className="relative z-10">
                <h3
                  className="font-display text-xl font-bold mb-6"
                  style={{ color: "oklch(0.97 0.008 90)" }}
                >
                  Reach Out to Us
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "oklch(0.71 0.12 75 / 0.2)" }}
                      >
                        <item.icon
                          size={18}
                          style={{ color: "oklch(0.71 0.12 75)" }}
                        />
                      </div>
                      <div>
                        <div
                          className="text-xs font-bold uppercase tracking-wider mb-0.5"
                          style={{ color: "oklch(0.71 0.12 75)" }}
                        >
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-semibold hover:underline"
                            style={{ color: "oklch(0.88 0.02 90)" }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span
                            className="text-sm font-semibold"
                            style={{ color: "oklch(0.88 0.02 90)" }}
                          >
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div
                  className="mt-8 pt-6"
                  style={{ borderTop: "1px solid oklch(0.71 0.12 75 / 0.3)" }}
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.75 0.02 90)" }}
                  >
                    Classes are held online via Zoom / Google Meet. Join us from
                    anywhere in the world.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div
                className="h-full min-h-[300px] flex flex-col items-center justify-center text-center rounded-2xl p-8"
                style={{
                  background: "oklch(0.95 0.018 155)",
                  border: "2px solid oklch(0.71 0.12 75 / 0.3)",
                }}
                data-ocid="contact.success_state"
              >
                <CheckCircle2
                  size={56}
                  className="mb-4"
                  style={{ color: "oklch(0.34 0.1 155)" }}
                />
                <h3 className="font-display text-2xl font-bold text-brand-green-deep mb-3">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. We'll get back to you within 24
                  hours.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="btn-green rounded-full px-8"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl bg-card shadow-card space-y-5"
                style={{ border: "1px solid oklch(0.88 0.02 155)" }}
              >
                <div>
                  <Label
                    htmlFor="contact-name"
                    className="text-sm font-bold text-brand-green-deep mb-2 block"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="contact-name"
                    type="text"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="name"
                    className="border-brand-green-light/50 focus:ring-primary"
                    data-ocid="contact.input"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="contact-email"
                    className="text-sm font-bold text-brand-green-deep mb-2 block"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    className="border-brand-green-light/50 focus:ring-primary"
                    data-ocid="contact.email_input"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="contact-message"
                    className="text-sm font-bold text-brand-green-deep mb-2 block"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    placeholder="How can we help you? Tell us about your learning goals..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="border-brand-green-light/50 focus:ring-primary resize-none"
                    data-ocid="contact.textarea"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-green w-full rounded-full font-bold py-6"
                  data-ocid="contact.submit_button"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
