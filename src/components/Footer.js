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
            <img className={"app-icon"} src={logo_img} alt={"icon"}/>
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
                <Row className="row-container" style={{justifyContent: "end"}}>
                    {/* Logo */}
                    <Col className={"column-container"}>
                        <img id="sg-logo" src={logo}/>
                    </Col>

                    {/* Social Media Links */}
                    <Col className={"column-container"} style={{justifyContent: "center"}}>
                        <Row className="row-container">
                            <Social_App logo_img={facebook}
                                        url_link={"https://www.facebook.com/UFSolarGators/"}></Social_App>
                            <Social_App logo_img={instagram}
                                        url_link={"https://www.instagram.com/ufsolargators/"}></Social_App>
                            <Social_App logo_img={linkedin}
                                        url_link={"https://www.linkedin.com/company/ufsolargators/"}></Social_App>
                            <Social_App logo_img={youtube}
                                        url_link={"https://www.youtube.com/@ufsolargators/featured"}></Social_App>
                        </Row>
                    </Col>

                    {/* Email & Mailing Addresses */}
                    <Col className={"column-container"} style={{justifyContent: "end"}}>
                        {/*<p className="body-text-white" id="address">*/}
                        {/*    Solar Gators<br/>*/}
                        {/*    PO Box 116250<br/>*/}
                        {/*    Gainesville, FL 32611<br/>*/}
                        {/*</p>*/}
                        <Link className="body-text" style={{color: '#F37833', alignSelf: "flex-end"}} to={"/contact"}>info@ufsolargators.org</Link>

                    </Col>
                </Row>
            </Container>
        );
    }
}
