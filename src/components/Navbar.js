import React, {useState} from 'react'
import logoImage from '../content/assets/images/logo2.png'
import { Link } from "react-router-dom";
import {Nav, Navbar, NavDropdown, Container} from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import '../content/styles/Button.scss'


export default function WebsiteNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    function MenuItems ({on_mobile}) {
        let PageLink = ({path, tag}) => {
            if (on_mobile) {
                return (
                    <Nav.Link as={Link} to={path} style={{margin: "5px 10px 20px", padding: "0"}}>{tag}</Nav.Link>
                )
            }
            else {
                return (
                    <Nav.Link as={Link} to={path} style={{margin: "25px 10px 20px", padding: "0"}}>{tag}</Nav.Link>
                )
            }
        }

        if (on_mobile) {
            return (
                <>
                    <Nav style={{textAlign: "center"}}>
                        <PageLink path="/about" tag="About"/>
                        <PageLink path="/cars" tag="Cars"/>
                        <PageLink path="/team" tag="Team"/>
                        <PageLink path="/sponsors" tag="Sponsors"/>
                        <PageLink path="/contact" tag="Contact"/>
                        <div style={{alignContent: "center"}}>
                            <button className="btn-primary-small" onClick={() => { window.location.href = "/donate" }}>
                                Donate
                            </button>
                        </div>
                    </Nav>

                </>
            )
        }
        else {
            return (
                <>
                    <Nav className="mr-auto" navbar style={{textAlign: "center"}}>
                        <PageLink path="/about" tag="About"/>
                        <PageLink path="/cars" tag="Cars"/>
                        <PageLink path="/team" tag="Team"/>
                        <PageLink path="/sponsors" tag="Sponsors"/>
                        <PageLink path="/contact" tag="Contact"/>
                    </Nav>
                    <div style={{justifySelf: "flex-end"}}>
                        <button className="btn-primary-small" onClick={() => { window.location.href = "/donate" }}>
                            Donate
                        </button>
                    </div>
                </>
            )
        }
    }

    /* mql = media query list (https://dev.to/yanns1/how-to-render-different-components-based-on-screen-size-2p35) */
    const mql = window.matchMedia('(max-width: 425px)');
    let mobileView = mql.matches;

    if (mobileView) {
        return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand as={Link} to="/">
                    <img width={120} height={35} src={logoImage} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle onClick={toggle} aria-controls="responsive-navbar-nav">
                    <i className="navbar-toggler-icon" style={{border: "none"}}/>
                </Navbar.Toggle>
                <Navbar.Collapse navbar id="responsive-navbar-nav">
                    <MenuItems on_mobile={mobileView}/>
                </Navbar.Collapse>
            </Navbar>
        )
    }
    else {
        return (
            <Navbar class="navbar navbar-expand-lg top navbar-scroll" color="light">
                <Navbar.Brand as={Link} to="/">
                    <img width={120} height={35} src={logoImage} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle onClick={toggle} />
                <Navbar.Collapse isOpen={isOpen} navbar>
                    <MenuItems on_mobile={mobileView}/>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
