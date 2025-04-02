import { useState } from 'react'
import  NavBar  from './Components/NavBar.jsx';
import SoftwareDevelopment from './Components/software-development.jsx';
import MobileAppDevelopment from './Components/Mobile-App-Development.jsx';
import WebSiteDesign from './Components/WebSite-Design.jsx';
import WebApplicationDevelopment from './Components/Web-Application-Development.jsx';
import ECommerceWebsiteDevelopment from './Components/E-commerce-Website-Development.jsx';
import SearchEngineOptimization from './Components/Search-Engine-Optimization.jsx';
import WebHosting from './Components/Web-Hosting.jsx';
import DigitalMarketing from './Components/Digital-Marketing.jsx';
import Branding from './Components/Branding.jsx';
import Advertising from './Components/Advertising.jsx';
import PackageDesign from './Components/Package-Design.jsx';
import AriussoftInfotech from './Components/Ariussoft-Infotech.jsx';
import AriusWebStudio from './Components/Arius-Web-Studio.jsx';
import ThinkThick from './Components/Think-Thick.jsx';
import HostStation from './Components/Host-Station.jsx';
import CoreTeam from './Components/Core-Team.jsx';
import Testimonialswe from './Components/Testimonials-we.jsx';
import ContactYou from './Components/Contact-You.jsx';
import ContactForm from './Components/ContactForm.jsx';
import './App.css'
import Home from './pages/Home';
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
    <Route path="/digital-marketing"element={<DigitalMarketing/>}/>
    <Route path="/branding"element={<Branding/>}/>
    <Route path="/advertising"element={<Advertising/>}/>
    <Route path="/package-design"element={<PackageDesign/>}/>
    <Route path="/ariussoft-infotech"element={<AriussoftInfotech/>}/>
    <Route path="/arius-web-studio"element={<AriusWebStudio/>}/>
    <Route path="/think-thick"element={<ThinkThick/>}/>
    <Route path="/host-station"element={<HostStation/>}/>
    <Route path="/core-team"element={<CoreTeam/>}/>
    <Route path="/testimonials"element={<Testimonialswe/>}/>
    <Route path="/contact"element={<ContactYou/>}/>
    <Route path='/contactform' element={<ContactForm/>}/>
    </Routes>
    </Router> 
    </>
  )
}

export default App
