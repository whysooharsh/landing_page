import WebGLBackground from "./components/BgComponent";
import ScrollDownComponent from "./components/Scrolldown";
import './index.css';

export default function Home() {
  return (
    <div className="font-inter bg-black">

      <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center px-4">

        <div className="absolute inset-0 w-full h-full">
          <div
            className="rotate-47 absolute origin-center blur-[1px]"
            style={{
              width: '141.42%',
              height: '150%',
              left: '-20%',
              top: '25%',
            }}
          >
            <WebGLBackground />
          </div>

          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-black z-20 pointer-events-none" />
        </div>

        <div className="relative z-30 flex-1 flex flex-col items-center justify-center gap-10 pb-40">
          <h1 className="text-4xl bg-gradient-to-b from-white to-gray-400 bg-clip-text sm:text-5xl md:text-7xl font-semibold uppercase text-transparent">
            Not just another app
          </h1>

          <h2
            className="text-xl md:text-3xl font-light uppercase 
              bg-gradient-to-b from-white via-gray-100 to-gray-700 
              bg-clip-text text-transparent"
            style={{ textShadow: '1px 1px 8px rgba(255, 255, 255, 0.2)' }}
          >
            Your second brain for self-growth
          </h2>
        </div>


      </section>
      <div className="relative z-30 pb-8 text-md text-white flex flex-col items-center">
        <span>Scroll Down</span>
        <ScrollDownComponent />
      </div>
      <section className="bg-black min-h-screen p-8 text-white">
        <h2>Some text here</h2>
      </section>

      <section className="bg-zinc-900 min-h-screen p-8 text-white">
        <h2>Another Random text</h2>
      </section>

    </div>
  );
}