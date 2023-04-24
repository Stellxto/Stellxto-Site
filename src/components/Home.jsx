import {React} from 'react'
import hi from '../assets/hi.png'
import { RiArrowRightSFill }from 'react-icons/ri'
import Typed from 'react-typed';
import { Link } from'react-scroll';

const Home = () => {
  return (
  <div name="home" className=" h-screen w-full bg-gradient-to-b from-neutral-900  via-neutral-900 to-slate-800">
    <div className="mx-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
    <div className ="flex flex-col justify-center h-full">
    <div className="">
    <h1 className = "text-5xl sm:text7xl font-semibold font-ubuntu text-white">Hello, my name is Aaron <br/> I am a {" "}
    <span className = " font-semibold text-sky-400 ">
      <Typed 
      strings={[
        "Creator",
        "Designer",
        "Hobbiest",]}
        typeSpeed ={50}
        backSpeed ={25}
        loop 
      >

      </Typed>

    </span> </h1>
    <p className ="text-gray-300 py-4 max-w-md"> Born and raised in Toronto, CA. I am highly motivated self-taught technology hobbiest.
    Currently, I really enjoy working on web applications using technologies like React, CSS, & JavaScript
          </p>
          <div className= "py-1 flex">
            <button  
            className ="group text-semibold font-ubuntu w-fit px-6 py-  flex items-center rounded-lg bg-sky-400
             hover:bg-sky-500 " >
             <Link  to="projects" spy={true} smooth={true} offset={50} duration={500}> Projects</Link>
              <span className="group-hover:rotate-90 duration-300">
              <RiArrowRightSFill size={25}/>
            </span>
            </button>
            <button className =" ml-20 font-ubuntu text-bold  w-fit px-6 py-3 y-4 flex justify-end rounded-md bg-neutral-50
             hover:bg-neutral-300"> <a href = "https://imgur.com/a/LunTEGU" target = "_blank">My Dog</a></button>
          </div>
    

      </div>
      </div>
      <div>
        <img src={hi} alt="hi" className="mx-20 rounded-full" width ={400} />
      </div>
      </div> 
    </div>

  )
}

export default Home

