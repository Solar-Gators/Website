import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

import img1 from '../content/assets/images/people/team21/people_sunrider0.jpeg';
import img2 from '../content/assets/images/people/team22/outreach1.jpeg';
import img3 from '../content/assets/images/people/team21/working1.jpeg';
import car1 from "../content/assets/images/car_pics/torch/torch_ontrack.jpg";
import car2 from "../content/assets/images/car_pics/cielo/IMG_9219.JPG";
import car3 from "../content/assets/images/car_pics/sunrider/2021/car3.jpg";

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

function Car({car_img, car_name, car_year1, car_year2}) {
    //creates each car's container for image & hover description
    return (
        <Link className="car-card" to={"/cars"} onClick={() => {window.scroll(0,0);}} >
            <img className="car-card-img" src={car_img} />
            <div className="overlay">
                <div className="overlay-text-header">{car_name}</div>
                <div className="overlay-text-body">{car_year1} - {car_year2}</div>
            </div>
        </Link>
    )
}

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

function MissionStatements({on_mobile, accent1, blurb1, accent2, blurb2, accent3, blurb3, accent4, blurb4}) {
    let Text = ({accent, blurb}) => {
        return (
            <p className={"body-text-white"} style={{paddingBottom: "16px"}}><span style={{color: "#F37833", fontWeight: "bold", display: "inline"}}>{accent}</span>{blurb}</p>
        )
    }

    if (on_mobile) {
        return (
            <Row className="no-margin-padding">
                <Col >
                    <Text accent={accent1} blurb={blurb1}/>
                    <Text accent={accent2} blurb={blurb2}/>
                    <Text accent={accent3} blurb={blurb3}/>
                    <Text accent={accent4} blurb={blurb4}/>
                </Col>
            </Row>
        )
    }
    else {
        return (
            <Row style={{justifyContent: "center"}}>
                <Col className={"mission-statement"} style={{marginLeft: "0"}}>
                    <Text accent={accent1} blurb={blurb1}/>
                </Col>
                <Col className={"mission-statement"}>
                    <Text accent={accent2} blurb={blurb2}/>
                </Col>
                <Col className={"mission-statement"}>
                    <Text accent={accent3} blurb={blurb3}/>
                </Col>
                <Col className={"mission-statement"} style={{marginRight: "0"}}>
                    <Text accent={accent4} blurb={blurb4}/>
                </Col>
            </Row>
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

function DonateButton ({on_mobile}) {
    if (!on_mobile) {
        return (
            <Button className="btn-primary" as={Link} to={"/donate"}
                    onClick={() => {window.scroll(0,0);}}>
                Donate
            </Button>
        )
    }
    else {
        return ("")
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
            <Container fluid="true" className="section" style={{background: "#00203E"}}>
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
          </Container>

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
                    <DonateButton on_mobile={mobileView}/>
                </Row>

            </Container>

        </React.Fragment>
    )
}
