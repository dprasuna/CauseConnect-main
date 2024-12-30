// src/shared/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, UserCircleIcon } from '@heroicons/react/solid';
import { Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // check if user is loged in
  let isLoggedIn
  isLoggedIn = localStorage.getItem("token") ? true : false
  console.log("isLoggedIn: ", isLoggedIn)

  return (
    <nav className="bg-blue-900 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold text-white font-serif flex items-center space-x-2">
            <Heart className="w-6 h-6 text-yellow-400" fill="currentColor" />
            <span>CauseConnect</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-yellow-400 transition-colors">
                Home
              </Link>
              <Link to="/events" className="text-white hover:text-yellow-400 transition-colors">
                Events
              </Link>
              <Link to="/about" className="text-white hover:text-yellow-400 transition-colors">
                About
              </Link>
              <Link to="/leaderboard" className="block text-white hover:text-yellow-400 transition-colors py-2">
              Leaderboard
            </Link>
           
           
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-1">
                <UserCircleIcon className="w-7 h-7" />
                <span>Dashboard</span>
              </Link>
            {isLoggedIn == false && (
              <Link to="/login">
                <button className="bg-yellow-400 text-blue-900 px-5 py-2 rounded-md font-semibold 
                  hover:bg-yellow-300 transition-colors focus:outline-none focus:ring-2 
                  focus:ring-yellow-500 focus:ring-offset-2">
                  Login
                </button>
              </Link>
            )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400 transition-colors focus:outline-none"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link to="/" className="block text-white hover:text-yellow-400 transition-colors py-2">
              Home
            </Link>
            <Link to="/events" className="block text-white hover:text-yellow-400 transition-colors py-2">
              Events
            </Link>
            <Link to="/about" className="block text-white hover:text-yellow-400 transition-colors py-2">
              About
            </Link>
            <Link to="/leaderboard" className="block text-white hover:text-yellow-400 transition-colors py-2">
              Leaderboard
            </Link>
           
            <Link to="/dashboard" className="flex items-center text-white hover:text-yellow-400 transition-colors py-2 space-x-1">
              <UserCircleIcon className="w-7 h-7" />
              <span>Dashboard</span>
            </Link>
            {isLoggedIn == false && (
              <>

            <Link to="/login" className="block pt-2">
              <button className="w-full bg-yellow-400 text-blue-900 px-5 py-2 rounded-md font-semibold 
                hover:bg-yellow-300 transition-colors focus:outline-none focus:ring-2 
                focus:ring-yellow-500 focus:ring-offset-2">
                Login
              </button>
            </Link>
              </>
              )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
