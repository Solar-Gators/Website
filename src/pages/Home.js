import React, { useState } from 'react'
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../content/styles/Header.scss";
import "../content/styles/Home.scss";
import "../content/styles/Button.scss";

//Officer Pictures
import president from '../content/assets/images/officers/2022/president22.JPG';
import vp from '../content/assets/images/officers/2022/vp22.JPG';
import treasurer from '../content/assets/images/officers/2022/treasurer22.JPG';
import secretary from '../content/assets/images/officers/2022/secretary22.JPG';
import power from '../content/assets/images/officers/2022/power22.JPG';
import mechPM from '../content/assets/images/officers/2022/mechPM22.JPG';
import integPM from '../content/assets/images/officers/2022/integPM22.JPG';
import highvoltPM from '../content/assets/images/officers/2022/integPM22.JPG';
import embedsyst from '../content/assets/images/officers/2022/embedsyst22.JPG';
import electricalPM from '../content/assets/images/officers/2022/electricalPM22.JPG';
import business from '../content/assets/images/officers/2022/business22.JPG';
import brakes from '../content/assets/images/officers/2022/brakes22.JPG';
import battery from '../content/assets/images/officers/2022/battery22.JPG';
import aero from '../content/assets/images/officers/2022/aero22.JPG';

//Car Pictures
import car1 from '../content/assets/images/car_pics/car1.jpg';
import car2 from '../content/assets/images/car_pics/car2.JPG';
import car3 from '../content/assets/images/car_pics/car3.jpg';
import MAE from "../content/assets/images/sponsor_logos/MAE.png";
import ZenithTecnica from "../content/assets/images/sponsor_logos/ZenithTecnica.png";
import ECE from "../content/assets/images/sponsor_logos/ECE.png";

//Car 3 Platinum Sponsors
let platinum3 = [[MAE, "https://mae.ufl.edu/"], [ZenithTecnica, "https://www.zenithtecnica.com/"], [ECE, "https://www.ece.ufl.edu/"]];

function MissionStatements({on_mobile, accent1, blurb1, accent2, blurb2, accent3, blurb3, accent4, blurb4}) {
    if (on_mobile) {
        return (
            <Row>
                <Col style={{marginLeft: "5vw", marginRight: "5vw"}}>
                        <p className={"body-text"}><b>{accent1}</b>{blurb1}</p>
                        <p className={"body-text"}><b>{accent2}</b>{blurb2}</p>
                        <p className={"body-text"}><b>{accent3}</b>{blurb3}</p>
                        <p className={"body-text"}><b>{accent4}</b>{blurb4}</p>
                </Col>
            </Row>
        )
    }
    else {
        return (
            <Row style={{justifyContent: "center"}}>
                <Col className={"mission-statement"} style={{marginLeft: "0"}}>
                    <p className={"body-text"}><b>{accent1}</b>{blurb1}</p>
                </Col>
                <Col className={"mission-statement"}>
                    <p className={"body-text"}><b>{accent2}</b>{blurb2}</p>
                </Col>
                <Col className={"mission-statement"}>
                    <p className={"body-text"}><b>{accent3}</b>{blurb3}</p>
                </Col>
                <Col className={"mission-statement"} style={{marginRight: "0"}}>
                    <p className={"body-text"}><b>{accent4}</b>{blurb4}</p>
                </Col>
            </Row>
        )
    }
}

function Officer({pic}) {
    //creates individual officer headshot container w image
    return (
        <div className={"headshot"} >
            <img className={"headshot-img"} src={pic}></img>
        </div>
    )
}

function Car({car_img, car_name, car_year1, car_year2}) {
    //creates each car's container for image & hover description
    return (
        <Link className="car-card" to={"/cars"} onClick={() => {window.scroll(0,0);}} >
            <img className="car-card-img" src={car_img}/>
            <div className="overlay">
                <div className="overlay-text-header">{car_name}</div>
                <div className="overlay-text-body">{car_year1} - {car_year2}</div>
            </div>
        </Link>
    )
}

function CarTiles({on_mobile}) {
    //format for mobile
    if (on_mobile) {
        return (
            <Col>
                <Row className={"car-cards"}>
                    <Car car_img={car1} car_name={"Torch"} car_year1={"2017"} car_year2={"2018"}></Car>
                </Row>
                <Row className={"car-cards"}>
                    <Car car_img={car2} car_name={"Cielo"} car_year1={"2018"} car_year2={"2019"}></Car>
                </Row>
                <Row className={"car-cards"}>
                    <Car car_img={car3} car_name={"Sunrider"} car_year1={"2020"} car_year2={"present"}></Car>
                </Row>
            </Col>
        )
    }
    //format for desktop
    else {
        return (
            <Col>
                <Row className={"car-cards"}>
                    <Car car_img={car1} car_name={"Torch"} car_year1={"2017"} car_year2={"2018"}></Car>
                    <Car car_img={car2} car_name={"Cielo"} car_year1={"2018"} car_year2={"2019"}></Car>
                    <Car car_img={car3} car_name={"Sunrider"} car_year1={"2020"} car_year2={"present"}></Car>
                </Row>
                <Row>
                    <Button className="btn-primary" as={Link} to={"/cars"}
                            onClick={() => {window.scroll(0,0);}}>
                        Learn More
                    </Button>
                </Row>
            </Col>
        )
    }
}

function SponsorLogo({link1, img1, link2, img2}) {
    //creates Row with one (or two) sponsor logos
    return (
        <Row className="section" style={{padding: "0", paddingBottom: "15px"}}>
            <a href={link1}>
                <img src={img1} className="sponsor-logo"/>
            </a>
            {/* if second img passed in, put in same row */}
            { img2 ?
                <a href={link2}>
                    <img src={img2} className="sponsor-logo" style={{marginLeft: "20px"}}/>
                </a> : ""}

        </Row>
    )
}

