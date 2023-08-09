"use client";
import React, { useState, useEffect } from "react";
import './Footer.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import namesData from "./namesData";


const Footer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showName, setShowName] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowName(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % namesData.length);
        setShowName(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const year = new Date().getFullYear();
  const currentPerson = namesData[currentIndex];

  return (
    <footer className="bg-green-600 text-white py-4">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between items-center">
          <div className="flex flex-row gap-2">
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
            <a href="" className="hover:text-gray-300">
              About
            </a>
            <a href="" className="hover:text-gray-300">
              Contact
            </a>
          </div>
          <div className="flex flex-row gap-2">
            <p className="mt-2 name-container">
              Made with ❤️ by {" "}
              <span className={`name-animation-footer name-fixed-width-footer ${showName ? "show" : ""}`}>
                {currentPerson.name}
              </span>
            </p>
          </div>
          <div className={`flex flex-row gap-3 social-icons-footer mt-3 ${showName ? "show" : ""}`}>
            <a href={`https://github.com/${currentPerson.github}`} target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon github-icon-footer" />
            </a>
            <a href={currentPerson.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon linkedin-icon-footer" />
            </a>
          </div>
          <p className="mt-2">Henry © {year}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;