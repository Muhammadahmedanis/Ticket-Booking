import React from 'react'
import useFetch from '../hooks/useFetch.js'

function Featured() {
    const { data, loading, error } = useFetch("api/hotels/countByCity/?cities=karachi,lahore,Islamabad");
    // console.log(data);
    // console.log(loading);
    
  return (
    <div className="featured w-auto h-auto flex flex-wrap justify-center gap-5 z-10 my-6">
        {loading ? ("Loading please wait") : (
        <>
            <div className="featuredItem relative text-white rounded overflow-hidden h-60 w-80">
            <img className="featuredimg w-full object-cover" src="https://cf2.bstatic.com/xdata/images/hotel/square600/283036728.webp?k=b861d0fdaee2b84a749d57c65c7a112478b33d958bb97ba7b74f06f313b90656&o=" alt="" />
            <div className="featuredTitle absolute bottom-5 left-5">
                <h1 className="text-2xl font-bold">Karachi</h1>
                <h1>{''} properties</h1>
            </div>
        </div>
        <div className="featuredItem relative text-white rounded overflow-hidden h-60 w-80">
            <img className="featuredimg w-full object-cover" src="https://cf2.bstatic.com/xdata/images/hotel/square600/283036728.webp?k=b861d0fdaee2b84a749d57c65c7a112478b33d958bb97ba7b74f06f313b90656&o=" alt="" />
            <div className="featuredTitle absolute bottom-5 left-5">
                <h1 className="text-2xl font-bold">Lahore</h1>
                <h1>{''} properties</h1>
            </div>
        </div>
        <div className="featuredItem relative text-white rounded overflow-hidden h-60 w-80">
            <img className="featuredimg w-full object-cover" src="https://cf2.bstatic.com/xdata/images/hotel/square600/283036728.webp?k=b861d0fdaee2b84a749d57c65c7a112478b33d958bb97ba7b74f06f313b90656&o=" alt="" />
            <div className="featuredTitle absolute bottom-5 left-5">
                <h1 className="text-2xl font-bold">Islamabad</h1>
                <h1>{''} properties</h1>
            </div>
        </div>
        </>
    )}
    </div>
  )
}

export default Featured