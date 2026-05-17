import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const lowLevel = [
  { name: "Embedded C/C++", tag: "RTOS" },
  { name: "ARM Architecture", tag: "I2C/SPI" },
  { name: "Kernel Modules", tag: "Linux" },
];

const highLevel = [
  { name: "Distributed Systems", tag: "Go" },
  { name: "Cloud Native", tag: "AWS" },
  { name: "Modern Web", tag: "React" },
];

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="relative z-10 container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        {/* Main */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8 space-y-8"
        >
          <div className="inline-flex items-center gap-3 px-3 py-1 border border-primary/30 bg-primary/5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="font-body text-[10px] uppercase tracking-widest font-medium text-primary">
              System Status: Operational
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter text-foreground">
            Building systems from{" "}
            <span className="text-gradient-coral">firmware</span> to {" "}
            <span className="text-gradient-coral">full-stack</span> applications.
          
          </h1>

          {/* <p className="max-w-xl font-body text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Bridging the gap between hardware constraints and scalable cloud
            architecture. Engineering high-performance solutions across the
            entire technical vertical.
          </p> */}
           <p className="max-w-xl font-body text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
           Software engineer who works across the stack: from embedded and systems 
           code to full-stack and 
           distributed backends in production.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => scrollTo("projects")}
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-sm font-display font-semibold flex items-center gap-2 hover:bg-coral-glow transition-colors duration-300"
            >
              View Technical Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("experience")}
              className="px-8 py-4 border border-border hover:border-primary/50 text-foreground font-display font-medium rounded-sm transition-colors duration-300"
            >
              Read Resume
            </button>
          </div>
        </motion.div>

        {/* Side metadata */}
        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-4 border-l border-border pl-8 space-y-12 hidden lg:block"
        >
          <div>
            <span className="block font-body text-[10px] uppercase tracking-[0.2em] text-primary mb-4">
              Low-Level Expertise
            </span>
            <ul className="space-y-2 text-sm text-muted-foreground font-mono">
              {lowLevel.map((item) => (
                <li key={item.name} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="text-muted-foreground/60">{item.tag}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="block font-body text-[10px] uppercase tracking-[0.2em] text-primary mb-4">
              High-Level Expertise
            </span>
            <ul className="space-y-2 text-sm text-muted-foreground font-mono">
              {highLevel.map((item) => (
                <li key={item.name} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="text-muted-foreground/60">{item.tag}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 border border-border bg-card/40">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-mono text-muted-foreground uppercase">
                Current focus
              </span>
              <span className="text-[10px] font-mono text-primary">02 // 2026</span>
            </div>
            <p className="text-sm text-foreground/80 leading-snug font-body">
              Developing low-latency telemetry systems for industrial IoT
              applications.
            </p>
          </div>
        </motion.aside>
      </div>

      {/* Background numerals */}
      <div className="absolute bottom-0 right-0 p-8 opacity-[0.04] pointer-events-none select-none overflow-hidden">
        <span className="font-display font-bold text-[18vw] leading-none block text-foreground">
          01001
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
