import { useState } from 'react'
import  NavBar  from './Components/NavBar.jsx';
import SoftwareDevelopment from './Components/software-development.jsx';
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
   
    <Router>
     
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/software-development" element={<SoftwareDevelopment />} />
    </Routes>
    </Router> 
    </>
  )
}

export default App
