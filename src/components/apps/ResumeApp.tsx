import { useState } from 'react';
import { User, GraduationCap, Code2, Award, Trophy, ChevronRight, Folder, FileText } from 'lucide-react';
import { resumeData } from '@/data/portfolioData';
import { cn } from '@/lib/utils';

type Section = 'about' | 'education' | 'skills' | 'certifications' | 'achievements';

const sidebarItems: { id: Section; icon: typeof User; label: string }[] = [
  { id: 'about', icon: User, label: 'About Me' },
  { id: 'education', icon: GraduationCap, label: 'Education' },
  { id: 'skills', icon: Code2, label: 'Skills' },
  { id: 'certifications', icon: Award, label: 'Certifications' },
  { id: 'achievements', icon: Trophy, label: 'Achievements' },
];

export function ResumeApp() {
  const [activeSection, setActiveSection] = useState<Section>('about');

  return (
    <div className="h-full flex">
      {/* Sidebar */}
      <aside className="w-48 sm:w-56 bg-muted/30 border-r border-border/50 p-2 overflow-y-auto scrollbar-macos">
        <div className="space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
                  'hover:bg-accent/50',
                  activeSection === item.id && 'bg-accent text-accent-foreground'
                )}
              >
                <Icon className="w-4 h-4" />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto scrollbar-macos p-6">
        {activeSection === 'about' && (
          <div className="animate-fade-in space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                PR
              </div>
              <div>
                <h1 className="text-2xl font-semibold">{resumeData.name}</h1>
                <p className="text-muted-foreground">Software Developer</p>
              </div>
            </div>
            
            <div className="space-y-4 text-sm">
              <div className="glass-panel rounded-xl p-4 space-y-3">
                <h3 className="font-medium flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Contact Information
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>📧 {resumeData.email}</p>
                  <p>📱 {resumeData.phone}</p>
                </div>
              </div>
              
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <p className="leading-relaxed text-foreground/80">
                  Passionate Computer Science student at VIT Bhopal with hands-on experience in full-stack development, 
                  machine learning, and building impactful applications. Awarded Best Intern at FusionStak LLC and 
                  recognized for entrepreneurial ventures with fintech investor funding.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'education' && (
          <div className="animate-fade-in space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Education
            </h2>
            <div className="space-y-4">
              {resumeData.education.map((edu) => (
                <div key={edu.id} className="glass-panel rounded-xl p-4 space-y-2">
                  <div className="flex items-start gap-3">
                    <Folder className="w-5 h-5 text-primary mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-medium">{edu.institution}</h3>
                      <p className="text-sm text-muted-foreground">{edu.degree}</p>
                      <p className="text-xs text-muted-foreground">{edu.location} • {edu.duration}</p>
                      <ul className="mt-2 space-y-1">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-foreground/80 flex items-center gap-2">
                            <ChevronRight className="w-3 h-3 text-primary" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'skills' && (
          <div className="animate-fade-in space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              Technical Skills
            </h2>
            
            <div className="space-y-4">
              <div className="glass-panel rounded-xl p-4">
                <h3 className="font-medium mb-3">Programming & Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.technical.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="glass-panel rounded-xl p-4">
                <h3 className="font-medium mb-3">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'certifications' && (
          <div className="animate-fade-in space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Award className="w-5 h-5" />
              Certifications
            </h2>
            <div className="space-y-3">
              {resumeData.certifications.map((cert, i) => (
                <div key={i} className="glass-panel rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'achievements' && (
          <div className="animate-fade-in space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Achievements
            </h2>
            <div className="space-y-3">
              {resumeData.achievements.map((achievement, i) => (
                <div key={i} className="glass-panel rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
