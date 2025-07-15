import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="relative z-10 flex flex-col min-h-screen pl-20">
        <div className="flex-1 flex flex-col justify-center md:px-16 lg:px-20 max-w-4xl">
          <div className="mb-6">
            <p className="text-gray-400 text-sm md:text-base font-light tracking-wider uppercase">
              DIVE INTO THE FUTURE
            </p>
          </div>
          <div className="mb-10">
            <h1 className="text-3xl md:text-xl lg:text-5xl font-light leading-tight mb-4">
              START YOUR JOURNEY
            </h1>
            <h2 className="text-6xl md:text-8xl lg:text-[240px] font-medium bg-gradient-to-r from-gray-400 via-gray-500 to-gray-700 bg-clip-text text-transparent leading-none -ml-2 lg:-ml-4">
              NOW!
            </h2>
          </div>
          <div className="mb-12 max-w-md">
            <p className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent text-base md:text-lg leading-6">
              Start building your Second Brain today and join the pioneers shaping the future of knowledge and productivity.
            </p>
          </div>
          <div className="mb-12">
            <button className="group relative bg-transparent border border-gray-600 hover:border-gray-500 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-gray-600/10">
              <span className="text-base md:text-lg font-medium">Get Started</span>
              <div className="absolute inset-0 border border-gray-500 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 text-right">
          <p className="text-gray-500 text-sm mb-1">Created by:</p>
          <a className="text-gray-400 text-base font-medium" href='https://www.github.com/whysooharsh'>harsh</a>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-[1152px] h-[1152px] overflow-hidden pointer-events-none">
        <div className="absolute -bottom-[576px] -right-[576px] w-[1152px] h-[1152px] rounded-full border-2 border-gray-700/30 bg-gradient-to-br from-gray-900/10 via-gray-900/10 to-transparent blur-sm shadow-[0_0_200px_80px_rgba(169,169,169,0.3)]"></div>
      </div>
    </div>
  );
};
export default Footer;