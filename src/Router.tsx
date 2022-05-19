import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FileUpload from './pages/FileUpload/FileUpload'
import Landing from './pages/Landing/Landing'
import MainPage from './pages/MainPage/MainPage'
import Recent from './pages/Recent/Recent'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/main' element={<MainPage/>}/>
          <Route path='/recent' element={<Recent/>}/>
          <Route path='/uploads' element={<FileUpload/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
