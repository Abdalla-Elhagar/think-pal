import React from 'react'
import SectionTitles from '../SectionTitles'
import person1 from "../../../public/image/AboutPage/team1.webp"
import person2 from "../../../public/image/AboutPage/team2.webp"
import Image from 'next/image'

const team = [
    {
        image: person1,
        name: "Dr. Omar Hassan",
        job: "CEO & Co-Founder"
    },
    {
        image: person2,
        name: "Mr. Karim Mahmoud",
        job: "Lead Instructor"
    },
    {
        image: person1,
        name: "Dr. Omar Hassan",
        job: "CEO & Co-Founder"
    },
    
]

export default function OurTeam() {
  return (
    <section className='py-16'>
        <div className="container">
            
            <SectionTitles headTitle='Meet Our Team' secondaryTitle='We are a dedicated team of educators, developers, and AI enthusiasts committed to your success.' />

            <div className="content grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 justify-center">
                {team.map((person , index) => (
                    <div className='col-span-1 text-center flex flex-col justify-start items-center w-full h-[300px] gap-1' key={index}>
                        <Image src={person.image} alt="team member" className="size-[200px] rounded-full shadow-xl mb-3" />
                        <p className="name font-bold">{person.name}</p>
                        <p className="jop">{person.job}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
