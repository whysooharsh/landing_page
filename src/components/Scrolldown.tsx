

const ScrollDownComponent = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToBottom}
      className="
        relative w-16 h-16
        cursor-pointer 
        transition-all duration-300
        animate-bounce hover:animate-none
        hover:scale-110 active:scale-95
        bg-transparent border-0 outline-none
      "
      aria-label="Scroll down"
    >
      <div className="relative w-12 h-12 mx-auto ">
        <svg 
          viewBox="0 0 607 607" 
          className="w-full h-full filter drop-shadow-lg"
        >
          <g transform="matrix(-1,0,0,-1,303.50799560546875,306.1341857910156)">
            <path 
              strokeLinecap="butt" 
              strokeLinejoin="miter" 
              fillOpacity="0" 
              strokeMiterlimit="10" 
              stroke="white" 
              strokeOpacity="1" 
              strokeWidth="20" 
              d=" M-210.9709930419922,120.15899658203125 C-210.9709930419922,120.15899658203125 -0.00800000037997961,-120.33300018310547 -0.00800000037997961,-120.33300018310547 C-0.00800000037997961,-120.33300018310547 210.9709930419922,120.33300018310547 210.9709930419922,120.33300018310547"
            />
          </g>
        </svg>
      </div>
    </button>
  );
};

export default ScrollDownComponent;