import WebGLBackground from "./components/BgComponent";
import FloatingOrbs from "./components/Floatingorbs";
import Footer from "./components/Footer";
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
            <FloatingOrbs/>
            <WebGLBackground />
          </div>

          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black z-20 pointer-events-none" />
        </div>

        <div className="relative z-30 flex-1 flex flex-col items-center justify-center gap-10 pb-48">
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

        <div className="relative z-30 pb-8 text-md text-white flex flex-col items-center">
          <span>Scroll Down</span>
          <ScrollDownComponent />
        </div>

      </section>

      <section className="bg-black min-h-screen p-8 flex flex-col items-center text-white text-center">
        <h2 className="text-4xl pb-4 pt-20">What is Second Brain?</h2>
        <p className="max-w-3xl text-lg leading-relaxed text-center">
          <span className="inline-block bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            A Second Brain is a trusted external system for organizing and storing your thoughts, ideas, tasks, and knowledge, so you can think more clearly,
            create more effectively, and focus on what truly matters.
            It acts as an extension of your mind, helping you capture insights,
            reflect with intention, and make better decisions without mental overload.
          </span>
        </p>

        <div className="flex items-center justify-center p-6 mt-8">
          <button className="relative inline-flex h-12 w-36 overflow-hidden rounded-full p-[2px] group cursor-pointer">
            <span
              className="absolute inset-[-200%] animate-[spin_1.6s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(255,255,255,0.9)_100%,transparent_100%)]"
            />
            <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-zinc-900 text-[14px] font-medium text-white backdrop-blur-md transition-all duration-300">
              Get Started
            </span>
          </button>
        </div>

            <div className="min-h-screen pt-40">
               <div className="grid grid-cols-2 gap-12">
                <div className="h-72 lg:w-[40rem] rounded-3xl border-4 bg-red-800 ">
                  1
                </div> 
                <div className="h-72 lg:w-[40rem] rounded-3xl border-4 bg-red-800">
                  2
                </div>
                <div className="h-72 lg:w-[40rem] rounded-3xl border-4 bg-red-800"> 
                  3
                </div>
                <div className="h-72 lg:w-[40rem] rounded-3xl border-4 bg-red-800">
                  4
                </div>
               </div>
            </div>

       
      </section>

      {/* <section className="bg-black min-h-screen p-8 text-white">
        <h2 className="text-4xl text-center pt-20">content section</h2>
      </section> */}
        <Footer/>
    </div>
  );
}