function SponsorSection ({on_mobile}) {
    if (on_mobile) {
        return (
            <Col>
                <Row>
                    <Col>
                        <SponsorLogo img1={platinum3[1][0]} link1={platinum3[1][1]}/>
                        <SponsorLogo img1={platinum3[0][0]} link1={platinum3[0][1]}/>
                        <SponsorLogo img1={platinum3[2][0]} link1={platinum3[2][1]}/>
                    </Col>
                    <Col>
                        <p className={"body-text"} style={{paddingLeft: "0"}}>
                            Solar Gators relies on the support of sponsors to further our mission of showing the potential of solar energy. Sponsoring us means becoming an integral part of our team, and helping to inspire the next generation of engineers and innovators. Join us on our mission towards a brighter, more sustainable future.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Button className="btn-primary" style={{marginTop: "5vw"}}
                            as={Link} to={"/donate"}
                            onClick={() => {window.scroll(0,0);}}>
                        Sponsor Us
                    </Button>
                </Row>
            </Col>
        )
    }
    else {
        return (
            <Row>
                <Col className={"section-half"} id="sponsor_logos_half">
                    <SponsorLogo img1={platinum3[0][0]} link1={platinum3[0][1]} img2={platinum3[2][0]} link2={platinum3[2][1]}></SponsorLogo>
                    <SponsorLogo img1={platinum3[1][0]} link1={platinum3[1][1]}></SponsorLogo>
                </Col>
                <Col className={"section-half"}>
                    <Container >
                        <Row >
                            <p className={"body-text"} >
                                Solar Gators relies on the support of sponsors to further our mission of showing the potential of solar energy. Sponsoring us means becoming an integral part of our team, and helping to inspire the next generation of engineers and innovators. Join us on our mission towards a brighter, more sustainable future.
                            </p>
                        </Row>
                        <Row style={{justifyContent: "center", alignContent: "center"}}>
                            <Button className="btn-secondary" style={{left: "0", marginRight: "3vw", marginTop: "5vw"}}
                                    as={Link} to={"/sponsors"}
                                    onClick={() => {window.scroll(0,0);}}>
                                Our Sponsors
                            </Button>
                            <Button className="btn-primary" style={{left: "0", marginTop: "5vw"}}
                                    as={Link} to={"/donate"}
                                    onClick={() => {window.scroll(0,0);}}>
                                Sponsor Us
                            </Button>
                        </Row>
                    </Container>
                </Col>
            </Row>
        )
    }
}

export default function Home() {
    /* mql = media query list (https://dev.to/yanns1/how-to-render-different-components-based-on-screen-size-2p35) */
    const mql = window.matchMedia('(max-width: 425px)');
    let mobileView = mql.matches;

    return (
      <React.Fragment>
          {/*  Page Header */}
          <Container fluid="true" className="header">
            <Row>
                <Col>
                    <div className="home-header-img">
                        <h1 className={"title-text"}>
                          Powered By Florida sunshine
                        </h1>
                    </div>
                </Col>
            </Row>
        </Container>

          {/*  Mission Section */}
          <Container fluid="true" className="section">
            <Row>
              <h2 className="heading2-text">
                  Our Mission
              </h2>
            </Row>

              <MissionStatements
                  on_mobile={mobileView}
                  accent1={"Accelerate"}
                  blurb1={" the world's transition to sustainable energy"}
                  accent2={"Develop"}
                  blurb2={" gator engineers through hands-on design and manufacturing experience"}
                  accent3={"Inspire"}
                  blurb3={" students to explore their interests within STEM and become the next generation of innovators shaping the future"}
                  accent4={"Build"}
                  blurb4={" awareness within our community about the transformative potential of solar energy"}
              />

            <Row>
                <Button className="btn-primary" as={Link} to={"/about"}
                        onClick={() => {window.scroll(0,0);}}>
                    About Us
                </Button>
            </Row>
        </Container>

          {/*  Team Section */}
          <Container fluid="true" className="section" style={{backgroundColor: '#00203E'}}>
              <Row>
                  <h2 className="heading2-text">
                      Meet The Team
                  </h2>
              </Row>
              <Row>
                  <div className={"slider"}>
                      <div className={"slide-track"}>
                          <Officer pic={president}></Officer>
                          <Officer pic={vp}></Officer>
                          <Officer pic={treasurer}></Officer>
                          <Officer pic={secretary}></Officer>
                          <Officer pic={business}></Officer>
                          <Officer pic={electricalPM}></Officer>
                          <Officer pic={mechPM}></Officer>
                          <Officer pic={integPM}></Officer>
                          <Officer pic={aero}></Officer>
                          <Officer pic={battery}></Officer>
                          <Officer pic={brakes}></Officer>
                          <Officer pic={embedsyst}></Officer>
                          <Officer pic={highvoltPM}></Officer>
                          <Officer pic={power}></Officer>
                      </div>
                  </div>
              </Row>
              <Row>
                  <Button className="btn-primary" as={Link} to={"/team"}
                          onClick={() => {window.scroll(0,0);}}>
                      Team 2023
                  </Button>
              </Row>
          </Container>

          {/*  Car Section */}
          <Container fluid="true" className="section">
              <Row>
                  <h2 className="heading2-text">
                      Our Cars
                  </h2>
              </Row>

              <CarTiles on_mobile={mobileView}/>

          </Container>

          {/*  Sponsors Section */}
          <Container fluid="true" className="section">
              <Row>
                  <h2 className="heading2-text">
                      Become A Sponsor
                  </h2>
              </Row>

              <SponsorSection on_mobile={mobileView}/>
          </Container>

      </React.Fragment>
    )
}
