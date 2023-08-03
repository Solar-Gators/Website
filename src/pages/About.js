import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import CarsSection from "../components/CarsSection/CarsSection";

import img1 from '../content/assets/images/people/team21/people_sunrider0.jpeg';
import img2 from '../content/assets/images/people/team22/outreach1.jpeg';
import img3 from '../content/assets/images/people/team21/working1.jpeg';
import car1 from "../content/assets/images/car_pics/torch/torch_ontrack.jpg";
import car2 from "../content/assets/images/car_pics/cielo/IMG_9219.JPG";
import car3 from "../content/assets/images/car_pics/sunrider/2021/car3.jpg";
import MissionStatements from "../components/MissionStatements/MissionStatements";

//Blurb Section 1
let p1 = "Solar Gators is a fully student-run engineering design team at " +
    "the University of Florida. We are passionate about driving innovative and sustainable " +
    "technology in the automotive industry. We design, build, and race solar-powered cars to showcase " +
    "the potential of solar energy and inspire the next generation of engineers and innovators. " +
    "Each year we proudly represent the Sunshine State in the Formula Sun Grand Prix (FSGP)."

//Blurb Section 2
let p2a = "We're the new kids on the solar racing track, but don't let our age fool you. " +
    "In just six years, we've quickly made a name for ourselves in the world of solar racing, " +
    "proving that innovation and determination can overcome any obstacle."

let p2b = "As a team of passionate engineers, we work tirelessly to achieve our goals. " +
    "From the initial design phase to the final race day, we're committed to excellence " +
    "in everything we do. Even when facing the toughest challenges, our team stays motivated " +
    "and dedicated to keeping things on track."

//Blurb Section 3
let p3 = "Inclusivity is one of our founding principles. We believe that everyone deserves " +
    "a chance to learn and grow, regardless of their background or experience. That's " +
    "why we welcome new members with open arms, and provide them with the tools and " +
    "resources they need to become better engineers and better people. Join us as we " +
    "push the limits of what's possible in solar racing and beyond."

function DividedSection({img, blurb, blurb2, img_align}) {
    let ImageHalf = () => {
        return (
            <Col className="no-margin-padding">
                <div className="image-half-container" style={{backgroundImage: "url(" + img + ")"}}></div>
            </Col>
        )
    }
    let TextHalf = () => {
        return (
            <Col className="no-margin-padding">
                <div className="text-half-container">
                    <p className={"body-text"}>{blurb}</p>
                    {/* if there is a second paragraph */}
                    { blurb2 ? <p className={"body-text"} style={{marginTop: "50px"}}>{blurb2}</p> : ""}
                </div>
            </Col>
        )
    }
    // (img_align = true) => image on left side
    if (img_align) {
        return(
            <Row style={{padding: "0", margin: "0"}}>
                <ImageHalf/>
                <TextHalf/>
            </Row>
        )
    }
    else {
        return (
            <Row style={{padding: "0", margin: "0"}}>
                <TextHalf></TextHalf>
                <ImageHalf></ImageHalf>
            </Row>
        )
    }
}

function BlurbAndPicture({on_mobile, img, blurb, blurb2, img_align, img_above}) {
    let Image = () => {
        return (
            <Row className="image-half-container" style={{backgroundImage: "url(" + img + ")"}}/>
        )
    }
    let Text = () => {
        return (
            <Row className={"no-margin-padding"}>
                <div className="text-half-container">
                    <p className={"body-text"}>{blurb}</p>
                    {/* if there is a second paragraph */}
                    { blurb2 ? <p className={"body-text"} style={{paddingTop: "10px"}}>{blurb2}</p> : ""}
                </div>
            </Row>
        )
    }
    if (on_mobile) {
        if (img_above) {
            return (
                <Col className={"no-margin-padding"}>
                    <Image/>
                    <Text/>
                </Col>
            )
        }
        else {
            return (
                <Col className={"no-margin-padding"}>
                    <Text/>
                    <Image/>
                </Col>
            )
        }
    }
    else {
        return (
            <DividedSection img={img} blurb={blurb} blurb2={blurb2} img_align={img_align}/>
        )
    }
}

function TrackRecord({on_mobile, blurb1, blurb2, blurb3, blurb4}) {
    let Text = ({blurb}) => {
        return (
            <ol className="no-margin-padding" style={{listStyleType: 'square', marginLeft: "5vw"}}>
                <li className={"body-text-white"} style={{paddingBottom: "16px"}}>{blurb}</li>
            </ol>
        )
    }

    if (on_mobile) {
        return (
            <Row className="no-margin-padding">
                <Col >
                    <Text blurb={blurb1}/>
                    <Text blurb={blurb2}/>
                    <Text blurb={blurb3}/>
                    <Text blurb={blurb4}/>
                </Col>
            </Row>
        )
    }
    else {
        return (
            <Row style={{justifyContent: "center"}}>
                <Col className={"mission-statement"} style={{marginLeft: "0"}}>
                    <Row>
                        <Text blurb={blurb1}/>
                        <Text blurb={blurb2}/>
                    </Row>
                </Col>
                <Col className={"mission-statement"}>
                    <Row>
                        <Text blurb={blurb3}/>
                        <Text blurb={blurb4}/>
                    </Row>
                </Col>
            </Row>
        )
    }
}


export default function About() {
    /* mql = media query list (https://dev.to/yanns1/how-to-render-different-components-based-on-screen-size-2p35) */
    const mql = window.matchMedia('(max-width: 425px)');
    let mobileView = mql.matches;

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
            <BlurbAndPicture img={img1} blurb={p1} img_align={false} on_mobile={mobileView} img_above={false}></BlurbAndPicture>

            {/*  Mission Section */}
            <MissionStatements on_mobile={mobileView} white_background={false} button={false} />

            {/* Blurb 2 & Picture */}
            <BlurbAndPicture img={img2} blurb={p2a} blurb2={p2b} img_align={true} on_mobile={mobileView} img_above={true}></BlurbAndPicture>

            {/* Blurb 3 & Picture */}
            <BlurbAndPicture img={img3} blurb={p3} img_align={false} on_mobile={mobileView} img_above={true}></BlurbAndPicture>

            {/* Our Track Record */}
            <Container fluid="true" className="section" style={{background: "#00203E"}}>
            <h2 className="heading2-text">
                Our Track Record
            </h2>
                <TrackRecord
                    on_mobile={mobileView}
                    blurb1="Won 1st place at the 2023 Formula Sun Grand Prix (FSGP) after completing 707.5 miles on track."
                    blurb2="Competed in Formula Sun Grand Prix (FSGP) every year since 2017"
                    blurb3="Designed and manufactured 3 solar cars from the ground up"
                    blurb4="100% student run"
                />
            </Container>

            {/* Car Section */}
            <CarsSection mobileView={mobileView}/>

        </React.Fragment>
    )
}
