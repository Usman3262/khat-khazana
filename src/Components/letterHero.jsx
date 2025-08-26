import React, { useState } from "react";
import mainBgUrl from "../assets/bg.webp";
import buttonBgUrl from "../assets/Elements for buttons etc 3 1.webp";
const App = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  return (
 
    <main
      className="h-[60vh] w-screen bg-cover bg-[50%_10%]"
      style={{ backgroundImage: `url(${mainBgUrl})` }}
    >
      <div className="w-screen h-[60vh] min-h-[300px]  flex items-center justify-center relative overflow-hidden">
    

        
        <div className="relative w-full h-full flex items-center justify-center bg-red-500 pt-20">
        
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
              showLanguages
                ? "opacity-0 -translate-y-5 pointer-events-none"
                : "opacity-100 translate-y-0"
            }`}
          >
            <button
              onClick={() => setShowLanguages(true)}
              className="w-64 h-16 bg-cover bg-center flex items-center justify-center 
             text-black text-3xl font-['Ephesis'] tracking-widest rounded-3xl 
             shadow-lg transform hover:scale-105 transition-transform duration-300 
             "
              style={{ backgroundImage: `url(${buttonBgUrl})` }}
            >
              <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-['Philosopher']">
                View letters
              </span>
            </button>
          </div>

          {/* State 2: Language selection. Animates in with a fade and slide. */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
              showLanguages
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5 pointer-events-none"
            }`}
          >
            <h2 className="text-4xl text-black mb-8 font-['Philosopher'] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              View letter by
            </h2>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {["English", "Urdu", "Punjabi"].map((lang, index) => (
                <button
                  key={lang}
                  className="w-64 h-16 bg-cover bg-center flex items-center justify-center 
             text-black text-3xl font-['Philosopher'] tracking-widest rounded-3xl 
             shadow-lg transform hover:scale-105 transition-transform duration-300 
             "
                  style={{ backgroundImage: `url(${buttonBgUrl})` }}
                >
                  <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    {lang}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
