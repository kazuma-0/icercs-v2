"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-20 bg-transparent">
      <div className="mx-auto max-w-[100%] h-full flex items-center justify-between">
        {/* Left Logo */}
        <div className="flex items-center gap-1">
          <Image src="/icercs.png" alt="ICERCS" width={100} height={80} />
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-5 text-sm text-white tracking-wide hover:*:text-secondary transition-colors">
          <Link href="/">Home</Link>
          <Link href="/about-kahe">About KAHE</Link>
          <Link href="/about-icercs">About ICERCS&apos;25</Link>
          <Link href="/about-coimbatore">About Coimbatore</Link>
          <Link href="/keynote-speakers">Keynote</Link>
          <Link href="/committee">Advisory Committee</Link>
          <Link href="/reviewers">Reviewers</Link>
          <Link href="/call-for-paper">Call for Paper</Link>
          <Link href="/guidelines">Submission Guidelines</Link>
          <Link href="/registration">Registration</Link>
          <div className="relative group">
            <button className="flex items-center gap-1 focus:outline-none">
              Archieves
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-10">
              <a
                href="https://ieeexplore.ieee.org/xpl/conhome/10433896/proceeding"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-gray-800 hover:bg-secondary hover:text-white"
              >
                2023
              </a>
              <a
                href="https://ieeexplore.ieee.org/xpl/conhome/10433896/proceeding"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-gray-800 hover:bg-secondary hover:text-white"
              >
                2024
              </a>
            </div>
          </div>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Right Logo */}
        <div className="flex items-center">
          <Image
            src="/whitelogo.png"
            alt="Logo"
            width={80}
            height={80}
            className="shrink-0"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-transparent`}
      >
        <div className="flex flex-col items-center text-white tracking-wide gap-4 py-4">
          <Link href="/">Home</Link>
          <Link href="/about-kahe">About KAHE</Link>
          <Link href="/about-icercs">About ICERCS&apos;25</Link>
          <Link href="/about-coimbatore">About Coimbatore</Link>
          <Link href="/keynote-speakers">Keynote</Link>
          <Link href="/committee">Advisory Committee</Link>
          <Link href="/reviewers">Reviewers</Link>
          <Link href="/call-for-paper">Call for Paper</Link>
          <Link href="/guidelines">Submission Guidelines</Link>
          <Link href="/registration">Registration</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
