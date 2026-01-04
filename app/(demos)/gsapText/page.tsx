import React from 'react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/all'

gsap.registerPlugin(TextPlugin)

const page = () => {
  return (
    <div>
      <div>
         <h3>GSAP Text</h3>
      </div>
    </div>
  )
}

export default page
