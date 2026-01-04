'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'

const page = () => {

    useEffect(()=> {
     gsap.to('.stagger-box', {
        y: 250, 
        rotatetion: 360,
        duration: 2,
        borderRadius: "50%",
        repeat: -1,
        yoyo: true,
        // stagger: 0.5
        stagger:{
            amount: 1.5, 
            grid: [2, 1],
            axis: 'y', 
            ease: 'circ.inOut', 
            from: 'center'
        }
     })
    }, [])
  return (
    <div className='grid place-content-center'>
      <div>
        GSAP Stagger 
      </div>

      <div className='mt-20'>
       <div className="flex gap-5">
         <div className='w-20 h-20 bg-indigo-200 rounded-lg stagger-box'></div>
         <div className='w-20 h-20 bg-indigo-400 rounded-lg stagger-box'></div>
         <div className='w-20 h-20 bg-indigo-500 rounded-lg stagger-box'></div>
         <div className='w-20 h-20 bg-indigo-600 rounded-lg stagger-box'></div>
         <div className='w-20 h-20 bg-indigo-700 rounded-lg stagger-box'></div>
         <div className='w-20 h-20 bg-indigo-800 rounded-lg stagger-box'></div>
         <div className='w-20 h-20 bg-indigo-900 rounded-lg stagger-box'></div>
       </div>
      </div>
    </div>
  )
}

export default page
