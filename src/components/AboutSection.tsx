import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Languages",
    items: [
      "Java",
      "Python",
      "C / C++",
      "TypeScript",
      "JavaScript",
      "HTML / CSS",
      "Ruby",
      "Assembly",
      "SQL",
    ],
  },
  {
    label: "Frameworks & runtimes",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Django",
      "FastAPI",
      "Flask",
      "Express",
      "Rails",
      "Vue",
    ],
  },
  {
    label: "Tools & data",
    items: [
      "Git",
      "Docker",
      "Kubernetes",
      "Nomad",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Supabase",
      "Kafka",
      "Snowflake",
      "Nginx",
      "Expo",
      "Vite",
    ],
  },
];

const AboutSection = () => (
  <section id="about" className="py-32 px-8">
    <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-start">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Who I am</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
          About<span className="text-gradient-coral">.</span>
        </h2>
        <p className="text-muted-foreground font-body leading-relaxed text-lg">
          I'm Aaron Bullock, a Duke student pursuing an MEng in Software Engineering alongside BSE Electrical & Computer
          Engineering and BS Computer Science. I like problems that cross the stack: shipping APIs and mobile clients,
          tightening databases, and writing firmware when the product lives on a device.
        </p>
        <p className="text-muted-foreground font-body leading-relaxed">
          Recently I've interned at Persistent Systems (QC automation, Java/C, SQL, Gradle) and the FAA (simulation,
          parallel C, Python tooling, ML prototyping), researched biometric firmware with Zephyr and BLE, and TA'd digital
          design for hundreds of peers. I'm looking for internships where I can contribute to production code and grow
          with a strong team.
        </p>
        <div className="pt-2 grid gap-3">
          <div className="rounded-2xl border border-border bg-card/40 px-5 py-4">
            <p className="font-display text-sm font-semibold text-foreground">What you can count on</p>
            <p className="text-muted-foreground font-body leading-relaxed mt-1">
              I communicate clearly, ask good questions early, and don’t disappear when something’s confusing. I like
              turning messy problems into small, testable pieces and shipping improvements steadily.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card/40 px-5 py-4">
            <p className="font-display text-sm font-semibold text-foreground">What I’m optimizing for</p>
            <p className="text-muted-foreground font-body leading-relaxed mt-1">
              Building things that feel fast and reliable: solid abstractions, performance wins that matter, and tools
              that make the next engineer’s day easier.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="space-y-10"
      >
        <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Technical skills</p>
        {skillGroups.map((group, gi) => (
          <div key={group.label} className="space-y-3">
            <p className="font-display text-xs uppercase tracking-wider text-muted-foreground">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.15 + gi * 0.05 + i * 0.02 }}
                  className="px-4 py-2 rounded-full border border-border font-display text-xs sm:text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
