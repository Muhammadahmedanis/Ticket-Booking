import React, { useContext, useState } from 'react';
import useFetch from '../hooks/useFetch.js';
import { SearchContext } from '../context/SearchContext.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoClose } from "react-icons/io5";

function Modal({ hotelId }) {
    const[seletedRoom, setSelectedRoom] = useState([]);

  const closeModal = () => {
    const modal = document.getElementById('my_modal_1');
    if (modal) modal.close(); // Explicitly close the dialog
  };

   const { data, loading, error } = useFetch(`/api/hotels/room/${hotelId}`)
   const { dates } = useContext(SearchContext)
   const getDatesInRange = (start, end) => {
    const date = new Date(start?.getTime());
    let dates = [];
    while(date <= end){
        dates.push(new Date(date).getTime());
        date.setDate(date.getDate() + 1);
    }
    return dates;
   }
   const allDates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);
   const isAvailable = (roomNumber) => {
    const isFound = roomNumber?.unavilableDates?.some(date => allDates.includes(new Date(date).getTime()))
    return !isFound;
   }

   const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value
    setSelectedRoom(checked ? [...seletedRoom, value] : seletedRoom.filter((item) => item != value))
   }

    const navigate = useNavigate();

  const handleClick = async() => {
    try {
      await Promise.all(seletedRoom.map(roomId => {
            const res = axios.put(`/api/rooms/availability/${roomId}`, {dates:allDates})
            return res.data;
      }))
      const modal = document.getElementById('my_modal_1');
      if (modal) modal.close();
      navigate('/')
    } catch (error) {
        
    }
  }

  
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
      <button onClick={closeModal} className="btn absolute right-3 px-3 py-0"> <IoClose size={20}/> </button>
        <p className="py-4">Select your room:</p>
        <div className="modal-action flex flex-col">
            {data.list?.map(item => 
                <div key={item._id} className='border border-black p-2 !mx-0 rounded my-2 flex justify-between items-center'>
                    <div>
                        <div className="rTitle font-bold">{item?.title}</div>
                        <div className="rDesc">{item?.desc}</div>
                        <div className="rMax">Max prople: <b>{item?.maxPeople}</b></div>
                        <div className="rPrice">Price: <b>{item?.price}</b></div>
                    </div>
                    <div className='room flex gap-2'>
                        {item?.roomNumbers.map(roomNumber => (
                            <div key={roomNumber._id} className='flex flex-col justify-center items-center'>
                                <label className='text-[12px]' htmlFor="">{roomNumber.number}</label>
                                <input type="checkbox" className='h-4 rounded-sm w-4' value={roomNumber._id} disabled={!isAvailable(roomNumber)} onChange={handleSelect}/>
                            </div>
                        ))}
                   
                    </div>
                </div>
            )}
            <button onClick={handleClick} className="btn bg-[#0071c2] text-white text-[17px] !mx-0 rounded-sm">Reserve Now!</button>
        </div>
      </div>
    </dialog>
  );
}

export default Modal;
