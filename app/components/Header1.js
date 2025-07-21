'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Header1 = () => {
  const linkStyle =
    'mr-4 px-2 py-1 inline-block text-white bg-transparent hover:rounded-full font-serif hover:bg-black hover:scale-105 transform transition duration-300 focus:outline-none';

  return (
    <div>
      {/* Top Bar with Quick Links and Social Icons */}
      <div className="flex flex-col lg:flex-row bg-[#930e5c] justify-between px-4 lg:px-20 py-3 text-[15px]">
        {/* Quick Links */}
        <div className="hidden lg:flex flex-wrap justify-center lg:justify-start">
          <Link href="/Antirag" className={linkStyle}>
            Anti-Ragging
          </Link>
          <Link href="/Teacherscorner" className={linkStyle}>
            Teachers Corner
          </Link>
          <Link href="/" className={linkStyle}>
            Contacts
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center lg:justify-end items-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-white hover:text-blue-500 text-xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-blue-400 text-xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-white hover:text-blue-600 text-xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-pink-400 text-xl" />
          </a>
        </div>
      </div>

      {/* Header Banner */}
      <div className="bg-white p-5 flex flex-col items-center lg:flex-row lg:pl-40 justify-between">
        <Image
          src="/images/header1.jpg"
          alt="Header Image"
          className="w-full lg:w-1/2"
          width={800}
          height={300}
        />
      </div>

      {/* Navbar */}
      <Navbar />
    </div>
  );
};

export default Header1;
