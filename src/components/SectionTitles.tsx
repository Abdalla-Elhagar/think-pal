import React from 'react'

function SectionTitles({ headTitle, secondaryTitle }:{ headTitle: string, secondaryTitle: string }) {
  return (
    <div className='title centralize-content flex-col'>
        <h3 className='text-3xl font-bold'>{headTitle}</h3>
        <p className=''>{secondaryTitle}</p>
    </div>
  )
}

export default SectionTitles