import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext.jsx';

function Navbar() {
  const { user } = useContext(AuthContext);
  
  return (
    <div className='navbar  min-h-[50px] bg-[#003b95] flex justify-center px-3'>
        <div className='navContainer w-full max-w-[1024px] text-white flex items-center justify-between'>
           <Link to="/">
            <span className='logo font-bold text-md lg:text-2xl'>Booking.com</span>
           </Link>
           { user ? user.userName : (<div className='navItems pt-2'>
                <button className='navButton m-4 py-1.5 px-3 border cursor-pointer font-semibold text-[#0071c2] rounded bg-slate-200'>Register</button>
                <button className='navButton ms-3 py-1.5 px-4 border cursor-pointer font-semibold text-[#0071c2] rounded bg-slate-200'>Login</button>
              </div>)
           }
        </div>
    </div>
  )
}

export default Navbar