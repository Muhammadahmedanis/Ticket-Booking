import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {
    const[credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
    })
    const { loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
      setCredentials((prev) => ({...prev, [e.target.id]:e.target.value }))
    }

    const handleLogin = async(e) => {
      e.preventDefault();
      dispatch({type:"LOGIN_START"})
      try {
        const res = await axios.post("/api/auth/signin", credentials);
        console.log(res);
        if(res.data.isAdmin){
          dispatch({type:"LOGIN_SUCCESS", payload:res.data.details});
          navigate("/");
        }else{
          dispatch({type:"LOGIN_FAIL", payload:error.response.data})
        }
      } catch (error) {
        dispatch({type:"LOGIN_FAIL", payload:{"message": "You are not allowed"}})
      }
    }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
  <div className='login h-auto m-auto p-5 bg-base-100 w-96 shadow-xl rounded'>
    <h1 className='text-center font-bold text-xl'>SignIn</h1>
    <div className='loginContainer w-[300px] m-auto pt-5'>
      <label className="input input-bordered flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
      </svg>
      <input type="email" className="grow" placeholder="email" id='email' onChange={handleChange} />
      </label>
      <label className="input input-bordered flex items-center gap-2 my-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
          <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
        </svg>
        <input type="password" className="grow" placeholder='password' id='password' onChange={handleChange} />
      </label>
      <button disabled={loading} onClick={handleLogin} className="btn btn-outline my-2 px-16 btn-info">Signin</button>
      {error && <span>{error.message}</span>}
    </div>
  </div>
</div>

  )
}

export default Login