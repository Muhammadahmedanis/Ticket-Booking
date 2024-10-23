import React from 'react'

function SearchItem() {
  return (
    <div className='searchItem border border-gray-400 rounded p-2 flex justify-between gap-4 mb-5'>
        <img src="https://cf2.bstatic.com/xdata/images/hotel/square240/597733028.jpg?k=f4dbee0ef4cf96aaebb8b5eb92cf20fbfbe60445c661aa96f27cf40f1b24c593&o=" alt="" className="siImg object-cover h-[200px] w-[200px]" />
        <div className="seDesc  flex flex-col gap-2 flex-2">
            <h1 className="siTitle  text-2xl font-bold  text-[#0071c2]">Tower Street Apartments</h1>
            <span className="siDistance text-sm font-medium">500m from center</span>
            <span className="siTaxiOp text-sm bg-[#008009] text-white max-w-fit p-1 rounded">Free airport taxi</span>
            <span className="siSubtitle  text-sm font-bold">Studio Apartment with Air conditioning</span>
            <span className="siFeatures  text-sm font-medium">Entire studio <b>·</b> 1 bathroom <b>·</b> 21m<sup>2</sup> 1 full bed</span>
            <span className="siCancelOp  text-sm text-[#008009] font-bold">Free cancellation</span>
            <span className="siCancelOpSubtitle text-sm text-[#008009]">You can cancel later , so lock in this great price today!</span>
        </div>
        <div className="siDetail flex-1 flex flex-col justify-between">
            <div className="siRating flex justify-between">
                <span className='font-medium'>Excellent</span>
                <button className='font-bold bg-[#003580] py-1 px-2 text-white rounded'>8.9</button>
            </div>
            <div className="siDetailText text-right flex flex-col gap-x-5 gap-y-1">
                <span className="span siPrice text-xl font-bold">$123</span>
                <span className="siTaxOp text-[13px] text-slate-400">Includes taxes and fees</span>
                <button className='siCheckBtn bg-[#0071c2] text-white font-semibold p-1 cursor-pointer rounded'>See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem