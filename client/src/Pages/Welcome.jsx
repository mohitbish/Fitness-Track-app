import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-[#202124]'>
        <div className='flex flex-row space justify-between px-5 sm:px-10   text-white border-2 border-gray-500' >
            <Link className='sm:text-xl py-5 sm:py-10 py-x sm:px-10 font-bond uppercase hover:bg-[#323639]' to="/">fit-trk</Link>
            <Link className='sm:text-xl py-5 sm:py-10 py-x sm:px-10 font-bond uppercase underline hover:bg-[#323639]' to="/Login">Log In</Link>
        </div>
        
    </div>
  )
}

export default Welcome
