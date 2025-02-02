import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Success from './Pages/Success';
import WelcomePage from './components/WelcomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* New welcome page will be the initial route */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Your existing routes - just update the home path */}
          <Route path="/home" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App