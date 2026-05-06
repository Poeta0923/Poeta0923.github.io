"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-primary mb-1 tracking-wider">02. Experience</p>
          <h2 className="text-3xl font-bold text-foreground mb-10">경험</h2>

          <div className="relative">
            {/* 타임라인 세로선 */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-border/50 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.projectTitle}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="md:pl-10 relative"
                >
                  {/* 타임라인 점 */}
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-primary -translate-x-[3.5px] hidden md:block" />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.projectTitle}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {exp.organization} · {exp.role}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                      <span className="font-mono text-xs text-muted-foreground/70">
                        {exp.period}
                      </span>
                      <Badge
                        variant="outline"
                        className="text-[10px] border-primary/30 text-primary/70 bg-primary/5"
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {exp.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-primary/70 bg-primary/5 border border-primary/20 rounded px-2 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
