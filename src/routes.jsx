import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Camera from './Component/Camera'
import Facerecognition from './Component/Facerecognition'

const RoutPage = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' exact element={Camera} />
            <Route path='/recognize' element={Facerecognition} />
        </Routes>
    </Router>
  )
}

export default RoutPage