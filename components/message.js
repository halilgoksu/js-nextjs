import React from 'react'

export default function message({chidren,avatar,username,description}) {
  return (
    <div className='bg-white p-8 boreder-b-2 rounder-b-2 reounder-lg '>
        <div className='flex items-center gap-2'>
            <img src={avatar} className="w-10 rounded-full"/>
            <h2>{username}</h2>

        </div>
        <div className='py-4'>
            <p>{description}</p>
        </div>
        {chidren}
      
    </div>
  )
}
