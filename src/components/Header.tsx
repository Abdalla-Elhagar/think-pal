"use client";
import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import MyLink from "./MyLink";
import MobileNavBar from "./MobileNavBar";

function Header() {
  return (
    <header className="shadow">
      <div className="container flex justify-between items-center h-[72px] w-full">
        {/* Logo */}
        <Logo />

        {/* Navbar */}
        <NavBar styles="hidden lg:flex gap-10 text-lg" />

        {/* start button */}
        <div className="flex gap-4">
          <MyLink
            styles="hidden lg:flex"
            text="Login"
            href="/login"
            textColor="black"
            bgColor="var(--main-color)"
          />
          <MyLink
            styles="hidden lg:flex"
            text="Start Your Journey"
            href="/sign-up"
            textColor="black"
            bgColor="var(--main-color)"
          />
        </div>

        {/* mobileNav */}
        <MobileNavBar styles="lg:hidden flex" />
      </div>
    </header>
  );
}

export default Header;
