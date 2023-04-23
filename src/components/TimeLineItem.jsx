import React from 'react'

const TimeLineItem = ({year, title, duration, details}) => {
  return (
    <ol className=" flex flex-col md:flex-row relative border-l border-stone-200">
        <li className="mb-10 ml-5">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white"/>
            <p className= "flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:tex-sm">
                <span className ="inline-block px-3 py-1 font-semtbold text-white bg-sky-400 rounded-lg"> {year}</span>
                <span className ="text-lg font-semibold text-sky-400">{title}</span>
                <span className ="my-1 text-sm font-normal leading-none text-stone-400" >{duration}</span>
            </p>
            <p>
                <span className =" my-2 text-base font-normal text-white">{details}</span>
            </p>
        </li>
    </ol>
  )
}

export default TimeLineItem
