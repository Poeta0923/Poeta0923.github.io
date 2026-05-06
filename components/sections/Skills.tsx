"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { skillCategories } from "@/data/portfolio";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiReactquery,
  SiNestjs,
  SiExpress,
  SiSocketdotio,
  SiSwagger,
  SiJsonwebtokens,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiPrisma,
  SiDocker,
  SiGithubactions,
  SiEthereum,
  SiIpfs,
  SiPostman,
  SiSentry,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";

const skillIconMap: Record<string, { icon: IconType; color: string }> = {
  "HTML5":           { icon: SiHtml5,          color: "#E34F26" },
  "CSS3":            { icon: SiCss,            color: "#1572B6" },
  "JavaScript":      { icon: SiJavascript,     color: "#F7DF1E" },
  "TypeScript":      { icon: SiTypescript,     color: "#3178C6" },
  "Next.js":         { icon: SiNextdotjs,      color: "#ffffff" },
  "Tailwind CSS":    { icon: SiTailwindcss,    color: "#06B6D4" },
  "TanStack Query":  { icon: SiReactquery,     color: "#FF4154" },
  "NestJS":          { icon: SiNestjs,         color: "#E0234E" },
  "Express.js":      { icon: SiExpress,        color: "#aaaaaa" },
  "Socket.io":       { icon: SiSocketdotio,    color: "#aaaaaa" },
  "Swagger":         { icon: SiSwagger,        color: "#85EA2D" },
  "JWT":             { icon: SiJsonwebtokens,  color: "#aaaaaa" },
  "PostgreSQL":      { icon: SiPostgresql,     color: "#699ECA" },
  "MySQL":           { icon: SiMysql,          color: "#5B8FBD" },
  "Redis":           { icon: SiRedis,          color: "#FF6B6B" },
  "Prisma":          { icon: SiPrisma,         color: "#a5b4fc" },
  "AWS":             { icon: FaAws,            color: "#FF9900" },
  "Amazon S3":       { icon: FaAws,            color: "#FF9900" },
  "Amazon EC2":      { icon: FaAws,            color: "#FF9900" },
  "Amazon ECS":      { icon: FaAws,            color: "#FF9900" },
  "Amazon RDS":      { icon: FaAws,            color: "#527FFF" },
  "Docker":          { icon: SiDocker,         color: "#2496ED" },
  "GitHub Actions":  { icon: SiGithubactions,  color: "#2088FF" },
  "Ethereum":        { icon: SiEthereum,       color: "#8C8C8C" },
  "IPFS":            { icon: SiIpfs,           color: "#65C2CB" },
  "Postman":         { icon: SiPostman,        color: "#FF6C37" },
  "Sentry":          { icon: SiSentry,         color: "#9C7FD4" },
  "Git":             { icon: SiGit,            color: "#F05032" },
  "GitHub":          { icon: SiGithub,         color: "#ffffff" },
};

function SkillItem({ name }: { name: string }) {
  const info = skillIconMap[name];
  const Icon = info?.icon;

  return (
    <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-background/60 border border-border/40 hover:border-primary/20 transition-colors group">
      {Icon ? (
        <Icon size={18} color={info.color} className="flex-shrink-0" />
      ) : (
        <span className="w-[18px] h-[18px] rounded-sm bg-primary/20 flex-shrink-0" />
      )}
      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6 bg-card/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-primary mb-1 tracking-wider">03. Skills</p>
          <h2 className="text-3xl font-bold text-foreground mb-10">기술 스택</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/20 transition-colors">
                  <CardHeader className="pb-2 pt-5 px-5">
                    <h3 className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                      {category.name}
                    </h3>
                  </CardHeader>
                  <CardContent className="px-5 pb-5">
                    <div className="grid grid-cols-2 gap-2">
                      {category.skills.map((skill) => (
                        <SkillItem key={skill} name={skill} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
