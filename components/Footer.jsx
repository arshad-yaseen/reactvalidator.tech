import React from 'react'
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className='w-full h-96 bg-[#262626]  flex justify-center items-center' >
        <div className="w-auto  flex flex-col items-center">

            <h1 onClick={()=> window.open("https://twitter.com/arrrshadd")} className='font-[500] text-[#A2A2A3]' >Made with ♡ by <span className='hover:text-indigo-500 cursor-pointer' >Arshad Yaseen</span></h1>

            <span onClick={()=> window.open("https://github.com/arshad-yaseen/form-validation-react")} className='text-2xl text-white mt-6 cursor-pointer' ><FaGithub /></span>


        </div>
    </div>
  )
}

export default Footer