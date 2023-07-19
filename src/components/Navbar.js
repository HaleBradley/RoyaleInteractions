import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className='sticky top max-w-full bg-white p-2'>
      <div className='flex items-center justify-between'>
        {/* Left side of Navbar */}
        <h1 className='text-royale-blue font-bold text-xl'>Royale Interactions</h1>
        {/* Right side of Navbar */}
        <div>
          <AiOutlineMenu className='object-right' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar