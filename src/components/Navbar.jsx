import React from 'react'

function Navbar() {
  return (
    <div className='navbar  h-[50px] bg-[#003b95] flex justify-center px-4'>
        <div className='navContainer w-full max-w-[1024px] text-white flex items-center justify-between'>
            <span className='logo font-bold text-2xl'>Booking.com</span>
            <div className='navItems pt-2'>
                <button className='navButton m-4 py-1 px-3 border cursor-pointer text-[#003580] rounded bg-slate-200'>Register</button>
                <button className='navButton ms-3 py-1 px-4 border cursor-pointer text-[#003580] rounded bg-slate-200'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar