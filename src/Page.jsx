import React from 'react'
import './index.css'
import Card from './Card'
import { gsap } from "gsap"
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Page = () => {
  
  useGSAP(()=>{
    const tl=gsap.timeline();
    tl.from(".gamename ",{
      top:'-50%',
      delay:5,
      ease:'power1.in'
    })

    tl.from(".small",{
      left:'-20%',
      ease:'power1.in'
    })

    tl.to(".small",{
      y: -15,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    })
     
 
   const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cardcontainer",
    start: "10% 50%",
    end: "50% 50%",
    scrub: true,
  //  markers: true
  }
});

tl2.from(".cards", {
  y: 150,            // start lower, like from the ground
  opacity: 0,
  scale: 0.8,        // make them grow a little
  stagger: 0.2,      // animate each card with a slight delay
  ease: "power3.out",
  duration: 1
});
      
  })
  
  
  
  return (

<>
  <div className='relative page2 h-[100vh] w-full flex flex-col items-center justify-center bg-[#100f17]'>
    <div className='centercon relative w-[1200px] h-[560px] mt-[100px] mb-[100px] rounded-[30px] border-4 border-amber-50 flex items-center justify-center'>


        <h1 className='gamename absolute text-9xl top-[-10%] text-white'>Dreadhall</h1>
      <img src="/mainscenepage.png" alt="example" className='h-full w-full object-cover rounded-[30px]' />


    </div> 

     <div className='absolute small h-[100px] w-[200px] bottom-[30%] left-[70%]'>
      <img src="/swag.png" className='object-cover h-[400px] w-[200px]' alt="player" />
     </div>

    
  </div>

   <div className='cardcontainer flex flex-row iteam-center p-[100px] gap-[30px] h-[100vh] w-full bg-[#100f17]'>

   <Card 
        className='cards h-[400px] w-[600px] '
        title="Objective"
        description="Eliminate all other players and stay alive until you find a way to escape."/>
   <Card 
           className='cards  h-[400px] w-[600px]'
           title="Feature"
           description="Set in a cursed haveli haunted by spirits, with shape-shifting rooms to explore and possession mechanics to overcome."/>
   <Card  
           className='cards h-[400px] w-[600px]'
           title="Graphics"
           description="Dark and atmospheric visual style depicting an eerie and decaying environment."/>
</div>



<div className="steps-to-play h-[100vh] w-full bg-[#100f17] text-white p-8 flex flex-col items-center md-[100px]">
      <h2 className="text-4xl font-bold mb-6">How to Play</h2>

      <div className="space-y-6 w-full max-w-3xl">
        {/* Step 1 */}
        <div className="bg-[#1a1923] p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Step 1: Create or Join a Room</h3>
          <p className="text-gray-300">
            Choose to either create a new room or join an existing one with friends or other players.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-[#1a1923] p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Step 2: Create Room Options</h3>
          <p className="text-gray-300">
            While creating a room, you can set the room name and select the number of players allowed (2 to 8).
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-[#1a1923] p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Step 3: Wait for Players</h3>
          <p className="text-gray-300">
            Once your room is created, wait for others to join. When the required number of players is reached, the game begins.
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-[#1a1923] p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Step 4: Survive and Eliminate</h3>
          <p className="text-gray-300">
            Explore the haunted haveli, avoid supernatural traps, and eliminate other players. Only one escapes.
          </p>
        </div>
      </div>
<a
  href="/downloads/myapp.apk"
  download
  className="bg-green-600 text-white px-4 py-2 mt-[20px] md-[20px] rounded hover:bg-green-700 transition"
>
 Download Game
</a>

    </div>
    
     
  </>
)

}

export default Page
