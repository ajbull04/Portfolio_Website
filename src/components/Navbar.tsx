import { motion } from "framer-motion";

const navItems = ["Projects", "Experience", "About", "Contact"];

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <span className="font-display text-xl font-bold tracking-tight text-foreground">
        JD<span className="text-gradient-coral">.</span>
      </span>
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className="font-display text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            {item}
          </button>
        ))}
      </div>
      <a
        href="mailto:hello@example.com"
        className="bg-gradient-coral px-5 py-2 rounded-full font-display text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
      >
        Let's Talk
      </a>
    </motion.nav>
  );
};

export default Navbar;
