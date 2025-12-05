import { useState, useEffect } from 'react';
import { StatusBar } from './StatusBar';
import { Dock } from './Dock';
import { Window } from './Window';
import { BootScreen } from './BootScreen';
import { ResumeApp } from '../apps/ResumeApp';
import { ProjectsApp } from '../apps/ProjectsApp';
import { ExperienceApp } from '../apps/ExperienceApp';
import { ContactApp } from '../apps/ContactApp';
import { useWindowManager } from '@/hooks/useWindowManager';
import { WindowId } from '@/types/desktop';
import wallpaperLight from '@/assets/wallpaper.jpg';
import wallpaperDark from '@/assets/wallpaper-dark.jpg';

export function Desktop() {
  const [isBooting, setIsBooting] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const {
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    focusWindow,
    updateWindowPosition
  } = useWindowManager();

  // Check system preference on mount
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  // Apply dark mode class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleBootComplete = () => {
    setIsBooting(false);
  };

  const handleDockClick = (id: WindowId) => {
    if (windows[id].isOpen) {
      if (windows[id].isMinimized) {
        focusWindow(id);
      } else {
        focusWindow(id);
      }
    } else {
      openWindow(id);
    }
  };

  const openWindowIds = Object.values(windows)
    .filter(w => w.isOpen)
    .map(w => w.id);

  const minimizedWindowIds = Object.values(windows)
    .filter(w => w.isMinimized)
    .map(w => w.id);

  const windowTitles: Record<WindowId, string> = {
    resume: 'Resume — Pallav Rai',
    projects: 'Projects — Portfolio',
    experience: 'Experience — Work History',
    contact: 'Contact — Get in Touch'
  };

  if (isBooting) {
    return <BootScreen onComplete={handleBootComplete} />;
  }

  return (
    <div 
      className="fixed inset-0 overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-500"
      style={{ 
        backgroundImage: `url(${isDarkMode ? wallpaperDark : wallpaperLight})` 
      }}
    >
      {/* Status Bar */}
      <StatusBar 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
      />

      {/* Desktop Area */}
      <main className="pt-7 pb-24 h-full">
        {/* Desktop Icons */}
        <div className="p-4 grid grid-cols-1 gap-4 w-fit">
          {/* Add desktop icons if needed */}
        </div>

        {/* Windows */}
        {Object.values(windows).map((windowState) => (
          <Window
            key={windowState.id}
            id={windowState.id}
            title={windowTitles[windowState.id]}
            isOpen={windowState.isOpen}
            isMinimized={windowState.isMinimized}
            position={windowState.position}
            size={windowState.size}
            zIndex={windowState.zIndex}
            onClose={() => closeWindow(windowState.id)}
            onMinimize={() => minimizeWindow(windowState.id)}
            onFocus={() => focusWindow(windowState.id)}
            onPositionChange={(pos) => updateWindowPosition(windowState.id, pos)}
          >
            {windowState.id === 'resume' && <ResumeApp />}
            {windowState.id === 'projects' && <ProjectsApp />}
            {windowState.id === 'experience' && <ExperienceApp />}
            {windowState.id === 'contact' && <ContactApp />}
          </Window>
        ))}
      </main>

      {/* Dock */}
      <Dock
        openWindows={openWindowIds}
        minimizedWindows={minimizedWindowIds}
        onOpenWindow={handleDockClick}
      />
    </div>
  );
}
