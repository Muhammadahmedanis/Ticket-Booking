import React, { useActionState, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { roomInputs } from '../constant/form';
import useFetch from '../hooks/useFetch';
import axios from 'axios';

function NewRoom() {
  const[hotelId, setHotelId] = useState(null);
  const [user, submitAction, isPending] = useActionState(send, {
    error: null,
    data: null,
  })
  
  const { data, loading, error} = useFetch("/api/hotels");

  async function send(previousState, formData) {
    try {
      const roomNumber = formData.get("room").split(",").map(room => ({number:room}));

      const userRoom = {
        title: formData.get("Title"),
        price: formData.get("Price"),
        desc: formData.get("Description"),
        maxPeople: formData.get("Max People"),
        roomNumbers: roomNumber,
      }
        console.log("User Data:", userRoom);
        await axios.post(`/api/rooms/${hotelId}`, userRoom);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='dark:bg-[#111] max-w-96 mx-auto text-gray-500'>
      <div className='shadow text-center p-4 text-xl font-bold'>
        <h1>Add New Room</h1>
      </div>
      
      <div className='shadow justify-center flex flex-col flex-wrap py-3'>
        <div className='text-center'>
          <form action={submitAction} className=' my-3'>
            {
              roomInputs.map((input) => (
              <div className='' key={input.id}>
                <TextField size='small' name={input.label} type={input.type} label={input.label} variant='standard' rows={1} color="primary"/>
              </div>
              ))
            }
            <div className='flex my-3 justify-center items-center gap-1'>
              <label>Choose A hotel</label>
              <select onChange={e => setHotelId(e.target.value)} id='hotelId' className='border border-black p-1 rounded'  name="selectHotel">
                {
                  loading ? "loading" : data && data.hotels?.map((hotel) => (
                      <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
                  ))
                }
              </select>
            </div>
            <div className='flex items-center justify-center gap-1'>
              <label htmlFor="">Rooms</label>
              <textarea className='border border-black rounded' name="room" id="" placeholder=''></textarea>
            </div>
            <Button type='submit' variant="contained" style={{padding: "7px 35px", margin: "10px 0"}}>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewRoom;