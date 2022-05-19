import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import MainPage from './pages/MainPage/MainPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='main' element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
