import React from 'react'

function MailList() {
  return (
    <div className="mail w-full mt-12 bg-[#003580] text-white flex flex-col items-center gap-5 p-10">
        <h1 className="mailTitle text-2xl font-bold">Save time, save money!</h1>
        <span className="mailDes">Sign up ans we'll send the best deals to you</span>
        <div className="mailInputContainer text-center">
            <input className='w-72 h-10 p-2 border-none me-2 rounded text-black outline-none'type="text" placeholder='Your Email' />
            <button className='py-0 px-3 h-10 bg-[#0071c2] m-2 text-white font-semibold rounded cursor-pointer'>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList