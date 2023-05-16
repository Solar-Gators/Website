import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "../content/styles/Header.scss";
import "../content/styles/Cars.scss";
import "../content/styles/Button.scss";
import torch from "../content/assets/images/car_pics/car1.jpg";
import sunrider from "../content/assets/images/car_pics/car3.jpg";
import cielo from "../content/assets/images/car_pics/car2.JPG";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

function SplitSection ({name, year1, year2, blurb, img, pic_side}) {
    let TextContent = ({textColor}) => {
        return (
            <Col className={"section-half"} style={{padding: "0px"}}>
                <Container className="section">
                    <h1 className="heading2-text" style={{paddingBottom: "0px"}}>{name}</h1>
                    <h6 className="heading6-text" style={{paddingBottom: "20px"}}>{year1} - {year2}</h6>
                    <p className={"body-text"} style={{color: textColor}}>{blurb}</p>
                </Container>
            </Col>
        )
    }
    let ImageContent = () => {
        return (
            <Col style={{padding: "0px"}}>
                <div className="image-container" style={{backgroundImage: "url(" + img + ")"}}></div>
            </Col>
        )
    }
    if (pic_side === "right") {
        return (
            <Row style={{background: "#00203E"}}>
                <TextContent textColor={"#cdcdcd"}></TextContent>
                <ImageContent></ImageContent>
            </Row>
        )
    }
    else {
        return (
            <Row>
                <ImageContent></ImageContent>
                <TextContent></TextContent>
            </Row>
        )
    }
}

export default function Cars() {
    return (
        <React.Fragment>
            {/*  Page Header */}
            <Container fluid="true" className="header">
                <Row>
                    <Col>
                        <div className="cars-header-img">
                            <h1 className={"title-text"}>
                                Our Cars
                            </h1>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Sunrider */}
            <SplitSection name={"Sunrider"} year1={"2020"} year2={"2023"} img={sunrider} pic_side={"right"}
                          blurb={"Pandemic restrictions brought progress to a halt with limited in-person meetings and significant supply chain delays. Through this difficult time, the team banded together  and worked relentlessly to complete our newest car, Sunrider." +
                              " Making its debut in the 2022 Formula Sun Grand Prix (FSGP), Sunrider set new team records in almost every aspect of the competition. Sunrider drove a total distance of over 225 miles."}>
            </SplitSection>

            {/* Cielo */}
            <SplitSection name={"Cielo"} year1={"2018"} year2={"2020"} img={cielo} pic_side={"left"}
                          blurb={"We competed with our second car Cielo in the 2018 FSGP. During the year, we designed and manufactured a brand new carbon fiber aero-body, making the car much lighter and quicker. In addition, new mechanical, electrical, and solar systems were designed and integrated, resulting in a more reliable and competitive car. Cielo drove 20 miles on the final race day, a significant improvement over the previous year."}>
            </SplitSection>

            {/* Torch */}
            <SplitSection name={"Torch"} year1={"2016"} year2={"2018"} img={torch} pic_side={"right"}
                          blurb={"We debuted our first car, Torch, at the 2017 FSGP; making Solar Gators the first Florida team to race since 1989."}>
            </SplitSection>

            {/* Sponsorship */}
            <Container fluid="true" className="section">
                <p className={"body-text"} style={{textAlign: "center"}}>
                    Throughout our history, our sponsors have been at the center of everything we accomplish. As we continue to grow, we hope that you will join us in our mission to develop state of the art technologies and compete for championships.
                </p>
                <Button className="btn-primary" as={Link} to={"/donate"}
                        onClick={() => {window.scroll(0,0);}}>
                    Sponsor Us
                </Button>
            </Container>

        </React.Fragment>
    )
}