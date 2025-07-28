import React from 'react'
import MyLink from '../MyLink'

function SignUpSection() {
  return (
    <section className='py-20 bg-[#ff6600]'>
        <div className="container centralize-content flex-col gap-6 text-center">
            <h2 className='text-3xl text-black font-bold'>Let ThinkPal Guide Your Learning Journey</h2>
            <MyLink text='Create Your Free Account' styles='' bgColor='var(--main-color)' textColor='black' href="sign-up" />
        </div>
    </section>
  )
}

export default SignUpSection