import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'

import Signin from './Signin.jsx'
import Login from './Login.jsx'
import Welcome from './Welcome.jsx'
const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route index  element = {<Login />}/>
   
      <Route path='signin'  element = {<Signin />}/>
      <Route path='welcome'  element = {<Welcome />}/>
    </Route>
  ))
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
