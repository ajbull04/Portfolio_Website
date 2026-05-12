import { motion } from "framer-motion";
import heroImg from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover opacity-30" width={1280} height={960} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — Text */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Aaron Bullock · Software Engineer · Passionate Builder
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-foreground max-w-4xl">
              Building systems from <span className="text-gradient-coral">firmware</span> to <span className="text-gradient-coral">full-stack</span> applications.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-lg text-muted-foreground max-w-lg leading-relaxed font-body"
          >
            Software engineering student with internship experience at Persistent Systems and the FAA—from mobile and web
            backends to firmware, BLE, and automation. I’m happiest when I’m shipping, measuring, and tightening the
            loop—clean APIs, fast queries, solid tests, and tooling that saves people time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-coral px-8 py-3.5 rounded-full font-display text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              View projects
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-border px-8 py-3.5 rounded-full font-display text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              Get in touch
            </button>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="flex flex-wrap gap-2 text-xs sm:text-sm text-muted-foreground font-body"
          >
            <span className="px-3 py-1 rounded-full border border-border bg-card/40">Full-stack</span>
            <span className="px-3 py-1 rounded-full border border-border bg-card/40">Systems</span>
            <span className="px-3 py-1 rounded-full border border-border bg-card/40">Embedded</span>
            <span className="px-3 py-1 rounded-full border border-border bg-card/40">Databases</span>
            <span className="px-3 py-1 rounded-full border border-border bg-card/40">Automation</span>
          </motion.div> */}
        </div>

        {/* Right — Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:grid grid-cols-2 gap-6"
        >
          {[
            { value: "3.7", label: "GPA at Duke" },
            { value: "6K+", label: "Users on Trybl platform" },
            { value: "500+", label: "Students supported as TA" },
            { value: "2027", label: "Expected graduation" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
              className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors duration-500"
            >
              <p className="font-display text-4xl font-bold text-gradient-coral">{stat.value}</p>
              <p className="font-body text-sm text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
