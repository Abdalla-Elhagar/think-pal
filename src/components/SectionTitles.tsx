import React from 'react'

function SectionTitles({ headTitle, secondaryTitle }:{ headTitle: string, secondaryTitle?: string }) {
  return (
    <div className={`title centralize-content flex-col text-center `}>
        <h3 className='text-3xl font-bold'>{headTitle}</h3>
        <p className='w-full md:w-[620px]'>{secondaryTitle}</p>
    </div>
  )
}

export default SectionTitles