"use client"
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

interface LinkProps {
  text: string;
  href:string;
  textColor: string;
  bgColor: string;
  styles?: string;
};

export default function MyLink({ text, textColor, bgColor, styles , href }: LinkProps) {
  return (
          <Link aria-label={text} style={{color: textColor, backgroundColor: bgColor}} className={`hover:scale-105 duration-300 transition-all px-6 py-3 font-bold rounded-lg border border-main ${styles}`} href={href}>{text}</Link>
  );
}