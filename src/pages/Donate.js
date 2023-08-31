import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button";
import Collapse from 'react-bootstrap/Collapse';
import {Link} from "react-router-dom";
import sponsorshipTiers from '../content/assets/images/uncategorized/SponsorshipTiers.png'
import sponsorshipPacket from '../content/assets/Solar Gators 2023-24 Sponsorship Packet.pdf'
let donateLink = "https://www.uff.ufl.edu/giving-opportunities/027995-mae-solar-gators/"

function CollapsableComponent({open, setOpen, label, text, emphasis, link}) {
    return (
        <Row className="no-margin-padding">
            <Col className="collapse-col">
                <h5 id="collapse-heading">
                    <Button className="btn-collapsable-field"
                            onClick={() => setOpen(!open)}
                            aria-controls="online-collapse-text"
                            aria-expanded={open}
                    >+</Button>
                    {label}
                </h5>
                <Collapse in={open} id="collapse-content">
                    <div id="collapse-text">
                        <p style={{marginBottom: "0px"}}>{text}
                            {/* Orange Emphasis Text */}
                            <span style={{color: "#F37833", fontWeight: "500", display: "inline"}}>{emphasis}</span>

                            {/* Hyperlink if one */}
                            { {link} ? <Link style={{color: '#F37833', display: 'inline'}}
                                            to={"/contact"} onClick={() => {window.scroll(0,0);}}>{link}</Link> : ""}
                        </p>
                    </div>
                </Collapse>
            </Col>
        </Row>
    )
}

export default function Donate() {
    //Initialization for collapsable field components
    const [open0, setOpen0] = useState(false);
    const [open1, setOpen1] = useState(false);

    return (
        <React.Fragment>

            {/*  Page Header  */}
            <Container fluid="true" className="header">
                <Row>
                    <Col>
                        <div className="donate-header-img">
                            <h1 className={"title-text"}>
                                Donate
                            </h1>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/*  About Donations  */}
            <Container fluid="true" className="section">
                <Row>
                    <h2>
                        About Donations
                    </h2>
                </Row>

                <Row className="no-margin-padding">
                    <p style={{paddingBottom: "25px"}}>
                        A project of this scale would not be possible without the generosity and support of our sponsors. Your support will not only help us build a lighter, faster and more efficient car, but will also provide a platform for the next generation of engineers to develop their skills.
                        We offer a variety of different donation options, but appreciate any contribution to our organization. For those who would like to play a larger role, find out more about our sponsorship opportunities below!
                    </p>
                </Row>

                {/*  Collapsable fields  */}
                <CollapsableComponent open={open0} setOpen={setOpen0} label={"Online Donations"}
                      text={"Online contributions are made via the University of Florida MAE Solar Gators webpage. Please note that there is a 5% gift tax applied to all donations, as well as an additional 3% for donations made by credit."}
                      emphasis={""}
                      link=""
                />
                <CollapsableComponent open={open1} setOpen={setOpen1} label={"Other Options"}
                      text={"If you would prefer to make a contribution by check or donate materials, please contact us at "}
                      link={"info@ufsolargators.org"}
                />

                <p style={{paddingTop: "25px"}}>
                    Your generosity helps us to build our solar car and so much more. We are grateful that you are considering joining us on our mission towards a brighter, more sustainable future.
                </p>

                {/* Donate Button */}
                <Row>
                    <Button className="btn-primary" style={{width: "250px", left: "calc(50% - 250px/2 + 2px)"}}
                            href={donateLink} target="_blank" >
                        Donate Online
                    </Button>


                </Row>
                <h6 style={{paddingTop: "70px", paddingBottom: "0"}}>
                    All donations are tax deductible. Solar Gators is a 501(c)(3) nonprofit organization. Tax forms available upon request.
                </h6>
            </Container>

            {/* Sponsorship Opportunities */}
            <Container fluid="true" className="section" style={{background: "#00203E"}}>
                <h2 style={{paddingTop: "0", paddingBottom: "50px"}}>
                    Sponsorship Opportunities
                </h2>
                <Row>
                    <Col>
                        <img style={{width: '100%',paddingLeft: "6%", paddingRight: "6%", opacity: 1}} src={sponsorshipTiers} alt="photo" />
                    </Col>
                </Row>
                <Button className="btn-primary" style={{width: "300px", left: "calc(50% - 300px/2 + 2px)"}}
                              href={sponsorshipPacket} target="_blank">
                    Full Sponsorship Packet
                </Button>
            </Container>


    </React.Fragment>
    )
}