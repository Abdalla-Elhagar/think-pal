import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Social from "./Social";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container border-b border-white/25">
        <div className="top border-white/50 flex justify-between items-center py-14">
          <Logo />
          <NavBar styles="gap-6 hidden lg-gap-14 md:centralize-content" />
          <Social />
        </div>
      </div>
      <div className="container">
        <div className="bottom centralize-content text-[#ccc] py-14">
          <p>© 2024 ThinkPal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
