import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2022 – Present",
    description: "Leading the frontend architecture for a suite of SaaS products serving 50K+ users.",
  },
  {
    role: "UI/UX Developer",
    company: "DesignStudio",
    period: "2020 – 2022",
    description: "Bridged design and engineering, building component libraries and design systems from scratch.",
  },
  {
    role: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2019 – 2020",
    description: "Wore all the hats. Built MVPs, shipped fast, learned faster.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-32 px-8 bg-card/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-3">Career Path</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
          Experience<span className="text-gradient-coral">.</span>
        </h2>
      </motion.div>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group relative grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-b border-border last:border-b-0 hover:bg-secondary/30 -mx-6 px-6 rounded-xl transition-colors duration-300"
          >
            <p className="font-display text-sm text-muted-foreground whitespace-nowrap pt-1">{exp.period}</p>
            <div className="space-y-2">
              <h3 className="font-display text-xl font-bold text-foreground group-hover:text-gradient-coral transition-colors">
                {exp.role}
              </h3>
              <p className="font-display text-sm font-medium text-primary">{exp.company}</p>
              <p className="text-muted-foreground font-body leading-relaxed max-w-lg">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
