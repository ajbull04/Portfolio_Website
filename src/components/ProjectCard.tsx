import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  compact?: boolean;
}

const ProjectCard = ({ project, index, compact = false }: ProjectCardProps) => (
  <Link to={`/project/${project.slug}`} className="block h-full">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-500 cursor-pointer"
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width={800}
          height={600}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${compact ? "h-48" : "h-56 md:h-64"}`}
        />
      </div>
      <div className={`flex flex-1 flex-col space-y-4 ${compact ? "p-5" : "p-6 md:p-8"}`}>
        <div className="flex items-start justify-between gap-3">
          <h3 className={`font-display font-bold text-foreground group-hover:text-gradient-coral transition-colors ${compact ? "text-lg" : "text-xl md:text-2xl"}`}>
            {project.title}
          </h3>
          <div className="flex shrink-0 gap-3 text-muted-foreground">
            <Github className="w-5 h-5 hover:text-primary transition-colors" />
            <ExternalLink className="w-5 h-5 hover:text-primary transition-colors" />
          </div>
        </div>
        <p className="text-muted-foreground font-body leading-relaxed text-sm md:text-base flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.categories.map((category) => (
            <span key={category} className="px-3 py-1 text-xs font-display font-medium rounded-full border border-primary/30 bg-primary/10 text-primary">
              {category}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {(compact ? project.stack.slice(0, 4) : project.stack).map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-display font-medium rounded-full bg-secondary text-secondary-foreground">
              {tech}
            </span>
          ))}
          {compact && project.stack.length > 4 && (
            <span className="px-3 py-1 text-xs font-display font-medium rounded-full bg-secondary text-muted-foreground">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  </Link>
);

export default ProjectCard;
