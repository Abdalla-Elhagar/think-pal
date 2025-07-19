import React from 'react'
import logoImage from '../../public/image/logo.webp'
import Image from 'next/image'

function Logo() {
  return (
    <div className='centralize-content'>
        <Image src={logoImage} alt='Logo Image' width={50} height={50} />
        <h1 className='text-2xl font-bold'>ThinkPal</h1>
    </div>
  )
}

export default Logo