import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 items-center text-teal-400 py-4 gap-7">
      <div className=" mx-auto flex flex-col md:flex-row items-center max-w-screen-md justify-between">
        {/* Copyright Statement */}
        <div className="mt-5 text-center md:mt-0">
          <p className=" text-bold  text-1xl">
            <FontAwesomeIcon icon={faCopyright} className="mr-5 items-center" />
            2024 james. All rights reserved.
          </p>
        </div>
        {/* Social Media Links */}
        <div className="flex space-x-10">
          <a href="https://www.facebook.com/profile.php?id=100073083227624" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-blue-500" size="lg" />
          </a>
          <a href="https://twitter.com/James_khadka__" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="text-white hover:text-blue-400" size="lg" />
          </a>
          <a href="https://www.instagram.com/james_khadka__/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-pink-500" size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/james-khadka-26b100236/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-blue-700" size="lg" />
          </a>
        </div>


      </div>
    </footer>
  );
};

export default Footer;

