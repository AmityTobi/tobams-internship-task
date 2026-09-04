"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import tobamsLogo from "@/public/images/tobams-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", hasDropdown: true, isActive: true },
    { label: "What We Do", hasDropdown: true, isActive: false },
    { label: "Jobs", hasDropdown: true, isActive: false },
    { label: "Projects", hasDropdown: false, isActive: false },
    { label: "TG Academy", hasDropdown: false, isActive: false },
    { label: "Strategic Partnership", hasDropdown: false, isActive: false },
    { label: "Pricing", hasDropdown: false, isActive: false },
    { label: "Book a Consultation", hasDropdown: false, isActive: false },
  ];

  return (
    <header className="w-full bg-white font-['Nunito_Sans']">
      {/* Top Header Row */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-16 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center outline-none">
          <Image
            src={tobamsLogo}
            alt="Tobams Group Logo"
            width={165}
            height={64}
            priority
            className="h-auto w-[130px] md:w-[165px]"
          />
        </Link>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            type="button"
            className="bg-[#571244] text-white text-base leading-relaxed px-5 py-2 rounded-md flex items-center gap-2 font-regular cursor-default outline-none border-none select-none"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                fill="#DDD0DA"
              />
              <path
                d="M10 25V23C10 21.9391 10.4214 20.9217 11.1716 20.1716C11.9217 19.4214 12.9391 19 14 19H18C19.0609 19 20.0783 19.4214 20.8284 20.1716C21.5786 20.9217 22 21.9391 22 23V25M12 11C12 12.0609 12.4214 13.0783 13.1716 13.8284C13.9217 14.5786 14.9391 15 16 15C17.0609 15 18.0783 14.5786 18.8284 13.8284C19.5786 13.0783 20 12.0609 20 11C20 9.93913 19.5786 8.92172 18.8284 8.17157C18.0783 7.42143 17.0609 7 16 7C14.9391 7 13.9217 7.42143 13.1716 8.17157C12.4214 8.92172 12 9.93913 12 11Z"
                stroke="#571244"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Account</span>

            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M0.75 0.750001L4.91667 4.91667L9.08333 0.750001"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            className="bg-[#EF4353] text-white text-base leading-relaxed font-regular px-5 py-2 rounded-md cursor-default outline-none border-none select-none"
          >
            Take Assessment
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 rounded-md outline-none border-none bg-[#151515] flex items-center justify-center"
          aria-expanded={isOpen}
          aria-label="Toggle Navigation Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="white"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Bottom Desktop Navigation Row */}
      <div className="hidden xl:block w-full border-t border-gray-300">
        <nav
          className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-16 py-3 flex items-center justify-center gap-6 2xl:gap-8"
          aria-label="Main Desktop Navigation"
        >
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative py-1 flex items-center gap-1.5 shrink-0 cursor-default select-none"
            >
              <span
                className={`text-base leading-relaxed font-normal ${
                  item.isActive ? "text-[#571244]" : "text-[#151515]"
                }`}
              >
                {item.label}
              </span>

              {item.hasDropdown && (
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M0.75 0.750001L4.91667 4.91667L9.08333 0.750001"
                    stroke="#571244"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {item.isActive && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#571244]" />
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <nav
          className="xl:hidden bg-white border-t border-gray-300 px-6 py-4 flex flex-col gap-3 select-none"
          aria-label="Mobile Navigation Menu"
        >
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`text-base py-2 border-b border-gray-50 flex items-center justify-between cursor-default ${
                item.isActive
                  ? "text-[#571244] font-semibold"
                  : "text-[#151515] font-medium"
              }`}
            >
              <span>{item.label}</span>
              {item.hasDropdown && (
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M0.75 0.750001L4.91667 4.91667L9.08333 0.750001"
                    stroke="#571244"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          ))}
          <div className="flex flex-col gap-2 pt-3">
            <button
              type="button"
              className="w-full bg-[#571244] text-white text-sm font-semibold py-2.5 rounded-md flex items-center justify-center gap-2 cursor-default outline-none border-none"
            >
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M1 19V17C1 15.9391 1.42143 14.9217 2.17157 14.1716C2.92172 13.4214 3.93913 13 5 13H9C10.0609 13 11.0783 13.4214 11.8284 14.1716C12.5786 14.9217 13 15.9391 13 17V19M3 5C3 6.06087 3.42143 7.07828 4.17157 7.82843C4.92172 8.57857 5.93913 9 7 9C8.06087 9 9.07828 8.57857 9.82843 7.82843C10.5786 7.07828 11 6.06087 11 5C11 3.93913 10.5786 2.92172 9.82843 2.17157C9.07828 1.42143 8.06087 1 7 1C5.93913 1 4.92172 1.42143 4.17157 2.17157C3.42143 2.92172 3 3.93913 3 5Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Account</span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M0.75 0.750001L4.91667 4.91667L9.08333 0.750001"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="w-full bg-[#EF4353] text-white text-sm font-semibold py-2.5 rounded-md cursor-default outline-none border-none"
            >
              Take Assessment
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
