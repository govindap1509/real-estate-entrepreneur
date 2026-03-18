"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integration point for form submission (e.g., API route, email service)
    alert("Thank you for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Get In Touch
          </h2>
          <Separator className="w-16 mx-auto bg-gold h-1 rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a deal, partnership idea, or just want to connect? I&apos;d
            love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="rounded-lg border-border focus-visible:ring-gold"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="rounded-lg border-border focus-visible:ring-gold"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                className="rounded-lg border-border focus-visible:ring-gold resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gold hover:bg-gold-dark text-white rounded-full text-base font-semibold"
            >
              Let&apos;s Build Something Together
            </Button>
          </form>

          {/* Social & Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                Connect With Me
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Follow my journey and stay updated on real estate insights.
              </p>

              <div className="flex gap-4">
                {/* YouTube */}
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-border hover:border-gold hover:text-gold text-muted-foreground transition-colors"
                  aria-label="YouTube"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-border hover:border-gold hover:text-gold text-muted-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-muted/50 rounded-xl p-6 border border-border">
              <p className="text-sm text-muted-foreground italic">
                &ldquo;The best investments in real estate and in life come from
                building genuine relationships. Let&apos;s start a
                conversation.&rdquo;
              </p>
              <p className="text-sm font-semibold text-navy mt-3">
                — Govinda Prasad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
