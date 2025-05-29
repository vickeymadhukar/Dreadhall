import React, { useState } from 'react'
import './index.css'
import { gsap } from "gsap"
import {useGSAP} from '@gsap/react'
const App = () => {

let [showcontent, setShowcontent] = useState(false);

useGSAP(()=>{

  const tl= gsap.timeline();
 
   tl.to(".vi-mask-group",{
    rotate:20,
    duration:5,
    delay:1,
    ease:"power4.inOut",
    transformOrigin: "50% 50%",
    scale:10,
    opacity:0,
     onUpdate:function(){
      if(this.progress()>0.8){
        document.querySelector(".svg")?.remove();
        setShowcontent(true);
        this.kill();
      }
    }
   })
   
   

})



  return (
    <>
    
    <div>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000000]">
        <svg className='w-full h-full' preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100" height="100" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"      
                  dominantBaseline="middle"
                  fontFamily="MyFont">
                  Dread Hall
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="/mainscenepage.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
 


    </div> 

   
    </> 
  );
}

export default App
