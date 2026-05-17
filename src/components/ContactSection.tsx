import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";

const EMAIL = "ajbull426@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/ajbull426";
const PHONE_DISPLAY = "856-404-7645";
const PHONE_TEL = "tel:+18564047645";

const socials = [
  { icon: Mail, label: "Email", href: `mailto:${EMAIL}` },
  { icon: Linkedin, label: "LinkedIn", href: LINKEDIN },
  { icon: Phone, label: "Phone", href: PHONE_TEL },
];

const ContactSection = () => (
  <section id="contact" className="py-32 px-8 bg-card/30">
    <div className="container mx-auto text-center max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Get in touch</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
          Let's <span className="text-gradient-coral">talk</span>
        </h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed">
          I'm looking for software engineering careers where I can work on real products, backend, full-stack, mobile,
          or systems. If that sounds like your team, I'd love to connect.
        </p>
        <p className="text-muted-foreground font-body leading-relaxed">
          Even if you just want to talk through a problem, explore other opportunities, or reach out about something
          else, I'd love to hear from you. I'm open to connecting on almost anything, so please get in touch.
        </p>

        <motion.a
          href={`mailto:${EMAIL}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-block bg-gradient-coral px-10 py-4 rounded-full font-display text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Email me
        </motion.a>

        <p className="text-sm text-muted-foreground font-body pt-2">
          <a href={PHONE_TEL} className="hover:text-primary transition-colors">
            {PHONE_DISPLAY}
          </a>
        </p>

        <div className="flex justify-center gap-6 pt-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
            >
              <s.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Footer */}
    <div className="container mx-auto mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-body">
      <p>© 2026 Aaron Bullock. All rights reserved.</p>
      <p>Duke University · Software engineering</p>
    </div>
  </section>
);

export default ContactSection;
