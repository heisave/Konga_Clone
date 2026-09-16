"use client";

import Link from "next/link";
import { Search, Tag, Store, Grid2X2, ChevronDown, HelpCircle, User, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#E4007C] px-40 py-3">
      <div className="mx-auto flex max-w-7xl items-center gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 shrink-0">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F68B1E] text-sm font-bold text-white">
            e
          </span>
          <span className="text-xl font-bold italic text-white">konga</span>
        </Link>

        {/* Sell on Konga */}
        <Link
          href="#"
          className="hidden items-center gap-1.5 text-sm font-medium text-white whitespace-nowrap md:flex"
        >
          <Tag className="h-4 w-4" />
          Sell on Konga
        </Link>

        {/* Konga Outlets */}
        <Link
          href="#"
          className="hidden items-center gap-1.5 text-sm font-medium text-white whitespace-nowrap md:flex"
        >
          <Store className="h-4 w-4" />
          Konga Outlets
        </Link>

        {/* Search bar */}
        <div className="flex flex-1 max-w-xl overflow-hidden rounded">
          <input
            type="text"
            placeholder="Search for products, brands and categories"
            className="w-full border-0 bg-white px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none"
          />
          <button
            type="button"
            aria-label="Search"
            className="flex items-center justify-center bg-[#F68B1E] px-5 transition-colors hover:bg-[#e07d10]"
          >
            <Search className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Right side actions */}
        <div className="ml-auto flex items-center gap-6">
          <Link
            href="#"
            className="hidden items-center gap-1 text-sm font-medium text-white whitespace-nowrap lg:flex"
          >
            <Grid2X2 className="h-4 w-4" />
            Download App
            <ChevronDown className="h-3.5 w-3.5" />
          </Link>

          <Link
            href="#"
            className="hidden items-center gap-1 text-sm font-medium text-white whitespace-nowrap md:flex"
          >
            <HelpCircle className="h-4 w-4" />
            Help
            <ChevronDown className="h-3.5 w-3.5" />
          </Link>

          <Link
            href="#"
            className="hidden items-center gap-1 text-sm font-medium text-white whitespace-nowrap md:flex"
          >
            <User className="h-4 w-4" />
            Login/Sign Up
            <ChevronDown className="h-3.5 w-3.5" />
          </Link>

          <Link href="#" aria-label="Cart" className="flex items-center text-white">
            <ShoppingCart className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </nav>
  );
}