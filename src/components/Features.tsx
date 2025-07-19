import React from "react";
import SectionTitles from "./SectionTitles";
import { PiGraduationCap } from "react-icons/pi";
import { BiBarChart } from "react-icons/bi";
import { PiRobot } from "react-icons/pi";
import FeaturesCard, { featuresCardTypes } from "./FeaturesCard";

const featuresCards:featuresCardTypes[] = [
  {
    icon: <PiGraduationCap />,
    title: "Personalized Learning Roadmaps",
    desc: "Tailored study plans based on your strengths and weaknesses.",
  },
  {
    icon: <BiBarChart />,
    title: "Smart Test Analysis",
    desc: "In-depth analysis of your IQ, EQ, and behavior.",
  },
  {
    icon: <PiRobot />,
    title: "Interactive AI Assistant",
    desc: "Get instant support and guidance from our AI assistant.",
  },
];

function Features() {
  return (
    <section className="bg-secondary">
      <div className="container py-14">
        <SectionTitles
          headTitle="Why ThinkPal?"
          secondaryTitle="Empowering students with personalized learning and career guidance."
        />
        {/* look into globals.css to understand what is content-with-3 */}
        <div className="content content-with-3 ">
          {featuresCards.map((card, index) => (
            <div
              key={index}
              className="card-style bg-white"
            >
              <FeaturesCard
                icon={card.icon}
                title={card.title}
                desc={card.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
