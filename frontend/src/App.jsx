import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import Home from './pages/home'
import User from './pages/user'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </Router>
    </>
  );
}

export default App