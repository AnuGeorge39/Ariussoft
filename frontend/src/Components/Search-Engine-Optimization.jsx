import React from 'react';
import './css/Banner.css';
import Contactform from '../Components/ContactForm.jsx';
import FAQ from '../Components/FAQ.jsx';
import BannerImage from "../assets/Images/img2.jpg";
import Footer from './Footer.jsx';




function SearchEngineOptimization(){
  return (
    <>
    
     <div className="banner">
      <img src={BannerImage} className="banner" alt="bannar image " />
      <div className="banner-content">
        <h1>Search Engine Optimization</h1>
        <p>Process of improving a website’s visibility on search engines like Google, Bing, and Yahoo.</p>
      </div>
    </div>
    <div className="Software-development-content">
    <p>Ariussoft offers high-level search engine optimization (SEO) services to improve your company's online visibility and bring you organic visitors. Our goal-driven bunch of professionals see that the website's content, structure, and performance are performing well and are driving results. We handle everything from keyword research to optimization and link-building strategies. This improves your search engine rankings and user experience and makes your business garner more organic leads and increased presence on online platforms.</p>
   
     
      <h3 className="heading">Our Features</h3>
      <ul>
        <li>Keyword Research and Analysis</li>
        <p>Identifying high-value keywords to target your ideal audience effectively.</p>
        <li>On-Page Optimization / Off-Page Optimization</li>
        <p>Optimizing content, meta tags, URLs, and internal linking for better search engine visibility and Building high-quality backlinks to enhance domain authority and rankings.</p>
        <li>Technical SEO</li>
        <p>Improving website speed, mobile responsiveness, and fixing crawl errors for better indexing.</p>
        <li>Content Optimization</li>
        <p>Creating and optimizing engaging, SEO-friendly content that resonates with your audience.</p>
        <li>Local SEO</li>
        <p>Boosting your visibility in local searches with Google My Business optimization and local citations.</p>
        <li>Analytics and Reporting</li>
        <p>Comprehensive insights into website traffic, rankings, and performance through regular reports.</p>
        <li>Competitor Analysis</li>
        <p>Staying ahead by analyzing and outpacing your competition.</p>

         </ul>
      <h3 className="heading">FAQ</h3>
   <FAQ/>
   </div>
    <Contactform/>
    <Footer/>
    </>
   
  );
}

export default SearchEngineOptimization;