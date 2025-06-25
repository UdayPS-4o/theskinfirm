import React from 'react'
import { DashedSeparator } from './dashed-separator'

export const Stories = () => {
  return (
    <div className='mt-24 px-4'>
      <div className='mx-auto flex items-center justify-center max-w-xs gap-x-2'>
        <DashedSeparator />
        <h3 className='text-[#EC7754] text-3xl font-medium'>Stories</h3>
        <DashedSeparator />
      </div>
      <h2 className="mt-5 text-center font-semibold text-5xl text-[#333333]">Videos</h2>
      <div className='mt-10 flex flex-row items-start justify-center flex-wrap gap-[30px]'>
        <iframe 
        width="100%" 
        className='max-w-sm' 
        height="223" 
        src="https://www.youtube.com/embed/KVBON1lA9N8?si=mcogS434RTe2IpGV" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen 
        />
        <iframe 
        width="100%" 
        className='max-w-sm' 
        height="223" 
        src="https://www.youtube.com/embed/KVBON1lA9N8?si=mcogS434RTe2IpGV" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen 
        />
        <iframe 
        width="100%" 
        className='max-w-sm' 
        height="223" 
        src="https://www.youtube.com/embed/KVBON1lA9N8?si=mcogS434RTe2IpGV" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen 
        />
      </div>
    </div>
  )
}
