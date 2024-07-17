import React from 'react'
import { Link } from "react-router-dom";
import HomeButton from "./HomeButton";
const Navbar = () => {
  return (
    <div className='sm:flex items-center justify-between gap-40 px-32'>
      <div className=""><h1 className=" text-white text-xl sm:text-4xl  py-5 text-center font-bold   text-transparent">Recipe Sharing App</h1>
      </div>
      <div className='flex gap-5'> 
    <HomeButton />
    <Link to={'/new-recipe'}>
    <button
  className="overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-md text-sm font-bold cursor-pointer relative z-10 group"
>
  Add Recipe
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
  ></span>
  <span
    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-3.5 left-10 z-10"
    >Cook</span
  >
</button>
    </Link>
      </div>
    </div>
  )
}

export default Navbar
