import { useState } from 'react'
import  NavBar  from './Components/NavBar.jsx';
import SoftwareDevelopment from './Components/software-development.jsx';
import MobileAppDevelopment from './Components/Mobile-App-Development.jsx';
import WebSiteDesign from './Components/WebSite-Design.jsx';
import WebApplicationDevelopment from './Components/Web-Application-Development.jsx';
import ECommerceWebsiteDevelopment from './Components/E-commerce-Website-Development.jsx';
import SearchEngineOptimization from './Components/Search-Engine-Optimization.jsx';
import WebHosting from './Components/Web-Hosting.jsx';
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
    <Route path="/mobile-app-development"element={<MobileAppDevelopment/>}/>
    <Route path ="/website-design"element={<WebSiteDesign/>}/>
    <Route path="/webapplication-development"element={<WebApplicationDevelopment/>}/>
    <Route path="/e-commerece-website-development"element={<ECommerceWebsiteDevelopment/>}/>
    <Route path="/search-engine-optimization"element={<SearchEngineOptimization/>}/>
    <Route path="/web-hosting"element={<WebHosting/>}/>
    </Routes>
    </Router> 
    </>
  )
}

export default App
