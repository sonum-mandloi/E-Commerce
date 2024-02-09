import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { useNavigate } from 'react-router';

const NavBar = () => {

  const Navigate = useNavigate()

  return (
    <>
    <nav className='flex justify-between items-center w-[500px] h-[50px] max-sm:w-[100vw] max-sm:h-[300px] max-sm:justify-center max-sm:flex-col max-sm:pt-[50px] '>
       <ul className='flex max-sm:flex-col max-sm:justify-center'>
          <li onClick={()=>Navigate('/')} className='w-[100px] text-blue-400 font-semibold font-serif text-lg hover:bg-blue-400 hover:text-gray-100 h-[50px] flex justify-center items-center max-sm:w-[100vw]'>Home</li>
          <li onClick={()=>Navigate('/About')} className='w-[100px] text-blue-400 font-semibold font-serif text-lg hover:bg-blue-400 hover:text-gray-100 h-[50px] flex justify-center items-center max-sm:w-[100vw]'>About</li>
          <li className='w-[100px] text-blue-400 font-semibold font-serif text-lg hover:bg-blue-400 hover:text-gray-100 h-[50px] flex justify-center items-center max-sm:w-[100vw]'>Products</li>
          <li className='w-[100px] text-blue-400 font-semibold font-serif text-lg hover:bg-blue-400 hover:text-gray-100 h-[50px] flex justify-center items-center max-sm:w-[100vw]'>Contact</li>
       </ul>
       <span className='mr-10 text-2xl text-blue-400 max-sm:flex max-sm:justify-center max-sm:w-[106vw] max-sm:hover:bg-blue-400 max-sm:hover:text-gray-100 max-sm:h-[50px] max-sm:items-center'>
         <FaCartArrowDown />
       </span>
    </nav>
    </>
  )
}

export default NavBar
