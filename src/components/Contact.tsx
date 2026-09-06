"use client";

import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "./ui/field";
import { Input, Textarea } from "./ui/input";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-px"
      style={{ paddingTop: "clamp(80px, 12vw, 160px)", paddingBottom: "clamp(80px, 12vw, 160px)" }}
    >
      <div className="section-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Phrase */}
        <FadeIn>
          <p
            className="text-foreground font-light leading-[1.15] tracking-[-0.03em] text-center"
            style={{ fontSize: "clamp(22px, 4vw, 52px)", maxWidth: "700px", marginBottom: "clamp(40px, 6vw, 80px)" }}
          >
            Want to work together?
            <br />
            <span className="text-muted">Reach out!</span>
          </p>
        </FadeIn>

        {/* Contact Form */}
        <FadeIn delay={0.15} className="w-full" style={{ maxWidth: "800px" }}>
          <form
            action="https://formsubmit.co/luismarinoaguirree@gmail.com"
            method="POST"
            style={{ width: "100%" }}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <FieldSet className="w-full">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input id="name" name="name" type="text" placeholder="Jane Smith" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input id="email" name="email" type="email" placeholder="jane@framer.com" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="message">Message</FieldLabel>
                  <Textarea id="message" name="message" placeholder="What cool project do you need help with?" required />
                </Field>
              </FieldGroup>

              {/* Submit */}
              <button
                type="submit"
                className="w-full font-medium transition-all duration-200 hover:opacity-90 active:scale-[0.99]"
                style={{
                  padding: "16px",
                  fontSize: "15px",
                  borderRadius: "12px",
                  backgroundColor: "var(--accent)",
                  color: "var(--background)",
                  border: "none",
                  cursor: "pointer",
                  marginTop: "8px",
                }}
              >
                Submit
              </button>
            </FieldSet>
          </form>
        </FadeIn>

        {/* Divider + socials */}
        <FadeIn delay={0.35} className="w-full" style={{ maxWidth: "800px" }}>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "clamp(24px, 4vw, 40px)", marginTop: "clamp(40px, 6vw, 80px)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>
              <a
                href="https://www.linkedin.com/in/luis-bautista-marino-aguirre-28aa96203/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors duration-300"
                style={{ fontSize: "14px" }}
              >
                LinkedIn
              </a>
              <a
                href="mailto:luismarinoaguirree@gmail.com"
                className="text-muted hover:text-foreground transition-colors duration-300"
                style={{ fontSize: "14px" }}
              >
                Email
              </a>
              <a
                href="https://github.com/Luismarinoaguirre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors duration-300"
                style={{ fontSize: "14px" }}
              >
                GitHub
              </a>
              <a
                href="https://www.behance.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors duration-300"
                style={{ fontSize: "14px" }}
              >
                Behance
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
