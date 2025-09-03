import React, { useState } from 'react';

// --- CONSTANTS ---
const FILTERS = ['By Category', "By Owner's Name", 'By Decade'];
const DECADES = [1990, 1992, 1994, 1996, 1998, 2000];

const initialLettersData = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  image: `https://picsum.photos/seed/${i + 1}/400/500`,
  decade: DECADES[i % DECADES.length],
}));

// --- SVG ICONS ---
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#b08968]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

// --- CHILD COMPONENTS ---

const LetterCard = ({ letter }) => {
  return (
    <div 
      className="p-4 pt-6 text-center text-black bg-center bg-no-repeat bg-cover h-full" 
      style={{ backgroundImage: "url('/src/assets/button-bg.png')" }}
    >
      <div className="relative w-full aspect-[4/5] max-w-xs mx-auto">
        <img 
          src="/src/assets/frame.png" 
          alt="Ornate Frame" 
          className="absolute inset-0 w-full h-full object-contain z-10"
        />
        <img 
          src={letter.image}
          alt={`Historic Letter ${letter.id}`} 
          className="absolute w-full h-full object-cover p-[12%] z-0"
        />
      </div>
      <div className="px-4 pb-4 pt-6">
        <h3 className="text-xl font-['philosopher',_cursive]  text-black mb-2">Want more historic letters?</h3>
        <p className="text-sm font-['philosopher',_cursive] text-black leading-relaxed">
          Join our archive mailing list and never miss an update.
        </p>
      </div>
    </div>
  );
};

const FilterSection = ({ activeFilter, onFilterChange, selectedDecade, onDecadeClick }) => {
  return (
    <section className="my-12 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex space-x-8 text-['#4A3F35'] text-xl">
          {FILTERS.map(filter => (
            <button 
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`pb-2 transition-colors text-[#b08968] duration-300 ${activeFilter === filter ? "text-[#b08968] border-b-2 border-[#b08968] font-bold" : "hover:text-['#2C251E']"}`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <SearchIcon />
          </div>
          <input 
            type="search"
            placeholder="Search by title or Story"
            className="bg-[#F5EFE1]/60 border border-[#b08968] placeholder:text-[#9d6f49] placeholder:bg-transparent placeholder:opacity-80 w-full md:w-80 h-12 pl-12 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-['#A17A5D']"
          />
        </div>
      </div>
      {activeFilter === 'By Decade' && (
        <div className="flex justify-center items-center flex-wrap gap-4 mt-8">
          {DECADES.map(decade => (
            <button 
              key={decade} 
              onClick={() => onDecadeClick(decade)}
              className={`shadow-[2px_2px_8px_rgba(0,0,0,0.2)] text-black transition-all duration-200 ease-in-out hover:bg-[#F5EFE1]/90 hover:shadow-[3px_3px_10px_rgba(0,0,0,0.3)] hover:-translate-y-px  px-6 py-2 rounded-full font-bold ${
                selectedDecade === decade ? "bg-['#A17A5D'] text-['#F5EFE1']" : ""
              }` }
              style={{ backgroundImage: `url('/src/assets/button-bg.png')`,backgroundSize:'98% 103%' }}
              >
              #{decade}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

const NewsletterSection = () => {
  return (
    <section className="text-center py-16 px-4">
      <h2 className="text-5xl font-['philosopher',_cursive] text-black">Want more historic letters?</h2>
      <p className="mt-2 mb-8 text-xl font-['philosopher',_cursive] text-black max-w-2xl mx-auto">
        Join our archive mailing list and never miss an update.
      </p>
      <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
        <input 
          type="email"
          placeholder="Your email address.."
          className="bg-[#F5EFE1]/60 rounded-lg border-[#85654c] placeholder:text-[#4A3F35] placeholder:opacity-80 w-full sm:w-80 h-12 px-6  focus:outline-none focus:ring-2 focus:ring-[#A17A5D]"
        style={{ backgroundImage: `url('/src/assets/button-bg.png')`,backgroundSize:'102% 107%' }}
          
        />
        <button type="submit" className="rounded transition-all duration-200 ease-in-out hover:-translate-y-px  px-8 py-3 "
        style={{ backgroundImage: `url('/src/assets/button-bg.png')`,backgroundSize:'100% 103%' }}>
        
          Shop Now
        </button>
      </form>
    </section>
  );
}

// --- MAIN APP COMPONENT ---

function App() {
  const [letters, setLetters] = useState(initialLettersData);
  const [activeFilter, setActiveFilter] = useState('By Decade');
  const [selectedDecade, setSelectedDecade] = useState(null);

  const handleDecadeClick = (decade) => {
    if (selectedDecade === decade) {
      setSelectedDecade(null); 
    } else {
      setSelectedDecade(decade);
    }
  };
  
  const loadMoreLetters = () => {
    const newLetters = Array.from({ length: 3 }, (_, i) => ({
      id: letters.length + i + 1,
      image: `https://picsum.photos/seed/${letters.length + i + 1}/400/500`,
      decade: DECADES[(letters.length + i) % DECADES.length],
    }));
    setLetters(prevLetters => [...prevLetters, ...newLetters]);
  };
  
  const displayedLetters = selectedDecade
    ? letters.filter(letter => letter.decade === selectedDecade)
    : letters;

  return (
    <div 
       className="min-h-screen w-full bg-cover bg-center  bg-fixed font-['Philosopher',_serif] BGCOVER"
      style={{ backgroundImage: "url('src/assets/bg.png')" , backgroundSize: "100% 114%"}}
    >
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl md:text-5xl font-['philosopher',_cursive] text-[#2C251E]">
            All English Letters
          </h1>
          <p className="mt-2 text-2xl md:text-xl text-[#4A3F35] font-['philosopher',_cursive]">
            Get the latest items immediately with promo prices
          </p>
        </header>

        {/* Filters */}
        <FilterSection 
          activeFilter={activeFilter} 
          onFilterChange={setActiveFilter}
          selectedDecade={selectedDecade}
          onDecadeClick={handleDecadeClick}
        />

        {/* Letters Grid */}
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
            {displayedLetters.map(letter => (
              <a 
                key={letter.id} 
                href={`#/letter/${letter.id}`} 
                className="block rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl   "
                aria-label={`View details for letter ${letter.id}`}
              >
                <LetterCard letter={letter} />
              </a>
            ))}
          </div>
          
          {displayedLetters.length === 0 && (
            <p className="text-center text-[#4A3F35] text-xl italic mt-8">No letters found for this decade.</p>
          )}

          <div className="text-center mt-12">
            <button 
              onClick={loadMoreLetters}
              className="text-2xl text-[#9d6f49] underline  hover:-translate-y-px "
            >
              Load More
            </button>
          </div>
        </section>

        {/* Newsletter Signup */}
        <NewsletterSection />
      </main>
    </div>
  );
}

export default App;