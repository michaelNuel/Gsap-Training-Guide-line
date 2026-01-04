'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'

const page = () => {
    useEffect(() => {
        gsap.from('#green-box', {
            x: 250,
            repeat: -1, 
            yoyo: true,
            rotation: 360,
            duration: 2, 
            ease: 'power1.inOut'
        })
    })
  return (
    <div className='grid place-content-center'>
      <div>
        <h3>Gsap From</h3>
      </div>

      <div className='mt-20'>
        <div id='green-box' className='w-20 h-20 bg-green-500 rounded-lg'/>
      </div>
    </div>
  )
}

export default page
