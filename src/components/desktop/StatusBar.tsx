import { useState, useEffect } from 'react';
import { Wifi, Battery, Sun, Moon, Search } from 'lucide-react';

interface StatusBarProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export function StatusBar({ isDarkMode, onToggleDarkMode }: StatusBarProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-7 glass-panel z-50 flex items-center justify-between px-4 text-sm">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <span className="font-semibold tracking-tight">PallavOS</span>
        <nav className="hidden sm:flex items-center gap-4 text-foreground/80">
          <button className="hover:text-foreground transition-colors">File</button>
          <button className="hover:text-foreground transition-colors">Edit</button>
          <button className="hover:text-foreground transition-colors">View</button>
          <button className="hover:text-foreground transition-colors">Help</button>
        </nav>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleDarkMode}
          className="p-1 rounded hover:bg-foreground/10 transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </button>
        <Search className="w-4 h-4 text-foreground/60 hidden sm:block" />
        <Wifi className="w-4 h-4 text-foreground/80" />
        <div className="flex items-center gap-1">
          <Battery className="w-4 h-4 text-foreground/80" />
          <span className="text-xs text-foreground/60">100%</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-foreground/80">
          <span>{formatDate(currentTime)}</span>
          <span>{formatTime(currentTime)}</span>
        </div>
        <span className="sm:hidden text-foreground/80">{formatTime(currentTime)}</span>
      </div>
    </header>
  );
}
