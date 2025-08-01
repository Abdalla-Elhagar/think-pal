import Image from 'next/image'
import React from 'react'
import ourStoryImage from '../../../public/image/AboutPage/ourStory.webp'


export default function OurStory () {
  return (
    <section className='bg-secondary min-h-screen'>
        <div className="container flex flex-col-reverse text-center lg:text-start lg:flex-row justify-between items-center h-full gap-6 py-6">
            <div className='w-full md:w-[450px] bg-secondary shadow-lg rounded-xl'>
                <Image src={ourStoryImage} alt="Our Mission Image" className='w-full rounded-xl' />

            </div>
            <div className="text w-full md:w-[500px]">
                <h3 className='text-[30px] font-bold'>Our Story</h3>
                <p>ThinkPal was founded in 2020 by a group of passionate educators and AI experts who recognized the immense potential of AI in shaping the future. Driven by a shared vision to democratize AI education, we embarked on a journey to create a platform that offers high-quality, accessible, and industry-relevant AI courses tailored to the unique needs of students in the region.</p>
            </div>
            
        </div>
    </section>
  )
}
