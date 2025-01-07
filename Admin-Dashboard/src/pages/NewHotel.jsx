import React, { useActionState, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, InputLabel, MenuItem, Select } from '@mui/material';
import { hotelInputs } from '../constant/form';
import useFetch from '../hooks/useFetch';
import axios from 'axios';

function NewHotel() {
  const[file, setFile] = useState("");
  const [user, submitAction, isPending] = useActionState(send, {
    error: null,
    data: null,
  })
  console.log(file);

  const { data, loading, error} = useFetch("/api/rooms");

  const getSelectedRooms = () => {
    const roomSelect = document.getElementById("roomSelected");
    const selectedOptions = Array.from(roomSelect.selectedOptions);
    return selectedOptions.map((option) => option.value);
  };
  
  async function send(previousState, formData) {
    try {
      const uploadedPhotos = await Promise.all(
        Array.from(file).map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "upload");
  
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dj1uwju7a/image/upload",
            formData
          );
          return uploadRes.data.secure_url; // Collect uploaded file URLs
        })
      );
      
      const selectedRooms = getSelectedRooms();

      const userHotel = {
        name: formData.get("Name"),
        type: formData.get("Type"),
        city: formData.get("City"),
        address: formData.get("Address"),
        distance: formData.get("Distance from City Center"),
        title: formData.get("Title"),
        desc: formData.get("Description"),
        cheapestPrice: formData.get("Price"),
        photos: uploadedPhotos,
        featured: formData.get("featured"),
        room: selectedRooms,
      };
  
      console.log("User Hotel Data:", userHotel);
  
      await axios.post("/api/hotels", userHotel);
      console.log("Hotel data submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
    }
  }
  

  return (
    <div className='dark:bg-[#111] max-w-96 mx-auto text-gray-500'>
      <div className='shadow text-center p-4 text-xl font-bold'>
        <h1>Add New Product</h1>
      </div>
      
      <div className='shadow justify-center flex flex-col flex-wrap py-3'>
        <div>
        <label htmlFor="file" className='flex items-center ms-11 gap-2 cursor-pointer'>
          <img className='w-[120px] h-[120px] mx-auto rounded-full object-cover' src={file ? URL.createObjectURL(file[0]) : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"} alt="" />
        </label>
          <input type="file" multiple onChange={e => setFile(e.target.files)}  id='file' style={{display: "none"}} />
        </div>
        <div className='text-center'>
          <form action={submitAction} className='my-3'>
            {
              hotelInputs.map((input) => (
              <div className='' key={input.id}>
                <TextField size='small' name={input.label} type={input.type} label={input.label} variant='standard' rows={1} color="primary"/>
              </div>
              ))
            }
            <div className='flex my-3 justify-center items-center'>
              <label htmlFor="">Featured</label>
              <select className='border border-black p-1 rounded'  name="featured">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div className='flex my-3 justify-center items-center'>
              <label htmlFor="">Rooms</label>
              <select className='border border-black px-4 h-fit rounded' id='roomSelected' multiple name="room">
               {
                loading ? "loading" : data && data.rooms?.map(room => (
                  <option value={room._id} key={room._id}>{room?.title}</option>
                ))
               }
              </select>
            </div>
            <Button type='submit' variant="contained" style={{padding: "7px 35px", margin: "10px 0"}}>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewHotel;