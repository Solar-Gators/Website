import React, {useState} from 'react'
import logoImage from '../content/assets/images/logo.png'
import {
  Link
} from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

export default function WebsiteNavbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">
          <img width={35} height={35} src={logoImage} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Solar Gators</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/events">Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/sponsors">Sponsors</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/team">The Team</NavLink>
            </NavItem>
          </Nav>

          <Button color="" className="btn-orange" tag={Link} to="/contact">
            <i class="fas fa-envelope-open mr-3"></i>
            Contact
          </Button>

          <Button color="primary" className="ml-4" onClick={() => { window.location.href = "https://www.facebook.com/UFSolarGators/" }}>
            <i class="fas fa-flag-checkered mr-3"></i>
            Join
          </Button>
        </Collapse>
      </Navbar>
  )
}
