import React, { useActionState, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { CloudUploadOutlined } from '@ant-design/icons';
import axios from 'axios'

function New({title, inputs}) {
  const[file, setFile] = useState("");

  const[user, submitAction, isPending] = useActionState(send, {
    error: null,
    data: null,
  })

  async function send(previousState, formData) {
    try {
      const formData = new FormData(event.target);
      formData.append("file", file);
      formData.append("upload_preset", "upload");
    
      try {
        const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dj1uwju7a/image/upload",formData);
        console.log("Upload Response:", uploadRes.data);
    
        const userData = {
          userName: formData.get("Username"),
          email: formData.get("Email"),
          password: formData.get("Password"),
          phone: formData.get("Phone"),
          country: formData.get("Country"),
          city: formData.get("City"),
          img: uploadRes.data.secure_url,
        };
        await axios.post("/api/auth/signup", userData);
        console.log("User Data:", userData);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } catch (error) {
      console.error("Form error:", error);
    }    
  }

  return (
    <div className='dark:bg-[#111] max-w-96 mx-auto text-gray-500'>
      <div className='shadow text-center p-4 text-xl font-bold'>
        <h1>{title}</h1>
      </div>
      
      <div className='shadow justify-center flex flex-col flex-wrap py-3'>
        <div>
        <label htmlFor="file" className='flex items-center ms-11 gap-2 cursor-pointer'>
          <img className='w-[120px] h-[120px] mx-auto rounded-full object-cover' src={file ? URL.createObjectURL(file) : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"} alt="" />
        </label>
          <input onChange={e => setFile(e.target.files[0])} type="file" id='file' style={{display: "none"}} />
        </div>
        <div className='text-center'>
          <form action={submitAction} className='my-3'>
            {
              inputs.map((input) => (
              <div className='' key={input.id}>
                <TextField size='small' name={input.label} type={input.type} label={input.label} variant='standard' rows={1} color="primary"/>
              </div>
              ))
            }
              <Button type='submit' variant="contained" style={{padding: "7px 35px", margin: "10px 0"}}>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default New