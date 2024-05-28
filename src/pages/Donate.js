import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button";
import Header from "../components/Header";
import sponsorshipTiers from '../content/assets/images/uncategorized/SponsorshipTiers2425.png'
import sponsorshipPacket from '../content/assets/Solar Gators 2024-25 Sponsorship Packet.pdf'
let donateLink = "https://www.uff.ufl.edu/giving-opportunities/027995-mae-solar-gators/"

export default function Donate() {
    return (
        <React.Fragment>
            {/*  Page Header  */}
            <Header title={"Sponsorship"} imgcss={"donate-header-img"}/>

            {/*  About Donations  */}
            <Container fluid="true" className="section">
                <Row className="no-margin-padding">
                    <p style={{paddingBottom: "25px"}}>
                        A project of this scale would not be possible without the generosity and support of our sponsors. Your support will not only help us build a lighter, faster and more efficient car, but will also provide a platform for the next generation of engineers to develop their skills.
                    </p>

                    <h4>How to Contribute</h4>
                    <p>We offer a variety of different sponsorship options, but appreciate any contribution to our organization.
                        Online contributions are made via the University of Florida MAE Solar Gators Foundation Account.
                        Please note that there is a 5% gift tax applied to all donations, as well as an additional 3% for donations made by credit.
                        We encourage sponsors to retain their receipts for tax deduction purposes. If you would prefer to make a contribution by check or donate materials, please contact us at
                        <span style={{color: "#F37833", fontWeight: "500", display: "inline"}}> info@ufsolargators.org</span></p>
                </Row>

                <p style={{paddingTop: "25px"}}>
                    Your generosity helps us to build our solar car and so much more. We are grateful that you are considering joining us on our mission towards a brighter, more sustainable future.
                </p>

                {/* Donate Button */}
                <Row>
                    <Button className="btn-primary" id="large-btn" href={donateLink} target="_blank" >
                        Make Online Donation
                    </Button>
                </Row>
            </Container>

            <div className={"horizontal-line"}/>

            {/* Tiers */}
            <Container fluid="true" className="section">
                <h2>Sponsorship Tiers</h2>
                <Row>
                    <Col>
                        <img style={{width: '100%',paddingLeft: "6%", paddingRight: "6%", opacity: 1}} src={sponsorshipTiers} alt="photo" />
                    </Col>
                </Row>
                <Button className="btn-primary" style={{width: "300px", left: "calc(50% - 300px/2 + 2px)", marginTop: "3rem"}} href={sponsorshipPacket} target="_blank">
                    Full Sponsorship Packet
                </Button>
                <h6 style={{paddingTop: "70px", paddingBottom: "0"}}>
                    All donations are tax deductible. Solar Gators is a 501(c)(3) nonprofit organization. Tax forms available upon request.
                </h6>
            </Container>

            <div className={"horizontal-line"}/>

            {/*  MAE Donation Matching  */}
            <Container fluid="true" className="section">
                <h3 style={{paddingTop: "0", paddingBottom: "3rem"}}>
                    MAE Donation Matching
                </h3>
                <p className={"body-text"}>
                    During the Fall 2023 semester, UF Department of Mechanical and Aerospace Engineering (MAE)
                    <span className={"accent_word"} id={"orange_accent"}> one-to-one matched all donations </span>
                    made through our UF Foundation account! We appreciate your contribution to our organization.
                </p>
            </Container>
        </React.Fragment>
    )
}