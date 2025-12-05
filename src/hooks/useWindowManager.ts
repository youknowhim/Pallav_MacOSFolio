import { useState, useCallback } from 'react';
import { WindowId, WindowState } from '@/types/desktop';

const defaultWindowConfigs: Record<WindowId, Omit<WindowState, 'isOpen' | 'isMinimized' | 'zIndex'>> = {
  resume: {
    id: 'resume',
    position: { x: 80, y: 60 },
    size: { width: 800, height: 600 }
  },
  projects: {
    id: 'projects',
    position: { x: 150, y: 80 },
    size: { width: 900, height: 650 }
  },
  experience: {
    id: 'experience',
    position: { x: 120, y: 100 },
    size: { width: 750, height: 550 }
  },
  contact: {
    id: 'contact',
    position: { x: 200, y: 120 },
    size: { width: 500, height: 450 }
  }
};

export function useWindowManager() {
  const [windows, setWindows] = useState<Record<WindowId, WindowState>>({
    resume: { ...defaultWindowConfigs.resume, isOpen: false, isMinimized: false, zIndex: 1 },
    projects: { ...defaultWindowConfigs.projects, isOpen: false, isMinimized: false, zIndex: 1 },
    experience: { ...defaultWindowConfigs.experience, isOpen: false, isMinimized: false, zIndex: 1 },
    contact: { ...defaultWindowConfigs.contact, isOpen: false, isMinimized: false, zIndex: 1 }
  });

  const [highestZIndex, setHighestZIndex] = useState(1);

  const openWindow = useCallback((id: WindowId) => {
    setHighestZIndex(prev => prev + 1);
    setWindows(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: true,
        isMinimized: false,
        zIndex: highestZIndex + 1
      }
    }));
  }, [highestZIndex]);

  const closeWindow = useCallback((id: WindowId) => {
    setWindows(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: false,
        isMinimized: false
      }
    }));
  }, []);

  const minimizeWindow = useCallback((id: WindowId) => {
    setWindows(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMinimized: true
      }
    }));
  }, []);

  const focusWindow = useCallback((id: WindowId) => {
    setHighestZIndex(prev => prev + 1);
    setWindows(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMinimized: false,
        zIndex: highestZIndex + 1
      }
    }));
  }, [highestZIndex]);

  const updateWindowPosition = useCallback((id: WindowId, position: { x: number; y: number }) => {
    setWindows(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        position
      }
    }));
  }, []);

  const getOpenWindows = useCallback(() => {
    return Object.values(windows).filter(w => w.isOpen);
  }, [windows]);

  return {
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    focusWindow,
    updateWindowPosition,
    getOpenWindows
  };
}
