import { useState, useRef, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface WindowProps {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  onPositionChange: (position: { x: number; y: number }) => void;
  children: ReactNode;
}

export function Window({
  id,
  title,
  isOpen,
  isMinimized,
  position,
  size,
  zIndex,
  onClose,
  onMinimize,
  onFocus,
  onPositionChange,
  children,
}: WindowProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [miniAnim, setMiniAnim] = useState(false);
  const [closeAnim, setCloseAnim] = useState(false);

  const handleMouseDown = (e: any) => {
    if (e.target.closest(".window-controls")) return;

    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    onFocus();
  };

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!isDragging) return;

      onPositionChange({
        x: Math.max(0, Math.min(window.innerWidth - 200, e.clientX - dragOffset.x)),
        y: Math.max(30, Math.min(window.innerHeight - 100, e.clientY - dragOffset.y)),
      });
    };

    const up = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseup", up);
    }

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, [isDragging, dragOffset]);

  const handleMinimize = () => {
    setMiniAnim(true);
    setTimeout(() => {
      setMiniAnim(false);
      onMinimize();
    }, 220);
  };

  useEffect(() => {
    if (!isMinimized) {
      setMiniAnim(false);
    }
  }, [isMinimized]);

  const handleClose = () => {
    setCloseAnim(true);
    setTimeout(() => {
      onClose();
      setCloseAnim(false);
    }, 180);
  };

  if (!isOpen) return null;

  return (
    <div
      onMouseDown={onFocus}
      className={cn(
        "fixed rounded-xl glass-panel-strong shadow-window overflow-hidden flex flex-col transition-all duration-200",

        // Position & size
        !isMinimized && "opacity-100 scale-100 pointer-events-auto",
        isMinimized && "opacity-0 scale-90 pointer-events-none",

        // Animations
        miniAnim && "animate-window-minimize",
        closeAnim && "animate-window-close",
      )}
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex,
      }}
    >
      {/* Title Bar */}
      <div
        className="h-12 bg-window-header/80 border-b border-border/40 flex items-center px-4 gap-3 cursor-grab"
        onMouseDown={handleMouseDown}
      >
        <div className="window-controls flex items-center gap-2">
          <button
            onClick={handleClose}
            className="window-button bg-window-close"
          />
          <button
            onClick={handleMinimize}
            className="window-button bg-window-minimize"
          />
          <button className="window-button bg-window-maximize" />
        </div>

        <span className="flex-1 text-center text-sm font-medium text-foreground/70">
          {title}
        </span>

        <div className="w-10" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden bg-card/95">{children}</div>
    </div>
  );
}