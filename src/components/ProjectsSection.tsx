import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const ProjectsSection = () => {
  const featured = getFeaturedProjects();

  return (
    <section id="projects" className="py-32 px-8">
      <motion.div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <motion.div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-3">Selected Work</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
              Featured Projects<span className="text-gradient-coral">.</span>
            </h2>
          </motion.div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 self-start px-6 py-3 border border-border hover:border-primary/50 text-foreground font-display text-sm font-medium rounded-sm transition-colors duration-300"
          >
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} compact />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
