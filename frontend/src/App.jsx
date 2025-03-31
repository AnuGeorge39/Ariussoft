import { useState } from 'react'
import  NavBar  from './Components/NavBar.jsx';
import Carousel from './Components/Carousel.jsx';
import Aboutus from './Components/About_us.jsx';
import Services from './Components/Services.jsx';
import Clients from './Components/Clients.jsx';
import Testimonials from './Components/Testimonials.jsx';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
   
    <Router>
    <NavBar/>
    <Carousel/>
    <Aboutus/>
    <Services/>
    <Clients/>
    <Testimonials/>

    </Router> 
    </>
  )
}

export default App
