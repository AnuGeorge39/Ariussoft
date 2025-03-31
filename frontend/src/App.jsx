import { useState } from 'react'
import  NavBar  from './Components/NavBar.jsx'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
   
    <Router>
    <NavBar/>

    </Router> 
    </>
  )
}

export default App
