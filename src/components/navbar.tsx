"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-20 bg-transparent">
      <div className="mx-auto max-w-[92%] h-full flex justify-between items-center">
        <Image src="/images/icercs.png" alt="das" width={100} height={80} />
        <h2 className="text-4xl ml-2 mr-2 font-bold tracking-wide text-white">
          ICERCS
        </h2>
        <div className="hidden md:flex gap-6 text-sm text-white tracking-wide hover:*:text-secondary transition-colors">
          <Link href={"/"}>Home</Link>
          <Link href={"/about-kahe"}>About KAHE</Link>
          <Link href={"/about-icercs"}>About ICERCS&apos;24</Link>
          <Link href={"/about-coimbatore"}>About Coimbatore</Link>
          <Link href={"keynote-speakers"}>Keynote</Link>
          <Link href={"/committee"}>Advisory Committee</Link>
          <Link href={"/reviewers"}>Reviewers</Link>
          <Link href={"/call-for-paper"}>Call for Paper</Link>
          <Link href={"guidelines"}>Submission Guidelines</Link>
          <Link href={"/registration"}>Registration</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
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
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-transparent`}
      >
        <div className="flex flex-col items-center text-white tracking-wide gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/about-kahe"}>About KAHE</Link>
          <Link href={"/about-icercs"}>About ICERCS&apos;24</Link>
          <Link href={"/about-coimbatore"}>About Coimbatore</Link>
          <Link href={"keynote-speakers"}>Keynote</Link>
          <Link href={"/committee"}> Advisory Committee</Link>
          <Link href={"/reviewers"}>Reviewers</Link>
          <Link href={"/call-for-paper"}>Call for Paper</Link>
          <Link href={"guidelines"}>Submission Guidelines</Link>
          <Link href={"/registration"}>Registration</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
