import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='border-2 border-black'>
      <h1 className='text-2xl'>Navbar</h1>
      
      <Link className="" to="/">Home</Link>
      <Link to="/workout">Workout</Link>
    </div>
  )
}

export default Navbar
