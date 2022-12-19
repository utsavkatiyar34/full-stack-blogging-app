import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Profile } from '../Pages/Profile'
import { Signup } from '../Pages/Signup'


export const Pages = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/signup" element={<Signup/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/profile" element={<Profile/>}></Route>
        <Route path="*" element={<h2>Error... Page not found.</h2>}></Route>
      </Routes>
  )
}