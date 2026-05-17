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
          I'm Aaron Bullock, a Duke student pursuing an MEng in Electrical and Computer Engineering with a
          concentration in Software Engineering, following a BSE in Electrical and Computer Engineering and Computer
          Science. I'm especially passionate about building across the stack, from low-level systems work like firmware,
          drivers, and systems programming to designing scalable distributed systems and core infrastructure. I enjoy
          working on the foundational layers that power reliable services, efficient data flow, and high-performance
          platforms at scale.
        </p>
        <p className="text-muted-foreground font-body leading-relaxed">
          Outside of work, I'm drawn to competitive environments, sports, strategy games, anything with clear goals and
          measurable progress. Basketball is my favorite; otherwise I'm puzzling or tinkering on a side project. I also
          love trying new hobbies, games, or something completely unfamiliar.
        </p>
        <div className="pt-2">
          <div className="rounded-2xl border border-border bg-card/40 px-5 py-4">
            <p className="font-display text-sm font-semibold text-foreground">What you can count on</p>
            <p className="text-muted-foreground font-body leading-relaxed mt-1">
              I'm passionate about problem-solving and tend to fall in love with the problem, and the solution. I won't
              quit when it gets hard; I keep pushing until we've found the most optimal answer we can ship.
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
        {/* <div className="rounded-2xl border border-border bg-card/40 px-5 py-4">
          <p className="font-display text-sm font-semibold text-foreground">What I'm optimizing for</p>
          <p className="text-muted-foreground font-body leading-relaxed mt-1">
            Building things that feel fast and reliable: solid abstractions, performance wins that matter, and tools
            that make the next engineer's day easier.
          </p>
        </div> */}
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
