import React, { ReactNode } from 'react';

export interface featuresCardTypes {
  icon: ReactNode;
  title: string;
  desc: string
}

function FeaturesCard({icon, title, desc}:featuresCardTypes) {
  return (
    <>
      <div className='text-[50px] text-[#005ae2]'>{icon}</div>
      <h3 className='text-3xl font-bold'>{title}</h3>
      <p>{desc}</p>
    </>
  )
}

export default FeaturesCard