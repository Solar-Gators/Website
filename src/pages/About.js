import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Header from '../components/Header'
import aboutUs1 from '../content/assets/images/about_us_1.JPG'
import aboutUs2 from '../content/assets/images/about_us_2.jpg'
import event1 from '../content/assets/images/event_1.jpg'
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

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

          {/* Overview Blurb */}
          <Container fluid="true" className="section" style={{paddingLeft: "10%", paddingRight: "10%"}}>
            <p className={"body-text"}>Solar Gators is a <strong>University of Florida student organization</strong> driven by passionate, eco-minded student engineers and designers. We are committed to designing, building, and racing a successful solar-powered vehicle that competes in the Formula Sun Grand Prix and the American Solar Challenge in 2019. Along the way, we aim to raise sustainability awareness amongst our peers, our community, and our world.</p>
          </Container>

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
                <p className={"body-text-white"}><span style={{color: "#F37833", fontWeight: "bold", display: "inline"}}>Develop</span> gator engineers through design and manufacturing experience</p>
              </Col>
              <Col className={"mission-statement"}>
                <p className={"body-text-white"}><span style={{color: "#F37833", fontWeight: "bold", display: "inline"}}>Inspire</span> students to explore their interests within STEM</p>
              </Col>
              <Col className={"mission-statement"}>
                <p className={"body-text-white"}><span style={{color: "#F37833", fontWeight: "bold", display: "inline"}}>Build</span> awareness within our community about the benefits of solar energy</p>
              </Col>
            </Row>
          </Container>

          <Container fluid="true" className="section">
            <h2 className="heading2-text">
              Our Track Record
            </h2>
            <Col>
              {/*  Stats */}
            </Col>
            <Col>
              {/*  Image */}
            </Col>
          </Container>
        <Container>
          <Row className="align-items-center about-row">
            <Col md={6}>
              <img className="img-fluid about-images rounded d-block m-auto" src={aboutUs2} />
            </Col>

            <Col md={6} className="mt-lg-0 mt-md-0 mt-sm-3 mt-3">
              <Card>
                <Card.Body>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="align-items-center about-row">
            <Col md={6}>
              <Card>
                <Card.Body>
                  <p>Our team was originally founded in 2012 with goals of racing in the summer of 2014.<br /> <br />A new group of UF students inherited the vestiges in the fall of 2016 with a goal of racing the following summer and did not fully realize their goals until a large donation from a sponsor six weeks out from competition.</p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} className="mt-lg-0 mt-md-0 mt-sm-3 mt-3">
              <img className="img-fluid about-images rounded d-block m-auto" src={event1} />
            </Col>
          </Row>

          <Row className="align-items-center about-row">
            <Col md={6}>
              <img className="img-fluid about-images rounded d-block m-auto" src={aboutUs1} />
            </Col>

            <Col md={6} className="mt-lg-0 mt-md-0 mt-sm-3 mt-3">
              <Card>
                <Card.Body>
                  <p>The team aims to support the goals of the Herbert Wertheim College of Engineering by helping graduates meet the expectations of employers and by helping qualified graduates pursue advanced study through developing hands-on-applicable-skills within a solar race car design team.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>
        </React.Fragment>
    )
}
