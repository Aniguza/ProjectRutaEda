export const ComicSection = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 *:font-momo">
          <p className="text-5xl text-pastelrojo mb-4">Es hora de leer</p>
          <p className="text-3xl text-pastelceleste">[Nombre del cómic]</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* First comic panel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-square bg-lienar-to-br from-yellow-300 via-blue-400 to-green-400 p-4 relative">
              {/* Comic panel elements */}
              <div className="absolute top-4 left-4 w-16 h-8 bg-white rounded-full flex items-center justify-center border-2 border-black">
                <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-6 border-b-black"></div>
              </div>
              
              <div className="absolute top-4 right-4 w-20 h-10 bg-white rounded-lg border-2 border-black flex items-center justify-center">
                <span className="text-xs font-bold">¡BOOM!</span>
              </div>
              
              <div className="absolute bottom-4 left-4 w-24 h-12 bg-white rounded-lg border-2 border-black transform -rotate-3"></div>
              
              {/* Speech bubbles */}
              <div className="absolute top-12 left-8 w-16 h-16 bg-white rounded-full border-2 border-black flex items-center justify-center">
                <div className="w-8 h-8 bg-yellow-300 rounded-full"></div>
              </div>
              
              <div className="absolute bottom-16 right-8 w-20 h-16 bg-white rounded-lg border-2 border-black"></div>
              
              {/* Cloud effects */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-12 bg-white rounded-full opacity-80"></div>
              <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-16 h-8 bg-white rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Second comic panel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-square bg-linear-to-br from-yellow-300 via-blue-400 to-green-400 p-4 relative">
              {/* Comic panel elements */}
              <div className="absolute top-4 left-4 w-16 h-8 bg-white rounded-full flex items-center justify-center border-2 border-black">
                <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-6 border-b-black"></div>
              </div>
              
              <div className="absolute top-4 right-4 w-20 h-10 bg-white rounded-lg border-2 border-black flex items-center justify-center">
                <span className="text-xs font-bold">¡POW!</span>
              </div>
              
              <div className="absolute bottom-4 left-4 w-24 h-12 bg-white rounded-lg border-2 border-black transform rotate-2"></div>
              
              {/* Speech bubbles */}
              <div className="absolute top-12 right-8 w-16 h-16 bg-white rounded-full border-2 border-black flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
              </div>
              
              <div className="absolute bottom-16 left-8 w-20 h-16 bg-white rounded-lg border-2 border-black"></div>
              
              {/* Cloud effects */}
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-12 bg-white rounded-full opacity-80"></div>
              <div className="absolute bottom-1/3 right-1/3 transform translate-x-1/2 translate-y-1/2 w-16 h-8 bg-white rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};