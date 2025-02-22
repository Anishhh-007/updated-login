import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { app } from './Firebase.js'
import { Link, useNavigate } from 'react-router-dom'
const Signin = () => {
    const navigate = useNavigate();
    const auth = getAuth(app);

    const [email, setEmail] = useState('')
      const [pass, setPass] = useState('')

      const handleOnClick  = async () =>{
       await signInWithEmailAndPassword(auth ,  email , pass);
        try {
            alert("signin scussesfull")
            navigate("/welcome")
        } catch (error) {
            alert("Error", error)
        }
      }
  return (
    <div className='h-[100vh]  flex justify-center items-center  text-white'>

    <div className='w-1/5  bg-black h-[50vh] px-4 py-2 space-y-4 shadow-2xl rounded-2xl'>
    <input className='border-2 px-2 py-1 rounded-xl' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      <input className='border-2 px-2 py-1 rounded-xl' type='password' value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Password' />

      <br />
      <button onClick={handleOnClick} className='bg-blue-700 hover:cursor-pointer hover:bg-blue-600 text-white rounded-3xl px-3 py-2'>Sign In</button>
      <br />
      <Link to={"/"}><p className='hover:cursor-none'>New to this tab?</p><span className='hover:underline hover:text-gray-300'>Register</span></Link>
    </div>
      </div>
  )
}

export default Signin
