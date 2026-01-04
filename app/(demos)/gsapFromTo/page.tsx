'use client'
import React, { useEffect } from "react";
import gsap from "gsap";

const page = () => {
  useEffect(() => {
    gsap.fromTo(
      "#red-box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        rotation: 360,
        borderRadius: "50%",
        duration: 2,
        ease: "sine.out",
      }
    );
  });
  return (
    <div className="grid place-content-center">
      <div>GSAP FromTo</div>

      <div className="mt-20">
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
      </div>
    </div>
  );
};

export default page;
