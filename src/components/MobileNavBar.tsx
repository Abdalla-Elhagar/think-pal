"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import NavBar from "./NavBar";
import MyLink from "./MyLink";

function MobileNavBar({ styles }: { styles: string }) {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setShowNav(false);
      }
    };

    if (showNav) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.classList.add("overflow-hidden");
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    };
  }, [showNav]);

  return (
    <div className={styles}>
      <button
        aria-label="open menu"
        className="text-4xl"
        onClick={() => setShowNav(true)}
      >
        <IoIosMenu />
      </button>

      <AnimatePresence>
        {showNav && (
          <div className="fixed top-0 right-0 w-screen h-screen bg-black/55 z-[1000]">
            <motion.nav
              ref={navRef}
              key="box"
              transition={{ duration: 0.3 }}
              initial={{ x: "300px" }}
              animate={{ x: "0" }}
              exit={{ x: "300px" }}
              className="absolute top-0 right-0 w-[300px] h-screen shadow bg-white pt-20 pb-10 text-center flex flex-col justify-between z-[1001]"
            >
              <button
                aria-label="close menu"
                className="absolute top-5 left-5 text-2xl"
                onClick={() => setShowNav(false)}
              >
                <IoClose />
              </button>

              <NavBar styles="flex flex-col gap-6 text-2xl h-full mobile-navbar" />

              <div className="px-4 flex flex-col gap-4">
                <MyLink
                  styles="w-full"
                  text="login"
                  href="/login"
                  textColor="black"
                  bgColor="var(--main-color)"
                />
                <MyLink
                  styles="h-fit w-full"
                  text="Start Your Journey"
                  href="/sign-up"
                  textColor="black"
                  bgColor="var(--main-color)"
                />
              </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNavBar;
