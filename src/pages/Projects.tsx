import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import {
  PROJECT_CATEGORIES,
  filterProjectsByCategories,
  type ProjectCategory,
} from "@/data/projects";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [selected, setSelected] = useState<ProjectCategory[]>([]);

  const filtered = useMemo(() => filterProjectsByCategories(selected), [selected]);

  const toggleCategory = (category: ProjectCategory) => {
    setSelected((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    );
  };

  const clearFilters = () => setSelected([]);

  return (
    <motion.div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-8 pt-32 pb-32">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-display text-sm mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-3">Portfolio</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            All Projects<span className="text-gradient-coral">.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 flex flex-wrap gap-3"
        >
          <button
            type="button"
            onClick={clearFilters}
            className={cn(
              "px-4 py-2 rounded-full font-display text-sm font-medium border transition-colors duration-300",
              selected.length === 0
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
            )}
          >
            All
          </button>
          {PROJECT_CATEGORIES.map((category) => {
            const active = selected.includes(category);
            return (
              <button
                key={category}
                type="button"
                onClick={() => toggleCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full font-display text-sm font-medium border transition-colors duration-300",
                  active
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
                )}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card/40 px-8 py-16 text-center">
            <p className="font-body text-muted-foreground mb-6">No projects match the selected filters.</p>
            <button
              type="button"
              onClick={clearFilters}
              className="px-6 py-3 border border-border hover:border-primary/50 font-display text-sm font-medium rounded-sm transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        )}
      </main>
    </motion.div>
  );
};

export default Projects;
