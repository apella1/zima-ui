export {};

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  const Menu = () => (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <a href="#home" className="text-gray-700 font-bold text-lg hover:underline px-3 py-2 sm:py-0">
        Home
      </a>
      <a href="#about" className="text-gray-700 font-bold text-lg hover:underline px-3 py-2 sm:py-0">
        About
      </a>
      {/* <a href="/therapist" className="text-gray-700 font-bold text-lg hover:underline px-3 py-2 sm:py-0">
        Therapist
      </a> */}
      <a href="/conditions" className="text-gray-700 font-bold text-lg hover:underline px-3 py-2 sm:py-0">
        Conditions
      </a>
      {/* <a href="/groups" className="text-gray-700 font-bold text-lg hover:underline px-3 py-2 sm:py-0">
        Groups
      </a> */}
      <a href="#faq" className="text-gray-700 font-bold text-lg hover:underline px-3 py-2 sm:py-0">
        FAQ
      </a>
     
        <a href="/login" className="text-gray-700 font-bold text-lg hover:underline px-3 py-2 sm:py-0">
          Login
        </a>
        <a href="/signup" className="bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 px-4 py-2 ml-4 rounded-lg">
          Sign Up
        </a> 
      
    </div>
  );

  return (
    <nav className="flex items-center justify-between p-4">
      <p className="text-3xl font-black">zima</p>
      <div className="hidden sm:flex sm:items-center sm:space-x-4">
        <Menu />
      </div>
      <button
        type="button"
        className="sm:hidden block text-2xl focus:outline-none"
        onClick={toggleMenu}
      >
        &#9776;
      </button>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50">
          <div className="flex items-center justify-center h-full">
            <div className="bg-white rounded-lg p-4 w-64">
              <div className="flex justify-between items-center mb-4">
                <p className="text-3xl font-black">zima</p>
                <button
                  type="button"
                  className="text-2xl focus:outline-none"
                  onClick={toggleMenu}
                >
                  &#xd7;
                </button>
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <Menu />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
