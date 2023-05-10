import React, {useState} from 'react'
import logoImage from '../content/assets/images/logo2.png'
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import '../content/styles/Button.scss'

export default function WebsiteNavbar() {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar class="navbar navbar-expand-lg top navbar-scroll" color="light">
        <Navbar.Brand as={Link} to="/">
          <img width={120} height={35} src={logoImage} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggle} />
        <Navbar.Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Nav.Item>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav.Item>
            {/*FIX ME: link to /car page*/}
            <Nav.Item>
              <Nav.Link as={Link} to="/">Cars</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/team">Teams</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/sponsors">Sponsors</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>

          {/*FIX: link to Join Page, not FB*/}
          <div>
            <button className="btn-primary-small" onClick={() => { window.location.href = "https://www.facebook.com/UFSolarGators/" }}>
              Join Us
            </button>
          </div>
        </Navbar.Collapse>
      </Navbar>
  )
}
