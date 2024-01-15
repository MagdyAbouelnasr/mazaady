"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, Burger, Drawer } from "@mantine/core";
import { GlobeAltIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Burger
          mr={12}
          opened={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          hiddenFrom="sm"
        />
        <Image
          src="/company-logo.jpg"
          alt="Company Logo"
          width={80}
          height={80}
        />
        <div className="hidden md:flex ml-3 space-x-4">
          <Link href={"/"} className="hover:text-gray-800">
            Home
          </Link>
          <Link href={"/"} className="hover:text-gray-800">
            Blog
          </Link>
          <Link href={"/"} className="hover:text-gray-800">
            Gifts
          </Link>
        </div>
      </div>

      {/* right section */}
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
        <Avatar src="user-image.jpg" size="lg" alt="user photo" />
        <div className="hidden  md:flex">
          <button
            type="button"
            className="flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-500 hover:from-pink-500 hover:to-yellow-500 mr-4 ml-4 w-44 h-12 rounded"
          >
            <PlusCircleIcon stroke="white" className="w-6 h-6 ml-1" />
            <span className="ml-2 text-white">Add New Product</span>
          </button>
          <GlobeAltIcon className="w-10 h-10 ml-1 mt-1"></GlobeAltIcon>
          <span className="text-xl mt-3 ml-1">| EN</span>
        </div>
      </div>

      {/* Mobile menu */}
      <Drawer
        opened={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        title="Mazaady Menu"
        closeButtonProps={{
          iconSize: "md",
        }}
      >
        <nav className="p-4">
          <Link
            href={"/"}
            className="block p-2 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href={"/"}
            className="block p-2 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href={"/"}
            className="block p-2 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Gifts
          </Link>
        </nav>
      </Drawer>
    </header>
  );
};

export default Header;
