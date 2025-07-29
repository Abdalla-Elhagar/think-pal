import Image from 'next/image'
import React from 'react'
import ourMissionImage from '../../../public/image/AboutPage/ourMission.webp'

export default function OurMission() {
  return (
    <section className=' min-h-screen'>
        <div className="container flex justify-between  items-center h-full flex-col text-center lg:text-start lg:flex-row py-6 gap-4">
            <div className="text w-[500px]">
                <h3 className='text-[30px] font-bold'>Our Mission</h3>
                <p>At ThinkPal, our mission is to empower university students in Egypt and the MENA region with cutting-edge AI education. We strive to bridge the gap between theoretical knowledge and practical application, equipping students with the skills and knowledge necessary to excel in the rapidly evolving field of artificial intelligence.</p>
            </div>
            <div className='w-[450px] bg-secondary shadow-lg rounded-xl'>
                <Image src={ourMissionImage} alt="Our Mission Image" className='w-full rounded-xl' />

            </div>
        </div>
    </section>
  )
}
