'use client'
import Link from "next/link";
import React from "react";

import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { motion } from 'framer-motion';

const data = [
  {
    icon: <CiTwitter />,
    name: "Twitter",
    path: "#",
  },
  {
    icon: <CiFacebook />,
    name: "Facebook",
    path: "#",
  },
  {
    icon: <FaInstagram />,
    name: "Instagram",
    path: "#",
  },
];

function Social() {
  return (
    <div className="centralize-content gap-2 md:gap-5 text-white text-2xl">
      {data.map((ele, index) => (
        <motion.div whileHover={{scale: 1.1}} transition={{duration: 0.3}} key={index}>
          <Link aria-label={ele.name} href={ele.path}>
            {ele.icon}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

export default Social;
