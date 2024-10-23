import React from 'react'

function FeaturedProperties() {
  return (
    <div className="fp w-full max-w-[1024px] flex justify-between gap-5 my-2">
        <div className='fpItem flex flex-col border rounded'>
            <img src="https://cf2.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className="fpimg rounded w-full" />
            <span className="fpName font-bold px-2">Aparthotel Stare Maisto</span>
            <span className="fpCity font-semibold px-2 py-1">Madrid</span>
            <span className="fpPrice font-semibold px-2">Staring from $120</span>
            <div className="fpRating p-2">
                <button className='me-2 bg-[#003580] py-0 px-2 text-white rounded'>7.9</button>
                <span className='text-[14px]'>Excellent</span>

            </div>
        </div>
        <div className='fpItem flex flex-col '>
            <img src="https://cf2.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className="fpimg w-full" />
            <span className="fpName font-bold">Aparthotel Stare Maisto</span>
            <span className="fpCity font-semibold">Madrid</span>
            <span className="fpPrice font-semibold">Staring from $120</span>
            <div className="fpRating">
                <button className='me-2 font-bold bg-[#003580] py-0 px-2 text-white'>7.9</button>
                <span className='text-[14px]'>Excellent</span>
                
            </div>
        </div>
        <div className='fpItem flex flex-col '>
                <img src="https://cf2.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className="fpimg w-full" />
                <span className="fpName font-bold">Aparthotel Stare Maisto</span>
                <span className="fpCity font-semibold">Madrid</span>
                <span className="fpPrice font-semibold">Staring from $120</span>
                <div className="fpRating">
                    <button className='me-2 font-bold bg-[#003580] py-0 px-2 text-white'>7.9</button>
                    <span className='text-[14px]'>Excellent</span>
                    
                </div>
        </div>
        <div className='fpItem flex flex-col '>
                <img src="https://cf2.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className="fpimg w-full" />
                <span className="fpName font-bold">Aparthotel Stare Maisto</span>
                <span className="fpCity font-semibold">Madrid</span>
                <span className="fpPrice font-semibold">Staring from $120</span>
                <div className="fpRating">
                    <button className='me-2 font-bold bg-[#003580] py-0 px-2 text-white'>7.9</button>
                    <span className='text-[14px]'>Excellent</span>
                    
                </div>
        </div>
    </div>
  )
}

export default FeaturedProperties