import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Workout from './Pages/Workout';
import Welcome from './Pages/Welcome';
import Login from './Pages/Login';

const App = () => {
  return (
    <div className='bg-gray-900'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/workout" element={<Workout />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
