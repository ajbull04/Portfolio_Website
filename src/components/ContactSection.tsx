import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
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
        <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Get In Touch</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
          Let's create
          <br />
          <span className="text-gradient-coral">something great</span>
        </h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed">
          Have a project in mind, want to collaborate, or just want to say hi? I'd love to hear from you.
        </p>

        <motion.a
          href="mailto:hello@example.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-block bg-gradient-coral px-10 py-4 rounded-full font-display text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Say Hello
        </motion.a>

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
      <p>© 2026 JD. All rights reserved.</p>
      <p>Designed & built with passion.</p>
    </div>
  </section>
);

export default ContactSection;
