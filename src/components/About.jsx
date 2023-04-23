import React from 'react'

const About = () => {
  return (
    <div id="about" className = "w-full h-[800px] bg-gradient-to-b from-slate-800  via-black to-neutral-900 text-white">
        <div className = "max-w-screen-lg mx-auto pt-24 flex flex-col justify-center w-full h-full">
            <div className = "pb-12">
                <p className ="text-4xl font-bold font-ubuntu inline border-b-4 border-sky-400">
                   Let's Get to Know Eachother
                </p>
            </div>

            <p className ="text-xl">  I always knew I wanted to build things. Growing up, I would take apart toys and 
            gadgets in an attempt to understand how and why they worked, and then try to rebuild them back to their 
            original state. Fortunately, not much has changed. Growing up with the label of 'computer kid,' I would 
            always be talking about my next build. This interest in building has evolved from a focus on hardware to
             more of a software focus. It has developed into an incredible interest in designing and building web
              applications. One of the things I enjoy about technology is that there's always something new to learn.
               I am self-taught, and I've relied on online resources like 'The Odin Project' to help me develop my 
               skills. I'm constantly exploring new technologies and techniques. Even this website was my attempt
                at learning Tailwind CSS.
             </p>

             <br></br> <br></br>

             <p className ="text-xl mt-5">
             Besides my huge interest in technology, I have a few other hobbies and passions.
              I really enjoy music and discovering new artists. Music is a great source of inspiration for me. 
              Fitness is a huge part of my life; staying active and healthy is not only important for my physical 
              well-being but also for my motivation. I find that the dedication and discipline required for fitness 
              bleed into my regular life and help keep me goal-motivated and focused.
            
             </p>
        </div>
    </div>
  )
}

export default About