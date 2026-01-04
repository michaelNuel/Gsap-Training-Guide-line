'use client'
import React, { useEffect } from "react";
import gsap from "gsap";
import { time } from "console";

const page = () => {
    const timeline= gsap.timeline({
        repeat: -1,
        repeatDelay: 1, 
        yoyo: true
    })

    useEffect(() => {
     timeline.to("#yellow-box", {
        x: 250, 
        rotation: 360,
        borderRadius: "50%",
        duration: 2,
        ease: "back.inOut"
     })

     timeline.to("#yellow-box", {
        y: 250, 
        scale: 2, 
        rotation: 360, 
        borderRadius: "50%", 
        duration: 2,
        ease: "back.inOut",
     })
     timeline.to("#yellow-box", {
        y: 0, 
        scale: 1, 
        rotation: 360, 
        borderRadius: "0%", 
        duration: 2,
        ease: "back.inOut",
     })

     timeline.to("#yellow-box", {
        x: 500, 
        scale: 0.5,
        rotation: 360, 
        borderRadius: "8px",
        duration: 2,
        ease: "back.inOut",
     })
    }, [])
  return (
    <div className="grid place-content-center">
      <div>GSAP Timeline</div>
      

      <div className="mt-20">
        <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" onClick={() => {
            if(timeline.paused()) {
                timeline.play()
            } else {
                timeline.pause()
            }
        }}>Play/Pause</button>
        <div id="yellow-box" className="w-20 h-20 mt-20 bg-yellow-500 rounded-lg" />
      </div>
    </div>
  );
};

export default page;
