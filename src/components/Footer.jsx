import React from "react";
import Logo from "../assets/swiftlogo.jpg"

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Links and Logo */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img src={Logo} alt="swiftransact-logo" className='w-12 hover:scale-105 rounded-xl transition-all' />
            <h2 className="text-xl font-bold text-orange-500">
              Swiftransact
            </h2>
            <p className="text-sm text-gray-400">
              Best Value for your Digital Assets.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a
              href="#about"
              className="text-sm text-gray-300 hover:text-orange-500"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-300 hover:text-orange-500"
            >
              Contact
            </a>
            <a
              href="#support"
              className="text-sm text-gray-300 hover:text-orange-500"
            >
              Support
            </a>
            <a
              href="#privacy"
              className="text-sm text-gray-300 hover:text-orange-500"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Bottom Section: Social Media and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-4 md:mt-0 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Swiftransact. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;