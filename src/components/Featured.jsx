import React from 'react'

function Featured() {
  return (
    <div className="featured w-full max-w-[1024px] flex justify-between gap-5 z-10">
        <div className="featuredItem relative text-white rounded overflow-hidden h-60">
            <img className="featuredimg w-full object-cover" src="https://cf2.bstatic.com/xdata/images/hotel/square600/283036728.webp?k=b861d0fdaee2b84a749d57c65c7a112478b33d958bb97ba7b74f06f313b90656&o=" alt="" />
            <div className="featuredTitle absolute bottom-5 left-5">
                <h1 className="text-2xl font-bold">Dublin</h1>
                <h1>123 properties</h1>
            </div>
        </div>
        <div className="featuredItem relative text-white rounded overflow-hidden h-60">
            <img className="featuredimg w-full object-cover" src="https://cf2.bstatic.com/xdata/images/hotel/square600/283036728.webp?k=b861d0fdaee2b84a749d57c65c7a112478b33d958bb97ba7b74f06f313b90656&o=" alt="" />
            <div className="featuredTitle absolute bottom-5 left-5">
                <h1 className="text-2xl font-bold">Austin</h1>
                <h1>321 properties</h1>
            </div>
        </div>
        <div className="featuredItem relative text-white rounded overflow-hidden h-60">
            <img className="featuredimg w-full object-cover" src="https://cf2.bstatic.com/xdata/images/hotel/square600/283036728.webp?k=b861d0fdaee2b84a749d57c65c7a112478b33d958bb97ba7b74f06f313b90656&o=" alt="" />
            <div className="featuredTitle absolute bottom-5 left-5">
                <h1 className="text-2xl font-bold">Reno</h1>
                <h1>523 properties</h1>
            </div>
        </div>
    </div>
  )
}

export default Featured