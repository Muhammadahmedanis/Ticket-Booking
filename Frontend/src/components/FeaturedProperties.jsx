import React from 'react'
import useFetch from '../hooks/useFetch';

function FeaturedProperties() {
    const { data, error, loading } = useFetch("api/hotels/?featured=true&limit=4");
  return (
    <div className="fp flex flex-wrap justify-center h-fit gap-5 my-2">
        {loading ? ("loading") : <>
        {data.hotels?.map(item => (
            <div key={item._id} className='fpItem flex flex-col border rounded w-64'>
                <img  src={item.photos[0]} alt="" className="fpimg rounded w-full h-60" />
                <span className="fpName font-bold px-3 pt-2">{item?.name}</span>
                <span className="fpCity text-sm px-3 py-1">{item?.city}</span>
                <span className="fpPrice font-semibold px-2 py-1">Staring from ${item?.cheapestPrice}</span>
                {item.rating && <div className="fpRating p-2">
                    <button className='me-2 bg-[#003580] py-0 px-2 text-white rounded'>{item.rating}</button>
                    <span className='text-[14px]'>Excellent</span>
                </div>}
            </div>
            ))
        }
        </>}
    </div>
  )
}

export default FeaturedProperties