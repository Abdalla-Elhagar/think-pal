'use client'


import Comments from "@/components/Comments";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SignUpSection from "@/components/SignUpSection";
import React from 'react'

export default function Landing() {
  return (
    <div>
        <Hero />
        <Features />
        <Comments />
        <SignUpSection />
        <Footer />
    </div>
  )
}
