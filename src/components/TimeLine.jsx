import React from 'react'
import TimeLineItem from './TimeLineItem'

const data =[
    {
    year: 2022,
    title: "Creating websites",
    duration: "1 year",
    details: "Work alongside a partner creating websites most noteably created a website used by Local Union 1. this website uses search engine optimization",
    },
    {
    year: 2021,
    title: "Wrote my first line of code",
    duration: "",
    details:"This is when I decided I wanted to pursue a career in the technology sector, I have come along way from printing 'Hello World' and i continue to learn and develop everyday."
    },
    {
    year: 2020,
    title: "Customer Serviced - Adidas",
    duration: "2 years",
    details: "This was my first desk-job and it allowed me to Build up my softskills. learned how to provide better communication with customers and solve issues using critical thinking and comunication",
    },
    {
    year: 2017,
    title: "Starting my journey",
    duration: "",
    details: "Growing up in vaughan the trades are a very traditional route for most young adults to take. being unsure with what i wanted to pursue, I thought of my self as only a trades worker."
    },
];
const TimeLine = () => {

  return (
    <div className="w-full bg-gradient-to-b from-neutral-900  via-neutral-900 to-slate-800 ">
    <div className =" max-w-screen-lg pl-10  mx-auto justify-center flex flex-col md:pl-20 py-14">
        <h1 className =" text-4xl font-bold  font-ubuntu pb-4   text-white">Time-Line</h1>
        {data.map((item, idx) => (
            <TimeLineItem 
            key={idx} 
            year={item.year}
             title={item.title}
              duration={item.duration}
               details={item.details} />
        ))}
    </div>
    </div>
)
}

export default TimeLine