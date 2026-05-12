import { motion } from "framer-motion";

const education = {
  school: "Duke University",
  subtitle: "Durham, NC · May 2027",
  headline: "MEng Software Engineering · BSE Electrical & Computer Engineering, Computer Science",
  bullets: [
    "Cumulative GPA: 3.7/4.0",
    "Coursework includes algorithms, database systems, computer architecture, networks, operating systems, distributed systems, and software engineering",
    "Campus involvement: Computer Architecture TA, IEEE, NSBE, Collegiate 100 Black Men, Club Basketball officer, Coach2Inspire volunteer",
  ],
};

const experiences = [
  {
    role: "Research Assistant",
    company: "Duke University",
    location: "Durham, NC",
    period: "Aug 2025 – Present",
    bullets: [
      "Firmware for biometric devices using C, nRF SDK, and Zephyr RTOS to capture and analyze muscle data",
      "BLE device-to-device communication implemented in C++",
      "Pipelines to process datasets from embedded sensors for faster biometric analysis",
    ],
  },
  {
    role: "Digital Design Teaching Assistant",
    company: "Duke University",
    location: "Durham, NC",
    period: "Aug 2025 – Present",
    bullets: [
      "Taught computer architecture topics—pipelining, caching, memory hierarchy, ISA execution—to 500+ students",
      "Debugged student programs in C and Assembly on CPU and memory models",
      "Mentored 5-stage pipelined CPU design projects on FPGAs",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Persistent Systems, LLC",
    location: "New York, NY",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Removed a production bottleneck with a Java and C firmware Quality Control app for automated device validation",
      "Achieved ~6-minute device validation through Gradle automation and optimization",
      "Extended SQL schema for device telemetry and production error codes to improve failure analysis",
      "Added unit tests and real-time device status UI to the company-wide QC application",
      "Cut development friction ~50% with automated build and deployment bash scripts",
    ],
  },
  {
    role: "Computer Engineering Intern",
    company: "Federal Aviation Administration",
    location: "Atlantic City, NJ",
    period: "May 2024 – Aug 2024",
    bullets: [
      "Cut test duration 66% for a national tool by leading simulations in a proprietary FAA framework",
      "Improved data processing ~500% with multithreading and parallel C POSIX",
      "Prototyped an AI model for automated testing and evaluation",
      "Reduced out-of-lab time ~50% with Python automation for testing workflows",
    ],
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
        <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-3">Background</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
          Education & experience<span className="text-gradient-coral">.</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group relative grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-b border-border hover:bg-secondary/30 -mx-6 px-6 rounded-xl transition-colors duration-300"
      >
        <p className="font-display text-sm text-muted-foreground whitespace-nowrap pt-1">{education.subtitle}</p>
        <div className="space-y-3">
          <h3 className="font-display text-xl font-bold text-foreground group-hover:text-gradient-coral transition-colors">
            {education.school}
          </h3>
          <p className="font-display text-sm font-medium text-primary max-w-2xl">{education.headline}</p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground font-body leading-relaxed max-w-2xl">
            {education.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={`${exp.company}-${exp.role}-${exp.period}`}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group relative grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-b border-border last:border-b-0 hover:bg-secondary/30 -mx-6 px-6 rounded-xl transition-colors duration-300"
          >
            <p className="font-display text-sm text-muted-foreground whitespace-nowrap pt-1">{exp.period}</p>
            <div className="space-y-3">
              <h3 className="font-display text-xl font-bold text-foreground group-hover:text-gradient-coral transition-colors">
                {exp.role}
              </h3>
              <p className="font-display text-sm font-medium text-primary">
                {exp.company}
                {exp.location ? ` · ${exp.location}` : ""}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground font-body leading-relaxed max-w-2xl">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
