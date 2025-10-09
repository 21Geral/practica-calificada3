import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <header className="w-full flex justify-around items-center p-4 bg-white md:bg-white/80 ">
      <div className="flex items-center">
        <img className="w-24 mr-[15%]" src="navbar/logo.png" alt="logo" />
        <nav className="hidden md:flex gap-8 text-gray-700 ">
          <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition">
            <span>Home</span>
            <ChevronDown className="w-4 h-4" />
          </Link>
          <Link to="/services" className="flex items-center gap-1 hover:text-gray-900 transition">
            <span>Service</span>
            <ChevronDown className="w-4 h-4" />
          </Link>
          <Link to="/works" className="flex items-center gap-1 hover:text-gray-900 transition">
            <span>Works</span>
            <ChevronDown className="w-4 h-4" />
          </Link>
          <Link to="/news" className="flex items-center gap-1 hover:text-gray-900 transition">
            <span>News</span>
            <ChevronDown className="w-4 h-4" />
          </Link>
          <Link to="/contact" className="flex items-center gap-1 hover:text-gray-900 transition">
            <span>Contact</span>
            <ChevronDown className="w-4 h-4" />
          </Link>
        </nav>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setMobileOpen(true)}>
          <Menu className="w-7 h-7 text-gray-700" />
        </button>
      </div>

      {/* NAV MÓVIL */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 flex justify-end" onClick={() => setMobileOpen(false)}>
          <div
            className="relative h-2/4 w-2/3 bg-white shadow-2xl p-6 flex flex-col gap-6 text-gray-800 z-50 transition-transform duration-300 translate-x-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Menu</h2>
              <button onClick={() => setMobileOpen(false)}>
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            <button onClick={() => handleNavigate("/")} className="text-left hover:text-blue-600">
              Home
            </button>
            <button onClick={() => handleNavigate("/services")} className="text-left hover:text-blue-600">
              Service
            </button>
            <button onClick={() => handleNavigate("/works")} className="text-left hover:text-blue-600">
              Works
            </button>
            <button onClick={() => handleNavigate("/news")} className="text-left hover:text-blue-600">
              News
            </button>
            <button onClick={() => handleNavigate("/contact")} className="text-left hover:text-blue-600">
              Contact
            </button>

            <div className="mt-6 border-t pt-4 flex gap-3">
              <button className="text-blue-500 font-semibold">Log In</button>
              <button className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#a684e3] via-[#888bea] to-[#698ef2] px-3 rounded-lg">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BOTONES DERECHA */}
      <div className="hidden sm:flex gap-4 items-center">
        <button className="text-blue-500 font-semibold hover:underline">Log In</button>
        <button className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#a684e3] via-[#888bea] to-[#698ef2] px-3 rounded-lg shadow-sm shadow-violet-400 hover:scale-105 transition">
          Sign Up
        </button>
      </div>
    </header>
  );
}
