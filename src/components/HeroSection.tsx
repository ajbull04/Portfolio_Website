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
              Innovative Software Engineer
            </p>
            <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight text-foreground">
              I build
              <br />
              <span className="text-gradient-coral">digital</span>
              <br />
              experiences
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-lg text-muted-foreground max-w-md leading-relaxed font-body"
          >
            Crafting bold interfaces and meaningful interactions that leave a lasting impression. Based anywhere the WiFi works.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex items-center gap-6"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-coral px-8 py-3.5 rounded-full font-display text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              View Work
            </button>
            <button
              onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-border px-8 py-3.5 rounded-full font-display text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              My Journey
            </button>
          </motion.div>
        </div>

        {/* Right — Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:grid grid-cols-2 gap-6"
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "30+", label: "Projects Shipped" },
            { value: "15+", label: "Happy Clients" },
            { value: "∞", label: "Cups of Coffee" },
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
