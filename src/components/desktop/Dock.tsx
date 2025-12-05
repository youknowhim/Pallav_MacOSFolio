import { FileText, FolderKanban, Briefcase, Mail, User } from 'lucide-react';
import { WindowId } from '@/types/desktop';
import { cn } from '@/lib/utils';

interface DockProps {
  openWindows: WindowId[];
  onOpenWindow: (id: WindowId) => void;
  minimizedWindows: WindowId[];
}

const dockItems: { id: WindowId; icon: typeof FileText; label: string; color: string }[] = [
  { id: 'resume', icon: FileText, label: 'Resume', color: 'from-blue-400 to-blue-600' },
  { id: 'projects', icon: FolderKanban, label: 'Projects', color: 'from-purple-400 to-purple-600' },
  { id: 'experience', icon: Briefcase, label: 'Experience', color: 'from-orange-400 to-orange-600' },
  { id: 'contact', icon: Mail, label: 'Contact', color: 'from-green-400 to-green-600' },
];

export function Dock({ openWindows, onOpenWindow, minimizedWindows }: DockProps) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
      <div className="glass-panel-strong rounded-2xl px-3 py-2 shadow-dock dark:shadow-dock-dark">
        <div className="flex items-end gap-2">
          {dockItems.map((item, index) => {
            const isOpen = openWindows.includes(item.id);
            const isMinimized = minimizedWindows.includes(item.id);
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => onOpenWindow(item.id)}
                className={cn(
                  'dock-item group relative',
                  isOpen && 'active',
                  isMinimized && 'animate-dock-bounce'
                )}
                style={{ animationDelay: `${index * 50}ms` }}
                aria-label={`Open ${item.label}`}
              >
                <div className={cn(
                  'w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br flex items-center justify-center',
                  'shadow-lg transition-all duration-200',
                  'group-hover:shadow-xl',
                  item.color
                )}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.5} />
                </div>
                
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="glass-panel px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap">
                    {item.label}
                  </div>
                </div>

                {/* Active Indicator */}
                {isOpen && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-foreground/60 rounded-full" />
                )}
              </button>
            );
          })}

          {/* Separator */}
          <div className="w-px h-10 bg-foreground/10 mx-1 hidden sm:block" />

          {/* Profile Icon */}
          <button
            className="dock-item group relative hidden sm:block"
            aria-label="Profile"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center shadow-lg">
              <User className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.5} />
            </div>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="glass-panel px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap">
                Pallav Rai
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
