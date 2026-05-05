import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/portfolio";

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, longDescription, type, role, highlights, techStack, github } = project;

  return (
    <Card className="h-full border-border/50 bg-card hover:border-primary/30 transition-colors group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="font-mono text-xs text-primary mb-1">{type}</p>
            <h3 className="text-lg font-bold text-foreground truncate">{title}</h3>
            <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
          </div>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors mt-0.5"
            aria-label="GitHub 저장소 바로가기"
          >
            <GitHubIcon />
          </a>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{longDescription}</p>

        {role && (
          <div className="bg-primary/5 border border-primary/10 rounded-lg p-3">
            <p className="text-xs font-medium text-primary mb-1">담당 역할</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{role}</p>
          </div>
        )}

        {highlights.length > 0 && (
          <ul className="space-y-1.5">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5 flex-shrink-0 text-xs">▸</span>
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5 pt-1">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs font-normal bg-secondary/80 text-muted-foreground border-border/50">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
