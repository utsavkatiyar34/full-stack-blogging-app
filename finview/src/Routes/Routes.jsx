import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'


export const Pages = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="*" element={<h2>Error... Page not found.</h2>}></Route>
      </Routes>
  )
}