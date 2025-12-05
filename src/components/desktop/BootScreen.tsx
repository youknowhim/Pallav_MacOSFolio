import { useEffect, useState } from 'react';

interface BootScreenProps {
  onComplete: () => void;
}

export function BootScreen({ onComplete }: BootScreenProps) {
  const [progress, setProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const welcomeTimeout = setTimeout(() => {
        setShowWelcome(true);
      }, 200);

      const fadeTimeout = setTimeout(() => {
        setFadeOut(true);
      }, 3500);

      const completeTimeout = setTimeout(() => {
        onComplete();
      }, 4200);

      return () => {
        clearTimeout(welcomeTimeout);
        clearTimeout(fadeTimeout);
        clearTimeout(completeTimeout);
      };
    }
  }, [progress, onComplete]);

  return (
    <div 
      className={`fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 flex flex-col items-center justify-center z-[100] transition-opacity duration-700 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {!showWelcome ? (
          <div className="animate-boot-fade-in flex flex-col items-center">
            {/* Logo Animation */}
            <div className="relative mb-12">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl flex items-center justify-center border border-white/20 shadow-2xl">
                <span className="text-4xl font-bold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">P</span>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-[32px] blur-2xl -z-10 animate-pulse" />
            </div>

            {/* Progress Bar */}
            <div className="w-52 h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <div 
                className="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-4 text-sm text-white/40 font-light">Starting up...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center px-6">
            {/* Welcome Text Animation */}
            <div className="overflow-hidden">
              <p 
                className="text-sm sm:text-base uppercase tracking-[0.3em] text-white/50 font-light mb-4 animate-slide-up"
                style={{ animationDelay: '0ms' }}
              >
                Welcome to
              </p>
            </div>
            
            <div className="overflow-hidden">
              <h1 
                className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-slide-up"
                style={{ animationDelay: '150ms' }}
              >
                Pallav's
              </h1>
            </div>
            
            <div className="overflow-hidden">
              <h2 
                className="text-5xl sm:text-7xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-slide-up mt-2"
                style={{ animationDelay: '300ms' }}
              >
                macFolio
              </h2>
            </div>

            {/* Decorative Line */}
            <div 
              className="mt-8 h-px w-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-expand"
              style={{ animationDelay: '500ms' }}
            />

            {/* Tagline */}
            <div className="overflow-hidden mt-6">
              <p 
                className="text-sm sm:text-base text-white/40 font-light tracking-wide animate-slide-up"
                style={{ animationDelay: '700ms' }}
              >
                Software Developer • Cloud Enthusiast • Problem Solver
              </p>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-white/20 animate-float-particle"
                  style={{
                    left: `${20 + i * 12}%`,
                    top: `${30 + (i % 3) * 20}%`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
