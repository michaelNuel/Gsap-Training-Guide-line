'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const page = () => {
    const scrollRef = useRef<HTMLDivElement>(null); 

    useEffect(()=>{
      if (!scrollRef.current) return;
      // const boxes = gsap.utils.toArray(scrollRef.current.children); 
      const boxes: HTMLElement[] = gsap.utils.toArray(scrollRef.current.children) as HTMLElement[];
      boxes.forEach((box) =>{
        gsap.to(box, {
            x: 150 * (boxes.indexOf(box) % 2 === 0 ? 5 : 5), 
            rotation: 360, 
            borderRadius: '50%',
            scale: 1.5,
            scrollTrigger:{
                trigger: box,
                start: 'bottom bottom',
                end: 'top 10%',
                scrub: true,
            },
            ease: 'power1.inOut',
        })
      })
    }, [{scope: scrollRef}])
  return (
    <div className='grid place-content-center overflow-hidden'>
      <div className='mt-20 mb-44' >
       <h3>GSAP ScrollTrigger</h3>
       <p>GSAP ScrollTrigger Demo,</p>
      </div>

      <div className='mt-96 w-full h-screen' ref ={scrollRef}>
        <div id='scroll-pink' className='scroll-box w-20 h-20 rounded-lg bg-pink-500' />
        <div id='scroll-blue' className='scroll-box w-20 h-20 rounded-lg bg-blue-500' />
      </div>
    </div>
  )
}

export default page
