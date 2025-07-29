import React from "react";
import AboutTitle from '@/components/AboutComponents/Title'
import OurMission from "@/components/AboutComponents/OurMission";
import OurStory from "@/components/AboutComponents/OurStory";
import OurTeam from "@/components/AboutComponents/OurTeam";
import ContactInformation from "@/components/AboutComponents/ContactInformation";

export default function About() {
  return (
    <main>
      <AboutTitle />
      <OurMission />
      <OurStory />
      <OurTeam />
      <ContactInformation />
    </main>
  );
}
