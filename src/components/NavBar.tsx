"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface navLinksTypes {
  name: string;
  link: string;
}

export const navLinks: navLinksTypes[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Features",
    link: "/features",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

function NavBar({ styles,handleClick }: { styles: string,handleClick:any }) {

  const pathName = usePathname()
  return (
    <nav>
      <ul className={`${styles} lg:centralize-content font-semibold `}>
        {navLinks.map((ele: navLinksTypes, index: number) => (
          <motion.li
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            key={index}
          >
            <Link onClick={handleClick} aria-label={ele.name} href={ele.link} className={`${ele.link === pathName ? "border-b--main border-b text-main " : ""}`}>
              {ele.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
