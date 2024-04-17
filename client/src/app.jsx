import { useState } from 'preact/hooks'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './app.css'
import Signup from './component/Signin'
import Login from './component/login'
import Home from './component/Home'

export function App() {
 

  return (
    <>
       <BrowserRouter>
    <Routes>
     <Route exact path="/" element={<Signup/>}/>
     <Route  path="/login" element={<Login/>}/>
     <Route  path="/register" element={<Home/>}/>
    
     </Routes>
    </BrowserRouter>
    </>
  )
}
