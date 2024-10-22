import React from 'react'

function Navbar() {
  return (
    <div className='navbar  h-[50px] bg-[#003580] flex justify-center'>
        <div className='navContainer w-full max-w-[1024px] text-white flex items-center justify-between'>
            <span className='logo font-bold'>lambooking</span>
            <div className='navItems '>
                <button className='navButton m-5 py-1 px-2 border cursor-pointer text-[#003580] bg-white'>Register</button>
                <button className='navButton m-5 py-1 px-2 border cursor-pointer text-[#003580] bg-white'>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar