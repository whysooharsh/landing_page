const FloatingOrbs = () => {
  const orbs = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDelay: Math.random() * 20,
    animationDuration: Math.random() * 10 + 15,
    opacity: Math.random() * 0.6 + 0.2,
  }));

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            opacity: orb.opacity,
            animationDelay: `${orb.animationDelay}s`,
            animationDuration: `${orb.animationDuration}s`,
            filter: 'blur(0.5px)',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
            animation: `floatOrbs ${orb.animationDuration}s linear infinite`,
          }}
        />
      ))}
      
      <style>{`
        @keyframes floatOrbs {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-15px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingOrbs;