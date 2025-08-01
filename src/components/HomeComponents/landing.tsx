
import Comments from "@/components/HomeComponents/Comments";
import SignUpSection from "@/components/HomeComponents/SignUpSection";
import React from 'react'
import Hero from "./Hero";
import Features from "./Features";

export default function Landing() {
  return (
    <div>
        <Hero />
        <Features />
        <Comments />
        <SignUpSection />
        
    </div>
  )
}
