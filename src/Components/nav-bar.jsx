import React, { useState } from "react";
import { FaMagnifyingGlass ,FaXmark } from "react-icons/fa6";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaRegEnvelope } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import navbg from "../assets/navbg.svg"
// import MobileSidebar from "./MobileSidebar";

const Nax = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchError, setSearchError] = useState("");

  const validateSearchTerm = (term) => {
    if (term.trim().length < 2) return "Search term must be at least 2 characters";
    if (!/^[a-zA-Z0-9\s]+$/.test(term)) return "Only letters and numbers allowed";
    return "";
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter") {
      const error = validateSearchTerm(searchTerm);
      if (error) {
        setSearchError(error);
        return;
      }

      let q = searchTerm.trim().toLowerCase();
      let searchQuery = q;

      if (q.includes("letter")) searchQuery = "letters";
      else if (q.includes("photo") || q.includes("image")) searchQuery = "photographs";
      else if (q.includes("product") || q.includes("shop")) searchQuery = "products";

    //   navigate(/search?query=${encodeURIComponent(searchQuery)});
      setShowSearch(false);
      setSearchError("");
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setSearchError("");
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setShowSearch(false);
    setSearchError("");
  };

  const navLinks = [
    { label: "ABOUT US", to: "/about" },
    { label: "LETTERS", to: "/letters" },
    { label: "PHOTOGRAPHS", to: "/photo" },
    { label: "SUBMISSION", to: "/sub" },
    { label: "CONTACT US", to: "/contact" },
  ];

  return (
    <>
  <header
    className="w-full fixed  bg-transparent backdrop-blur-sm border-b border-[#e7ddd0] shadow-md rounded-bl-4xl rounded-br-4xl  z-50"
    style={{
      backgroundImage: `url(${navbg})`,
      backgroundSize: "100% 500%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",

    }}
  >

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 ">
        <Link to="/" className="flex items-center gap-2 md:gap-4">
        <div className=" overflow-hidden h-20 object-center ">

  <img
    src="/logo.png"
    alt="Site Logo"
    className=" w-auto  h-20 " 
    />
    </div>
  <div className="flex flex-col leading-tight">
    <span className="text-2xl font-serif tracking-wider text-gray-800">KHAT KHAZANA</span>
    <p className="text-xs  font-serif text-gray-500 italic">Preserving Inked Memories</p>
  </div>
</Link>


          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-sm font-medium tracking-wide font-serif transition-all duration-200 ${
                    isActive
                      ? "text-black underline underline-offset-4"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              to="/support"
              className="flex items-center gap-2 bg-[#ede2d2] text-[#703b1d] px-3 py-1 rounded-full shadow-sm hover:bg-[#e6d7c5] transition"
            >
              <FaRegEnvelope className="h-4 w-4" />
              Support
            </Link>

            <button onClick={() => setShowSearch(true)} aria-label="Search">
              <FaMagnifyingGlass className="h-5 w-5 text-gray-700 hover:text-black" />
            </button>
          </div>

          {/* Mobile */}
          <div className="flex w-full justify-between items-center md:hidden mt-4">
            <button onClick={() => setIsSidebarOpen(true)} aria-label="Menu">
              <HiOutlineBars3 className="h-6 w-6 text-gray-700" />
            </button>
            <button onClick={() => setShowSearch(true)} aria-label="Search">
              <FaMagnifyingGlass className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
          {showSearch && (
        <div className=" py-4  lg:py-0  lg:pb-3">
          <div className="max-w-4xl mx-auto px-4">
            <div className="relative flex items-center bg-white border border-gray-300 shadow-md rounded-md">
              <input
                type="text"
                autoFocus
                placeholder="Type and press enter to search..."
                className="w-full px-4 py-2 text-lg font-serif text-gray-700 outline-none rounded-md"
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyDown={handleSearchSubmit}
              />
              <button onClick={handleClearSearch} className="p-2" aria-label="Clear">
                <FaXmark className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              </button>
            </div>
            {searchError && <p className="text-sm text-red-500 mt-1">{searchError}</p>}
          </div>
        </div>
      )}
      </header>

      {/* Search Bar */}
    

      {/* Mobile Sidebar */}
      {/* <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        navLinks={[...navLinks, { label: "SUPPORT", to: "/support" }]}
        currentPath={location.pathname}
      /> */}
    </>
  );
};

export default Nax;