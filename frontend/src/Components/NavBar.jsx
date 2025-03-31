import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./css/NavBar.css";
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className='d-flex align-items-center justify-content-around  '>
      <Navbar.Brand href="#home" className="text-center">
  <h1 className="m-0 text-info" style={{ wordSpacing: "-1px" }}>ariussoft</h1>
  <span style={{ fontSize: "1rem", wordSpacing: "-1px" }}>Infotech Pvt Ltd</span>
</Navbar.Brand>

       <div>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="WHAT" id="collapsible-nav-dropdown">
          <NavDropdown.Item as={Link} to="/software-development">Software Development</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/mobile-app-development">Mobile App Development</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/website-design">WebSite Design</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/webapplication-development">Web Application Development</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/e-commerece-website-development">E-Commerce Website Development</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/search-engine-optimization">Search Engine Optimization</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/web-hosting">Web Hosting</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/digital-marketing">Digital Marketing</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/social-media-campaigns">Social Media Campaigns</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/branding">Branding</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/advertising">Advertising</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/package-design">Package Design</NavDropdown.Item>

          </NavDropdown>
            
            <NavDropdown title="WE" id="collapsible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/ariussoft-infotech">Ariussoft Infotech Pvt Ltd</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/arius-web-studio">Arius Web Studio</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/think-thick">Think Thick</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/host-station">Host Station</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/core-team">Core Team</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/testimonials">Testimonials</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/insights">Insights</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="DO" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Portfolio</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gallery</NavDropdown.Item>
              </NavDropdown>
              
            <NavDropdown title="FOR" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Clients</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="YOU" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Feedback</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Get a Quote</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
            </NavDropdown>           
          </Nav>
        </Navbar.Collapse>
       </div>
        
        <Navbar.Brand href="Contactus.jsx" className="Quote">Get a Quote</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
