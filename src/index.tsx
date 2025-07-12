import WebGLBackground from "./components/BgComponent"


export default function Home() {
  return (
    <div className="bg-black min-h-screen">


      <div className="fixed inset-0 z-0">
        <div className="rotate-47 absolute origin-center scale-100" style={{ width: '141.42%', height: '150%', left: '-20%', top: '25%' }} >
          <WebGLBackground/>
        </div>
      </div>


      <div className="relative z-10">
         <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative" style={{ fontFamily: 'Poppins, sans-serif' }}>

           <div className="flex-1 flex flex-col items-center justify-center gap-4 pb-60">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold  uppercase text-neutral-50">
              Not just another app
            </h1>

            <h2
              className="text-xl md:text-3xl font-light uppercase 
                 bg-gradient-to-b from-white via-gray-100 to-gray-300 
                 bg-clip-text text-transparent"
              style={{ textShadow: '1px 1px 8px rgba(255, 255, 255, 0.2)' }}
            >
              Your second brain for self-growth.
            </h2>
          </div>


         </div>
      </div>
    

       </div>
  )
};

