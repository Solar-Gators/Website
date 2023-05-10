import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Header from '../components/Header'
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

import img1 from '../content/assets/images/people/people_sunrider0.jpeg';
import img2 from '../content/assets/images/people/outreach1.jpeg';
import img3 from '../content/assets/images/people/working1.jpeg';
import car1 from "../content/assets/images/car_pics/car1.jpg";
import car2 from "../content/assets/images/car_pics/car2.JPG";
import car3 from "../content/assets/images/car_pics/car3.jpg";

function Car({car_img, car_name, car_year1, car_year2}) {
    //creates each car's container for image & hover description
    return (
        <div className="car-card" href="/Cars">
            <img className="car-card-img" src={car_img}/>
            <div className="overlay">
                <div className="overlay-text-header">{car_name}</div>
                <div className="overlay-text-body">{car_year1} - {car_year2}</div>
            </div>
        </div>
    )
}

export default function About() {
    return (
        <React.Fragment>
            {/*  Page Header */}
            <Container fluid="true" className="header">
            <Row>
              <Col>
                <div className="about-header-img">
                  <h1 className={"title-text"}>
                    About Us
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>

            {/* Blurb & Picture */}
            <Row>
              <Col className={"section-half"}>
                <Container className="section" >
                  <p className={"body-text"}>
                    Solar Gators is a fully student-run engineering design team at
                    the University of Florida. We are passionate about driving innovative and sustainable
                    technology in the automotive industry. We design, build, and race solar-powered cars to showcase
                    the potential of solar energy and inspire the next generation of engineers and innovators.
                    Each year we proudly represent the Sunshine State in the Formula Sun Grand Prix (FSGP).
                  </p>
                </Container>
              </Col>
              <Col style={{padding: "0px"}}>
                  <div className="image-container" style={{backgroundImage: "url(" + img1 + ")"}}></div>
              </Col>
          </Row>

            {/*  Mission Section */}
            <Container fluid="true" className="section" style={{background: "#00203E"}}>
            <Row>
              <h2 className="heading2-text">
                Our Mission
              </h2>
            </Row>
            <Row style={{justifyContent: "center"}}>
              <Col className={"mission-statement"}>
                <p className={"body-text-white"}><span style={{color: "#F37833", fontWeight: "bold", display: "inline"}}>Accelerate</span> the world's transition to sustainable energy</p>
              </Col>
              <Col className={"mission-statement"}>
                <p className={"body-text-white"}><span style={{color: "#F37833", fontWeight: "bold", display: "inline"}}>Develop</span> gator engineers through hands-on design and manufacturing experience</p>
              </Col>
              <Col className={"mission-statement"}>
                <p className={"body-text-white"}><span style={{color: "#F37833", fontWeight: "bold", display: "inline"}}>Inspire</span> students to explore their interests within STEM and become the next generation of innovators shaping the future</p>
              </Col>
              <Col className={"mission-statement"}>
                <p className={"body-text-white"}><span style={{color: "#F37833", fontWeight: "bold", display: "inline"}}>Build</span> awareness within our community about the transformative potential of solar energy</p>
              </Col>
            </Row>
          </Container>

            {/* Blurb 2 & Picture */}
            <Row>
                <Col style={{padding: "0px"}}>
                  <div className="image-container" style={{backgroundImage: "url(" + img2 + ")"}}></div>
                </Col>
                <Col className={"section-half"} style={{padding: "0px"}}>
                  <Container className="section">
                    <p className={"body-text"}>
                      We're the new kids on the solar racing track, but don't let our age fool you.
                      In just six years, we've quickly made a name for ourselves in the world of solar racing,
                      proving that innovation and determination can overcome any obstacle.
                    </p>
                    <p className={"body-text"} style={{marginTop: "50px"}}>
                      As a team of passionate engineers, we work tirelessly to achieve our goals.
                      From the initial design phase to the final race day, we're committed to excellence
                      in everything we do. Even when facing the toughest challenges, our team stays motivated
                      and dedicated to keeping things on track.
                    </p>
                  </Container>
                </Col>
              </Row>

            {/* Blurb 3 & Picture */}
            <Row>
            <Col className={"section-half"} style={{padding: "0px"}}>
              <Container className="section">
                <p className={"body-text"}>
                  Inclusivity is one of our founding principles. We believe that everyone deserves
                  a chance to learn and grow, regardless of their background or experience. That's
                  why we welcome new members with open arms, and provide them with the tools and
                  resources they need to become better engineers and better people. Join us as we
                  push the limits of what's possible in solar racing and beyond.
                </p>
              </Container>
            </Col>
            <Col style={{padding: "0px"}}>
                <div className="image-container" style={{backgroundImage: "url(" + img3 + ")"}}></div>
            </Col>
          </Row>

            {/* Our Track Record */}
            <Container fluid="true" className="section" style={{background: "#00203E"}}>
            <h2 className="heading2-text">
                Our Track Record
            </h2>
            <Row style={{justifyContent: "center"}}>
                <Col className={"mission-statement"}>
                    <p className={"body-text-white"}>Representing the sunshine state in the Formula Sun Grand Prix every year since 2017</p>
                </Col>
                <Col className={"mission-statement"}>
                    <p className={"body-text-white"}>Raced 225 miles in the 2022 Formula Sun Grand Prix</p>
                </Col>
                <Col className={"mission-statement"}>
                    <p className={"body-text-white"}>Designed and manufactured 3 solar cars from the ground up</p>
                </Col>
                <Col className={"mission-statement"}>
                    <p className={"body-text-white"}>100% student run</p>
                </Col>
            </Row>
        </Container>

            {/* Car Section */}
            <Container fluid="true" className="section">
                <Row>
                    <h2 className="heading2-text">
                        Our Cars
                    </h2>
                </Row>

                <Row className={"car-cards"}>
                    <Car car_img={car1} car_name={"Torch"} car_year1={"2017"} car_year2={"2018"}></Car>
                    <Car car_img={car2} car_name={"Cielo"} car_year1={"2018"} car_year2={"2019"}></Car>
                    <Car car_img={car3} car_name={"Sunrider"} car_year1={"2020"} car_year2={"present"}></Car>
                </Row>

                <Row>
                    <Button className="btn-primary" style={{width: "250px", left: "calc(50% - 250px/2 + 2px)"}} as={Link} to={"/sponsors"}>Become a Sponsor</Button>
                </Row>

            </Container>

        </React.Fragment>
    )
}
