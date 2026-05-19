import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import projects from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="font-display text-4xl font-bold text-foreground">Project not found</h1>
          <Link to="/" className="text-primary hover:underline font-body">
            ← Back home
          </Link>
        </div>
      </div>
    );
  }

  const hasLinks = Boolean(project.liveUrl || project.repoUrl);

  return (
    <div className="min-h-screen bg-background">
      {/* Back nav */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-8 left-8 z-50"
      >
        <motion.div className="flex flex-wrap gap-2">
          <Link
            to="/projects"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-border text-foreground hover:border-primary/40 transition-all font-display text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            All projects
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all font-display text-sm"
          >
            Home
          </Link>
        </motion.div>
      </motion.div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-[50vh] md:h-[60vh] overflow-hidden relative"
      >
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-8 -mt-32 relative z-10 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="space-y-3 mb-6">
            <div className="flex flex-wrap gap-2">
              {project.categories.map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 text-xs font-display font-medium rounded-full border border-primary/30 bg-primary/10 text-primary"
                >
                  {category}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-display font-medium rounded-full bg-secondary text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-4">
            {project.title}
            <span className="text-gradient-coral">.</span>
          </h1>

          <div className="flex items-center gap-6 text-muted-foreground font-body text-sm mb-8">
            <span>{project.role}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>{project.timeline}</span>
          </div>

          {hasLinks && (
            <div className="flex flex-wrap gap-4 mb-12">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-display text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live site
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-foreground font-display text-sm font-medium hover:border-primary/40 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source code
                </a>
              )}
            </div>
          )}

          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-16">{project.longDescription}</p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              Key highlights<span className="text-gradient-coral">.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
                >
                  <span className="font-display text-3xl font-bold text-gradient-coral mr-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-body text-foreground mt-2">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
