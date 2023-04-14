import React from 'react'
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'



import logo from '../content/assets/images/logo2.png'
import facebook from '../content/assets/images/app_icons/facebook_logo0.png'
import instagram from '../content/assets/images/app_icons/instagram_logo.png'
import linkedin from '../content/assets/images/app_icons/linkedin_logo copy.png'
import youtube from '../content/assets/images/app_icons/youtube_logo0.png'

function Social_App({logo_img, url_link}) {
    return (
        <Button className={"btn-social-media-icon"} onClick={() => { window.location.href = url_link }}>
            <img className={"app-icon"} src={logo_img}/>
        </Button>
    )
}

export default function Footer() {
    /* mql = media query list (https://dev.to/yanns1/how-to-render-different-components-based-on-screen-size-2p35) */
    const mql = window.matchMedia('(max-width: 600px)');
    let mobileView = mql.matches;

    if (mobileView) {
        return (
            <Container fluid="true" id="footer">
                 {/*Social Media Links*/}
                <Row className={"row-container"}>
                    <div className={"logos"}>
                        <Social_App logo_img={facebook}
                                    url_link={"https://www.facebook.com/UFSolarGators/"}></Social_App>
                        <Social_App logo_img={instagram}
                                    url_link={"https://www.instagram.com/ufsolargators/"}></Social_App>
                        <Social_App logo_img={linkedin}
                                    url_link={"https://www.linkedin.com/company/ufsolargators/"}></Social_App>
                        <Social_App logo_img={youtube}
                                    url_link={"https://www.youtube.com/@ufsolargators/featured"}></Social_App>
                    </div>
                </Row>

                <Row className="row-container" style={{display: 'flex'}}>
                    {/* Logo */}
                    <img className={"left-aligned-container"} src={logo}/>

                    {/* Email & Mailing Addresses */}
                    <div className={"right-aligned-container"}>
                        <text className="text">
                            Solar Gators<br/>
                            PO Box 116250
                            Gainesville, FL 32611<br/>
                        </text>

                        <Link className="text" style={{color: '#F37833', display: 'flex', justifyContent: 'right'}}
                              to={"/contact"}>info@ufsolargators.org</Link>
                    </div>
                </Row>

            </Container>
        );
    }
    else {
        return (
            <Container fluid="true" id="footer">
                <Row>
                    {/* Logo */}
                    <Col className={"column-container"}>
                        <img className={"left-aligned-container"} src={logo}/>
                    </Col>

                    {/* Social Media Links */}
                    <Col className={"column-container"}>
                        <div className={"logos"}>
                            <Social_App logo_img={facebook}
                                        url_link={"https://www.facebook.com/UFSolarGators/"}></Social_App>
                            <Social_App logo_img={instagram}
                                        url_link={"https://www.instagram.com/ufsolargators/"}></Social_App>
                            <Social_App logo_img={linkedin}
                                        url_link={"https://www.linkedin.com/company/ufsolargators/"}></Social_App>
                            <Social_App logo_img={youtube}
                                        url_link={"https://www.youtube.com/@ufsolargators/featured"}></Social_App>
                        </div>

                    </Col>

                    {/* Email & Mailing Addresses */}
                    <Col className={"column-container"}>
                        <div className={"right-aligned-container"}>
                            <text className="text">
                                Solar Gators<br/>
                                PO Box 116250
                                Gainesville, FL 32611<br/>
                            </text>

                            <Link className="text" style={{color: '#F37833', display: 'flex', justifyContent: 'right'}}
                                  to={"/contact"}>info@ufsolargators.org</Link>

                        </div>
                    </Col>
                </Row>

                {/*<Row>*/}
                {/*    <Col md={6}>*/}
                {/*      <h2 className="text-white" >UF Solar Gators</h2>*/}
                {/*      <a target="_blank" href="https://www.facebook.com/UFSolarGators/">*/}
                {/*        <button className="btn btn-social-icon btn-facebook btn-rounded">*/}
                {/*          <i class="fab fa-facebook-f"></i>*/}
                {/*        </button>*/}
                {/*      </a>*/}
                {/*      <a target="_blank" href="https://twitter.com/solargators?lang=en">*/}
                {/*        <button className="btn btn-social-icon btn-twitter btn-rounded ml-2">*/}
                {/*          <i class="fab fa-twitter" />*/}
                {/*        </button>*/}
                {/*      </a>*/}
                {/*      <a target="_blank" href="https://www.instagram.com/ufsolargators/">*/}
                {/*        <button className="btn btn-social-icon btn-instagram btn-rounded ml-2">*/}
                {/*          <i class="fab fa-instagram"></i>*/}
                {/*        </button>*/}
                {/*      </a>*/}
                {/*    </Col>*/}
                {/*    <Col md={3} xs={6}>*/}
                {/*      <h5 className="text-white mt-sm-3 mt-3">Connect</h5>*/}
                {/*      <Link to="/contact" style={{color:  'white'}}>Contact us</Link>*/}
                {/*      <br />*/}
                {/*      <a href="https://www.facebook.com/UFSolarGators/" target="_blank" style={{color: 'white'}}>Join Us</a>*/}
                {/*    </Col>*/}

                {/*    <Col md={3} xs={6}>*/}
                {/*      <h5 className="text-white mt-sm-3 mt-3">Support us</h5>*/}
                {/*      <Link to="/donate" style={{color:  'white'}}>Donate</Link>*/}
                {/*      <br />*/}
                {/*      <Link to="/sponsors" style={{color:  'white'}}>Sponsor Us</Link>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                {/*<Row className="mt-5">*/}
                {/*  <Col>*/}
                {/*    <div className="separator text-white ">*/}
                {/*      <i className="fas ml-2" aria-hidden="true" />*/}
                {/*      <strong className="mr-2">*/}
                {/*      <Link to="/sponsors" style={{color:  'white'}}>Our Sponsors</Link></strong>*/}
                {/*    </div>*/}
                {/*  </Col>*/}
                {/*</Row>*/}
            </Container>
        );
    }
}
