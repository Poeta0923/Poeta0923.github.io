"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/portfolio";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-primary mb-1 tracking-wider">04. Projects</p>
          <h2 className="text-3xl font-bold text-foreground mb-10">프로젝트</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={project.featured ? "md:col-span-2" : ""}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
