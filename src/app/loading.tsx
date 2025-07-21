"use client"
import Image from "next/image";
import loadingImage from '../../public/image/loading.webp'
import { motion } from 'framer-motion';
import Logo from "@/components/Logo";

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white px-10">
      <div className="flex flex-col md:flex-row items-center gap-16 max-w-5xl w-full">
        {/* Text Section */}
        <div className="flex-1">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start gap-2 mb-8">
            <Logo />
          </div>

          {/* Loading Text */}
          <h1 className="text-5xl text-center md:text-start font-bold text-black mb-6">Loading</h1>

          {/* Progress Bar */}
          <div className="w-80 max-w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <motion.div transition={{duration:1}} initial={{x:'-100%'}} animate={{x:0}} className="h-full w-full bg-yellow-400 animate-pulse"></motion.div>
          </div>
        </div>

        {/* Robot Image */}
        <div className="flex-1">
          <Image
            src={loadingImage}
            alt="Loading Robot"
            className=" w-full mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
