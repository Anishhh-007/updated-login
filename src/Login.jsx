import React, { useState } from 'react'
import { app } from './Firebase.js'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { doc, setDoc, getFirestore } from 'firebase/firestore'
import { Link } from 'react-router-dom'
const db = getFirestore(app)
const auth = getAuth(app)

const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')


  const handleOnClick = async () => {
    try {
      // Create user with email/password in Firebase Auth
      await createUserWithEmailAndPassword(auth, email, pass)
      const user = auth.currentUser

      // Store additional info in Firestore (without the password)
      await setDoc(doc(db, 'deployed_info', user.uid), {
        email: user.email,
        first_name: fname,
        last_name: lname,
        
      })

      alert('Signup success!!')
    } catch (error) {
      console.error('Error during sign-up:', error)
      alert('Signup failed! ' + error.message)
    }
  }

  return (
    <div className='h-[100vh]  flex justify-center items-center  text-white'>

    <div className='w-1/5  bg-black h-[50vh] px-4 py-2 space-y-4 shadow-2xl rounded-2xl'>
    <input className='border-2 px-2 py-1 rounded-xl' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      <input className='border-2 px-2 py-1 rounded-xl' type='password' value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Password' />
      <input className='border-2 px-2 py-1 rounded-xl' type='text' value={fname} onChange={(e) => setFname(e.target.value)} placeholder='First Name' />
      <input className='border-2 px-2 py-1 rounded-xl' type='text' value={lname} onChange={(e) => setLname(e.target.value)} placeholder='Last Name' />
      <br />
      <button onClick={handleOnClick} className='bg-blue-700 hover:cursor-pointer hover:bg-blue-600 text-white rounded-3xl px-3 py-2'>Register</button>
      <br />
      <Link to={"/signin"}><p>Already Have An Account?</p><span className='hover:underline hover:text-gray-300'>Sign Up</span></Link>
    </div>
      </div>)
}
export default Login;