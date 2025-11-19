"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // adjust the path
import GButton from "./ui/GButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="flex items-center w-screen fixed top-0 z-50 border-b border-dark bg-black/10 backdrop-blur-lg transition-all duration-300 ease-in-out">
      <div className="flex justify-between max-w-screen-2xl mx-auto w-full h-28 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="ProductLamp Logo"
            width={188}
            height={40}
            className="relative w-[188px] h-10 max-md:w-[140px] max-md:h-[30px]"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center">
          {/* Work */}
          <Link
            href="/"
            className="hover:text-primary relative px-8 py-4 text-base group flex items-center gap-4"
          >
            <span>Home</span>
          </Link>

          {/* About */}
          <Link
            href="#solutions"
            className="hover:text-primary relative px-8 py-4 text-base group flex items-center gap-4"
          >
            <span>Solutions</span>
          </Link>

          {/* Contact */}
          <Link
            href="#trainings"
            className="hover:text-primary relative px-8 py-4 text-base group flex items-center gap-4"
          >
            <span>Trainings</span>
          </Link>

          <Link
            href="/about"
            className="hover:text-primary relative px-8 py-4 text-base group flex items-center gap-4"
          >
            <span>About</span>
          </Link>

          <Link
            href="/contact"
            className="hover:text-primary relative px-8 py-4 text-base group flex items-center gap-4"
          >
            <span>Join Us</span>
          </Link>

          <GButton text="Get in Touch" />
        </div>

        {/* Mobile menu icon */}
        <button
          onClick={toggleMenu}
          className="flex items-center md:hidden cursor-pointer text-3xl"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "×" : "☰"}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-black absolute top-24 left-0 w-full flex flex-col gap-4 md:hidden backdrop-blur-lg py-6">
            <Link
              href="/"
              className="focus:outline-none focus:ring-0 focus:border-0 hover:text-primary relative px-8 py-4 text-base group flex items-center gap-4"
            >
              <span>Home</span>
            </Link>

            {/* About */}
            <Link
              href="#solutions"
              className="hover:text-primary relative px-8 py-4 text-base group flex items-center gap-4"
            >
              <span>Solutions</span>
            </Link>

            {/* Contact */}
            <Link
              href="#trainings"
              className="hover:text-primary relative px-8 py-4 text-base group flex items-center gap-4"
            >
              <span>Trainings</span>
            </Link>

            <Link
              href="/contact"
              className="hover:text-primary relative px-8 py-4 text-base group flex items-center gap-4"
            >
              <span>About</span>
            </Link>

            <Link
              href="/contact"
              className="hover:text-primary relative px-8 py-4 text-base group flex items-center gap-4"
            >
              <span>Join Us</span>
            </Link>
            <GButton className="" text="Get In Touch" />
          </div>
        )}
      </div>
    </nav>
  );
}
