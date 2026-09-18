import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${isScroll ? "glass py-3" : "bg-transparent py-4"}`}
    >
      <div className="max-w-[1320px] flex justify-between items-center mx-auto p-4">
        <Link
          to="#"
          className="font-sans text-2xl font-semibold text-[#fff] capitalize"
        >
          cesado art
        </Link>
        <div className="hidden md:flex gap-20 capitalize items-center text-xl text-[#000]">
          <Link
            onClick={() => setActiveTab("home")}
            to="#"
            className={`flex items-center gap-2 text-xl capitalize leading-relaxed py-2 px-4 rounded-full transition-all duration-300 ${
              activeTab === "home" ? "bg-black text-white" : "text-[#fff]"
            }`}
          >
            Home
            {activeTab === "home" && (
              <span className="flex gap-1">
                <span className="w-[7px] h-[7px] rounded-full bg-[#F6821F]"></span>
                <span className="w-[7px] h-[7px] rounded-full bg-[#F6821F]"></span>
                <span className="w-[7px] h-[7px] rounded-full bg-[#F6821F]"></span>
              </span>
            )}
          </Link>
          <Link
            onClick={() => setActiveTab("gallery")}
            to="#"
            className={`flex items-center gap-2 text-xl capitalize leading-relaxed py-2 px-4 rounded-full transition-all duration-300 ${
              activeTab === "gallery" ? "bg-black text-white" : "text-[#fff]"
            }`}
          >
            gallery
            {activeTab === "gallery" && (
              <span className="flex gap-1">
                <span className="w-[7px] h-[7px] rounded-full bg-[#F6821F]"></span>
                <span className="w-[7px] h-[7px] rounded-full bg-[#F6821F]"></span>
                <span className="w-[7px] h-[7px] rounded-full bg-[#F6821F]"></span>
              </span>
            )}
          </Link>
          <Link
            onClick={() => setActiveTab("featuredartist")}
            to="#"
            className={`flex items-center gap-2 text-xl capitalize leading-relaxed py-2 px-4 rounded-full transition-all duration-300 ${
              activeTab === "featuredartist"
                ? "bg-black text-white"
                : "text-[#fff]"
            }`}
          >
            featured artist
            {activeTab === "featuredartist" && (
              <span className="flex gap-1">
                <span className="w-[7px] h-[7px] rounded-full bg-[#F6821F]"></span>
                <span className="w-[7px] h-[7px] rounded-full bg-[#F6821F]"></span>
                <span className="w-[7px] h-[7px] rounded-full bg-[#F6821F]"></span>
              </span>
            )}
          </Link>
        </div>
        <input
          type="text"
          placeholder="search"
          className="text-[16px] hidden md:flex placeholder:text-[16px] text-[#fff] placeholder:text-[#fff] p-1 pl-2 w-[15vw] rounded-lg outline-none border border-gray-400/60 focus:border-gray-400 bg-transparent"
        />
        <button onClick={() => setMobileOpen((prev) => !prev)}>
          {!mobileOpen ? (
            <FaBars className="w-8 h-8 md:hidden text-white" />
          ) : (
            <FaTimes className="w-8 h-8 text-white" />
          )}
        </button>
      </div>
      {/* mobile nav */}
      {mobileOpen && (
        <div className="bg-[#121212] w-[50vh] backdrop-blur-md mx-auto animate-in slide-in-from-top [animation-duration:300ms] border-t border-gray-200">
          <div className="flex flex-col gap-6 items-center ">
            <Link
              to="#"
              className="capitalize text-[30px] font-sans text-white leading-relaxed"
            >
              Home
            </Link>
            <Link
              to="#"
              className="capitalize text-[30px] font-sans text-white leading-relaxed"
            >
              featured artist
            </Link>
            <Link
              to="#"
              className="capitalize text-[30px] font-sans text-white leading-relaxed"
            >
              search
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
