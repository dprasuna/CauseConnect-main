import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Heart } from 'lucide-react';


const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* CauseConnect Section */}
          <div className="w-full md:w-1/3 mb-4 pl-10">
            <Link to="/" className="text-xl font-semibold drop-shadow-md font-serif flex items-center">
              <Heart className="w-6 h-6 mr-2 text-yellow-400" fill="currentColor" />
              Connect4Good
            </Link>
            <p className="text-sm p-5">
              Your go-to platform to connect with NGOs and initiatives for a meaningful impact.
            </p>

            {/* Copyright Section Below CauseConnect */}
      <div className="border-t border-gray-700 py-5">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} CauseConnect. All Rights Reserved.
        </p>
      </div>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/3 mb-4 pl-28">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-yellow-400">
              <li>
                <Link to="/about" className="hover:text-white transition duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-white transition duration-300 text-sm">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition duration-300 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition duration-300 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="w-full md:w-1/3 mb-4 pl-20">
            <h3 className="text-lg font-semibold mb-2 justify-center ">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-400 hover:text-white transition duration-300 text-xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-yellow-400 hover:text-white transition duration-300 text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-yellow-400 hover:text-white transition duration-300 text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-yellow-400 hover:text-white transition duration-300 text-xl">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            {/* Rate My Website Section moved below the social media icons */}
        <div className="mt-6">
          <button
            onClick={openModal}
            className="bg-yellow-400 text-blue-900 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300 text-sm"
          >
            How useful was this?
          </button>
        </div>
          </div>
          
        </div>

        {/* Modal for Rating Website */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-lg w-96">
              <h3 className="text-lg font-semibold mb-3">Rate Our Website</h3>
              <p className="text-sm mb-3">Please rate your experience on our website:</p>
              <div className="flex justify-center space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    className="text-yellow-400 text-2xl"
                    onClick={() => alert(`You rated the website: ${rating} stars!`)}
                  >
                    ★
                  </button>
                ))}
              </div>
              <div className="flex justify-between">
                <button
                  onClick={closeModal}
                  className="bg-gray-300 text-blue-900 px-4 py-2 rounded-lg hover:bg-gray-400 text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      
    </footer>
  );
};

export default Footer;
