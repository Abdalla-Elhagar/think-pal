import React from 'react'
import SectionTitles from '../SectionTitles'

export default function ContactInformation() {
  return (
    <section className='h-[500px] bg-secondary'>
        <div className="container flex justify-center items-center h-full">
            <div className="box shadow-lg w-full lg:w-1/2 h-[250px] rounded-xl text-center flex flex-col justify-center items-center gap-2 bg-white">
                <SectionTitles headTitle='Contact Information' secondaryTitle='For inquiries, please reach out to us:' />
                <div className="content">
                    <p className='font-bold'>contact@thinkpal.com</p>
                    <p className='font-bold'>+20 123 456 7890</p>
                    <p>123 Nile Street, Cairo, Egypt</p>
                </div>
                
            </div>
        </div>
    </section>
  )
}
