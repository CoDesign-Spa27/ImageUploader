import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
 
const Navbar = () => {
 const {logout} =useAuth();
const navigate=useNavigate();
 const handleLogout = async () => {
  try {
    await logout();
    navigate("/login"); // Redirect to login page after logout
  } catch (error) {
    console.error("OOps Error logging out:", error);
  }
};

  return (
    <div className='py-10'>
        <nav class=" fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    
    <Link  to={'/'}>
    <a class="flex items-center space-x-3 rtl:space-x-reverse">

<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Recipe Share App</span>
</a>
    </Link>
 
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    <Link to={'/new-recipe'}>
    <button type="button" class="text-gray-800 hover:bg-green-500 bg-green-400  focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center ">Add Recipe</button>
    </Link>
      
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   ">
      <li>
        <Link to={'/'}>
        <a href="#" class="block py-2 px-3 text-white hover:text-green-400 rounded md:bg-transparent md:text-green-300 md:p-0 " aria-current="page">Home</a>
        </Link>
      
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-50 hover:text-gray-400 rounded   md:hover:bg-transparent   md:p-0  ">Contact</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-50 hover:text-gray-400 rounded   md:hover:bg-transparent   md:p-0  ">About</a>
      </li> 
      <li>
        <a onClick={handleLogout} href="#" class="block py-2 px-3 text-gray-50 hover:text-red-400 rounded   md:hover:bg-transparent   md:p-0  ">Logout</a>
      </li> 
      

    </ul>
  </div>
  </div>
</nav> 
    </div>
  )
}

export default Navbar
