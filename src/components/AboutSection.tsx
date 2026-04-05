import { motion } from "framer-motion";

const skills = [
  "React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS",
  "Figma", "PostgreSQL", "GraphQL", "Docker", "AWS",
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
        <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Who I Am</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
          About<span className="text-gradient-coral">.</span>
        </h2>
        <p className="text-muted-foreground font-body leading-relaxed text-lg">
          I'm a developer and designer obsessed with the intersection of technology and aesthetics. I believe every pixel matters, every interaction tells a story, and the best products feel like they were made just for you.
        </p>
        <p className="text-muted-foreground font-body leading-relaxed">
          When I'm not pushing pixels, you'll find me exploring new coffee shops, tinkering with side projects, or getting lost in a good sci-fi novel. I'm always open to new collaborations and interesting challenges.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="space-y-6"
      >
        <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Tech Stack</p>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
              className="px-5 py-2.5 rounded-full border border-border font-display text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors duration-300 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
