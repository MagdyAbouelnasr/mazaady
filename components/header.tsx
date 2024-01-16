"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, Burger, Drawer, HoverCard, Text } from "@mantine/core";
import {
  BellIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

function Header({ onSearchIconClick }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Burger
          aria-label="burger-menu"
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
        <HoverCard width={200} shadow="md">
          <HoverCard.Target>
            <button onClick={onSearchIconClick}>
              <MagnifyingGlassIcon
                width={25}
                className=" cursor-pointer"
              ></MagnifyingGlassIcon>
            </button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text className="sm">Click For Form Search</Text>
          </HoverCard.Dropdown>
        </HoverCard>
        <BellIcon width={25} className="mr-8 ml-8 cursor-pointer"></BellIcon>
        <Avatar src="user-image.jpg" size="lg" alt="user photo" />
        <div className="hidden  md:flex">
          <button
            type="button"
            className="flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-500 hover:from-pink-500 hover:to-yellow-500 mr-4 ml-4 w-48 h-12 rounded"
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
          iconSize: "24px",
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
}

export default Header;
