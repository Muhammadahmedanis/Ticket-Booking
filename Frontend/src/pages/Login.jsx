import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext.jsx'

function Login() {
    const[credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
    })
    const { loading, error, dispatch } = useContext(AuthContext)
  return (
    <div>Login</div>
  )
}

export default Login