import { SiJavascript, SiTypescript, SiNextdotjs, SiNestjs } from 'react-icons/si';

export default function Hero() {
    return (
        <section id="hero" className="section w-full relative bg-center bg-no-repeat bg-cover pt-20 mb-40 z-10"
        style={{ backgroundImage: "url(./hero.svg)" }}>
        <div className="container mx-auto px-6 py-20">
          <div className="w-full flex flex-col justify-center items-center animate-in fade-in slide-in-from-bottom-1"
            style={{ animationDuration: "1s" }}>
            <h1 className="text-white text-6xl md:text-8xl text-center font-bold mb-4">Gedson</h1>
            <p className="text-white font-light text-xl md:text-2xl text-center mb-8 ">(Backend Developer)</p>
            <div className="flex space-x-4 mb-8 scale-125 opacity-75">
              <SiJavascript className="h-8 w-8 text-yellow-400" />
              <SiTypescript className="h-8 w-8 text-blue-600" />
              <SiNextdotjs className="h-8 w-8 text-white" />
              <SiNestjs className="h-8 w-8 text-red-600" />
            </div>
            <a href="#sobre" className="inline-block bg-black border border-stone-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#0060d3] transition-colors duration-300">Me conheça</a>
          </div>
        </div>
        <div className="h-[300px] w-full bg-center bg-no-repeat bg-cover"></div>
      </section>
    )
}