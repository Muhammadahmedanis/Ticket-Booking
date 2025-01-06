import React from 'react'
import { Link } from 'react-router-dom'

function SearchItem({item}) {
  return (
    <div className='searchItem border border-gray-400 rounded flex flex-wrap justify-between gap-4 mb-5 p-5'>
        <img src={item.photos[0]} alt="" className="siImg object-cover h-[200px] w-full md:w-[200px] lg:w-[200px]" />
        <div className="seDesc  flex flex-col gap-2 flex-2">
            <h1 className="siTitle  text-2xl font-bold  text-[#0071c2]">{item?.name}</h1>
            <span className="siDistance text-sm font-medium">{item?.distance}m from center</span>
            <span className="siTaxiOp text-sm bg-[#008009] text-white max-w-fit p-1 rounded">Free airport taxi</span>
            <span className="siSubtitle  text-sm font-bold">Studio Apartment with Air conditioning</span>
            <span className="siFeatures  text-sm font-medium">{item?.desc}</span>
            <span className="siCancelOp  text-sm text-[#008009] font-bold">Free cancellation</span>
            <span className="siCancelOpSubtitle text-sm text-[#008009]">You can cancel later , so lock in this great price today!</span>
        </div>
        <div className="siDetail flex-1 flex flex-col justify-between">
            {item?.rating && <div className="siRating flex justify-between">
                <span className='font-medium'>Excellent</span>
                <button className='font-bold bg-[#003580] py-1 px-2 text-white rounded'>{item?.rating}</button>
            </div>}
            <div className="siDetailText text-right flex flex-col gap-x-5 gap-y-1">
                <span className="span siPrice text-xl font-bold">${item.cheapestPrice}</span>
                <span className="siTaxOp text-[13px] text-slate-400">Includes taxes and fees</span>
                <Link to={`/hotels/${item._id}`}>
                    <button className='siCheckBtn bg-[#0071c2] text-white font-semibold p-1 cursor-pointer rounded'>See availability</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SearchItem