"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";

gsap.registerPlugin(TextPlugin);

const page = () => {
  useEffect(() => {
    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });

    gsap.fromTo('.para', {
        opacity: 0, 
        y: 20
    }, {
        opacity: 1,
        y: 0,
        ease: 'power1.inOut', 
        delay: 1,
        stagger: 0.1,

    })
  }, []);
  return (
    <div className="mx-24 mt-12">
      <div>
        <h1 id="text" className="opacity-0 translate-y-10">
          GSAP Text
        </h1>

        <p className="mt-5 para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem enim doloremque quaerat quibusdam odit numquam hic voluptatum nulla at repudiandae. Porro tempore obcaecati dolorum eligendi harum quaerat voluptas inventore ab doloremque ad architecto praesentium quidem laudantium, vel reiciendis! Illum, a!</p>
      </div>
    </div>
  );
};

export default page;
