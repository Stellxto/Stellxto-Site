import{ React, useState, useEffect} from 'react';
import { FaBars, FaTimes} from "react-icons/fa";
import {VscGithubAlt} from 'react-icons/vsc'
import { AiOutlineLinkedin } from 'react-icons/ai'
import {MdOutlineAlternateEmail} from'react-icons/md'
import {Link} from "react-scroll";

const Navbar = () => {

    const [ nav, setNav] =useState(false);
    const [theme, setTheme] =useState("light");
    

useEffect (()=> {
    if(theme === "dark"){
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
},
 [theme]);

const handleThemeSwitch =() => {
    setTheme (theme === "dark" ? "dark" : "light");
};
  return (
    <div 
    className ="flex justify-between items-center w-full h-20 px-6
     text-black dark:text-white fixed dark:bg-stone-900  bg-zinc-300  shadow-lg outline-1">
        <div>
            <button onClick={handleThemeSwitch}
            className =" text-3xl font-ubuntu hover:text-neutral-500">Stellxto~$ </button>
        </div>

        <ul className="flex justify-center top-[0[ left-[]">
        <li className= "px-0 mx-3 cursor-pointer  hover:scale-110 duration-300 ">
            <a href="https://github.com/Stellxto"
             target="_blank" rel="noreferrer">
                <>
                <VscGithubAlt size={30}/>
                </>
            </a>
          </li>
          <li className= "px-0 mx-3 cursor-pointer hover:scale-110 duration-300 ">
            <a href="https://ca.linkedin.com/in/aaron-stellato-a43b431bb"
             target="_blank" rel="noreferrer">
                <>
                <AiOutlineLinkedin size={30}/>
                </>
            </a>
          </li>
          <li className= "px-0 mx-2 cursor-pointer hover:scale-110 duration-300  ">
            <a href="mailto:aa.stellato@gmail.com"
             target="_blank" rel="noreferrer">
                <>
                <MdOutlineAlternateEmail size={30}/>
                </>
                </a>
          </li>
        </ul>

        <ul className="hidden md:flex">
       <li className= "px-4 cursor-pointer capitalize font-medium  text-neutral-500 hover:text-neutral-600 hover:scale-105 duration-200">
       <Link  to="home" spy={true} smooth={true} offset={50} duration={500}> Home </Link>
          </li>
          <li className= "px-4 cursor-pointer capitalize font-medium  text-neutral-500 hover:text-neutral-600 hover:scale-105 duration-200">
          <Link  to="about" spy={true} smooth={true} offset={50} duration={500}> About 
        
        </Link>
          </li>
          <li className= "px-4 cursor-pointer capitalize font-medium  text-neutral-500 hover:text-neutral-600 hover:scale-105 duration-200">
          <Link  to="projects" spy={true} smooth={true} offset={50} duration={500}> Projects </Link>
          </li>
          <li className= "px-4 cursor-pointer capitalize font-medium  text-neutral-500 hover:text-neutral-600 hover:scale-105 duration-200">
      
          </li>
    
        </ul>

       
        <div 
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-neutral-500 md:hidden ">
        {nav ? <FaTimes size={25}/> : <FaBars size={25}/>}
            
        </div>
        {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen
        bg-gradient-to-b from-black to-slate800 text space-y-5 ">
        <li className = "text-neutral-100 text-4xl font-semibold  px-48 py-6 bg-neutral-500 outline-1 rounded shadow hover:bg-neutral-700">home</li>
        <li className = "text-neutral-100 text-4xl font-semibold px-48 py-6 bg-neutral-500 outline-1 rounded shadow hover:bg-neutral-700">About</li>
        <li className = "text-neutral-100 text-4xl font-semibold px-48 py-6 bg-neutral-500 outline-1 rounded shadow hover:bg-neutral-700">Project</li>
        <li className = "text-neutral-100 text-4xl font-semibold px-48 py-6 bg-neutral-500 outline-1 rounded shadow hover:bg-neutral-700">Skills</li>
        </ul>
    
        )}
    
    </div>

  );
}

export default Navbar