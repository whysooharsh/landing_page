import { useMemo } from 'react';

const FloatingOrbs = () => {
  const orbs = useMemo(() => Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDelay: Math.random() * 8,
    animationDuration: Math.random() * 10 + 25,
    opacity: Math.random() * 0.3 + 0.1,
  })), []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full bg-white will-change-transform"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            opacity: orb.opacity,
            animationDelay: `${orb.animationDelay}s`,
            animationDuration: `${orb.animationDuration}s`,
            filter: 'blur(0.3px)',
            boxShadow: `0 0 ${orb.size * 1.5}px rgba(255, 255, 255, 0.15)`,
            animation: `floatOrbs ${orb.animationDuration}s ease-in-out infinite`,
            transform: 'translate3d(0,0,0)', // Hardware acceleration
          }}
        />
      ))}
      
      <style>{`
        @keyframes floatOrbs {
          0%, 100% {
            transform: translate3d(0px, 0px, 0px) scale(1);
          }
          25% {
            transform: translate3d(8px, -12px, 0px) scale(1.05);
          }
          50% {
            transform: translate3d(-6px, -20px, 0px) scale(0.95);
          }
          75% {
            transform: translate3d(4px, -8px, 0px) scale(1.02);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingOrbs;