import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import projects from "@/data/projects";
import type { Project } from "@/data/projects";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <Link to={`/project/${project.slug}`}>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-500 cursor-pointer ${
        project.featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width={800}
          height={600}
          className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-6 md:p-8 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-gradient-coral transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-3 text-muted-foreground">
            <Github className="w-5 h-5 hover:text-primary transition-colors" />
            <ExternalLink className="w-5 h-5 hover:text-primary transition-colors" />
          </div>
        </div>
        <p className="text-muted-foreground font-body leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-display font-medium rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </Link>
);

const ProjectsSection = () => (
  <section id="projects" className="py-32 px-8">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-3">Selected Work</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
          Projects<span className="text-gradient-coral">.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
