import React from 'react'
import Weather from '../assets/Weather.png'
import Uav from '../assets/Uav.png'
import Union from '../assets/Union.png'
import Server from '../assets/Server.png'

const Portfolio = () => {

  const port = [
    {
      id: 1,
      src: Weather,
      title:"Used Open-source Weather API to obtain current weather conditions",
    },

    {
      id:2,
      src: Union,
      title:"Designed and implemented website for Local Union"
    }

  ]
  return (
    <div name="projects" className = "w-full h-[800px] bg-gradient-to-b from-slate-800  via-black to-neutral-900 text-white">
      <div className =" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-[800px] ">
        <div className = "pb-10">
          <p className = "text-4xl font-ubuntu font-bold inline border-b-4 border-sky-400">Projects</p>
        </div>

        <div className = "grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px0">
        { port.map(({id,src, title}) => ( 
          <div key={id}
           className = "shadow-md shadow-sky-400 rounded-lg">
          <img src={src} alt="" className ="rounded-md" height = {100} />
          <div className = " flex items-center justify-center">
            <span className = "mx-3">{title}</span> 
          </div>
        </div>
))}
        <div
           className = "shadow-md shadow-sky-400 rounded-lg">
          <img src={Uav} alt="" className ="rounded-md object-scale-down h-36 w-96" />
          <div className = " flex items-center justify-center">
            <span className = "mx-3">Designed and 3D printed a UAV</span> 
          </div>
        </div>
        <div
           className = "shadow-md shadow-sky-400 rounded-lg">
          <img src={Server} alt="" className ="rounded-md object-scale-down h-36 w-96" />
          <div className = " flex items-center justify-center">
            <span className = "mx-3">Using Ubuntu Server set up a Home-Server</span> 
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Portfolio