import { Building2, MapPin, Calendar, Trophy, ChevronRight } from 'lucide-react';
import { experiences } from '@/data/portfolioData';

export function ExperienceApp() {
  return (
    <div className="h-full overflow-y-auto scrollbar-macos p-6">
      <div className="animate-fade-in">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Building2 className="w-5 h-5" />
          Work Experience
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-14 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Timeline Dot */}
                <div className="absolute left-4 top-4 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-primary/60 border-4 border-background" />

                <div className="glass-panel rounded-2xl p-5 space-y-4">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="glass-panel rounded-xl p-4 bg-primary/5">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State for more experiences */}
        <div className="mt-8 text-center text-muted-foreground text-sm">
          <p>More experiences coming soon...</p>
        </div>
      </div>
    </div>
  );
}
