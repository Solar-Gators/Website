import React from 'react'
import {Link} from "react-router-dom"
import { useState } from 'react';
import { get_platinum_sponsors, get_gold_sponsors, get_silver_sponsors, get_bronze_sponsors } from "../content/assets/images/sponsor_logos/index";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from "react-bootstrap/Dropdown";

//Car 3 Sponsors - 2D Array [[logo, website link],...]
let platinum3 = get_platinum_sponsors("3");
let gold3 = get_gold_sponsors("3");
let silver3 = get_silver_sponsors("3");
let bronze3 = get_bronze_sponsors("3");


function SponsorRow({ img1, link1, img2, link2, img3, link3 }) {
    let LogoImage = ({ src, link }) => {
        return (
            <Col className="logo-col">
                <a href={link}>
                    <span className="align-center">
                        <img src={src} className="sponsor-logo" />
                    </span>
                </a>
            </Col>
        )
    }
  return (
    <Row className="no-margin-padding" style={{justifyContent: "center", alignItems: "center"}}>
      { img1 ? <LogoImage src={img1} link={link1} /> : ""}
      { img2 ? <LogoImage src={img2} link={link2} /> : ""}
      { img3 ? <LogoImage src={img3} link={link3} /> : ""}
    </Row>
  )
}

function ShowSponsors({car_num}) {
    if (car_num === "3") {
        return (
            <div>
                <h2 style={{paddingBottom: "10px"}}>Sunrider Sponsors</h2>
                <h6>2020 - 2023</h6>

                {/* PLATINUM */}
                <h3 style={{paddingTop: "8vw"}}>Platinum Sponsors</h3>
                <SponsorRow img1={platinum3[0][0]} link1={platinum3[0][1]} img2={platinum3[1][0]} link2={platinum3[1][1]} img3={platinum3[2][0]} link3={platinum3[2][1]} />

                {/* GOLD */}
                <h3>Gold Sponsors</h3>
                <SponsorRow img1={gold3[0][0]} link1={gold3[0][1]} img2={gold3[1][0]} link2={gold3[1][1]} img3={gold3[2][0]} link3={gold3[2][1]} />
                <SponsorRow img1={gold3[3][0]} link1={gold3[3][1]} img2={gold3[4][0]} link2={gold3[4][1]} />

                {/* SILVER */}
                <h3>Silver Sponsors</h3>
                <SponsorRow img1={silver3[0][0]} link1={silver3[0][1]} img2={silver3[1][0]} link2={silver3[1][1]} img3={silver3[2][0]} link3={silver3[2][1]} />
                <SponsorRow img1={silver3[3][0]} link1={silver3[3][1]} img2={silver3[4][0]} link2={silver3[4][1]} img3={silver3[5][0]} link3={silver3[5][1]}/>
                <SponsorRow img1={silver3[6][0]} link1={silver3[6][1]} img2={silver3[7][0]} link2={silver3[7][1]} img3={silver3[8][0]} link3={silver3[8][1]}/>

                {/* BRONZE */}
                <h3>Bronze Sponsors</h3>
                <SponsorRow img1={bronze3[0][0]} link1={bronze3[0][1]} img2={bronze3[1][0]} link2={bronze3[1][1]} img3={bronze3[2][0]} link3={bronze3[2][1]} />
                <SponsorRow img1={bronze3[3][0]} link1={bronze3[3][1]} img2={bronze3[4][0]} link2={bronze3[4][1]} img3={bronze3[5][0]} link3={bronze3[5][1]}/>
                <SponsorRow img1={bronze3[6][0]} link1={bronze3[6][1]} img2={bronze3[7][0]} link2={bronze3[7][1]} img3={bronze3[8][0]} link3={bronze3[8][1]} />
                <SponsorRow img1={bronze3[9][0]} link1={bronze3[9][1]} img2={bronze3[10][0]} link2={bronze3[10][1]} img3={bronze3[11][0]} link3={bronze3[11][1]}/>
                <SponsorRow img1={bronze3[12][0]} link1={bronze3[12][1]}  img2={bronze3[13][0]} link2={bronze3[13][1]} img3={bronze3[14][0]} link3={bronze3[14][1]}/>
            </div>
        );
    }
    else {
        return (
            <div>
                <h2 style={{paddingBottom: "10px"}}>Flare Sponsors</h2>
                <h6>2024 - present</h6>

                {/* PLATINUM */}
                <h3 style={{paddingTop: "8vw"}}>Platinum Sponsors</h3>
                {/*<SponsorRow img1={platinum3[0][0]} link1={platinum3[0][1]} img2={platinum3[1][0]} link2={platinum3[1][1]} img3={platinum3[2][0]} link3={platinum3[2][1]} />*/}

                {/* GOLD */}
                <h3>Gold Sponsors</h3>
                {/*<SponsorRow img1={gold3[0][0]} link1={gold3[0][1]} img2={gold3[1][0]} link2={gold3[1][1]} img3={gold3[2][0]} link3={gold3[2][1]} />*/}
                {/*<SponsorRow img1={gold3[3][0]} link1={gold3[3][1]} img2={gold3[4][0]} link2={gold3[4][1]} />*/}

                {/* SILVER */}
                <h3>Silver Sponsors</h3>
                {/*<SponsorRow img1={silver3[0][0]} link1={silver3[0][1]} img2={silver3[1][0]} link2={silver3[1][1]} img3={silver3[2][0]} link3={silver3[2][1]} />*/}
                {/*<SponsorRow img1={silver3[3][0]} link1={silver3[3][1]} img2={silver3[4][0]} link2={silver3[4][1]} img3={silver3[5][0]} link3={silver3[5][1]}/>*/}
                {/*<SponsorRow img1={silver3[6][0]} link1={silver3[6][1]} img2={silver3[7][0]} link2={silver3[7][1]} img3={silver3[8][0]} link3={silver3[8][1]}/>*/}

                {/* BRONZE */}
                <h3>Bronze Sponsors</h3>
                {/*<SponsorRow img1={bronze3[0][0]} link1={bronze3[0][1]} img2={bronze3[1][0]} link2={bronze3[1][1]} img3={bronze3[2][0]} link3={bronze3[2][1]} />*/}
                {/*<SponsorRow img1={bronze3[3][0]} link1={bronze3[3][1]} img2={bronze3[4][0]} link2={bronze3[4][1]} img3={bronze3[5][0]} link3={bronze3[5][1]}/>*/}
                {/*<SponsorRow img1={bronze3[6][0]} link1={bronze3[6][1]} img2={bronze3[7][0]} link2={bronze3[7][1]} img3={bronze3[8][0]} link3={bronze3[8][1]} />*/}
                {/*<SponsorRow img1={bronze3[9][0]} link1={bronze3[9][1]} img2={bronze3[10][0]} link2={bronze3[10][1]} img3={bronze3[11][0]} link3={bronze3[11][1]}/>*/}
                {/*<SponsorRow img1={bronze3[12][0]} link1={bronze3[12][1]}  img2={bronze3[13][0]} link2={bronze3[13][1]} img3={bronze3[14][0]} link3={bronze3[14][1]}/>*/}
            </div>
        );
    }
}

export default function Sponsor() {
    const [carNum, setCarNum] = useState("3");
    const [carName, setCarName] = useState("Sunrider");

    //react hook functions
    function SetCar() {
        if(carNum === "3") {
            setCarNum("4");
            setCarName("Flare");
        }
        else {
            setCarNum("3");
            setCarName("Sunrider");
        }
    }

    return (
        <React.Fragment>
            {/*  Page Header */}
            <Container fluid="true" className="header">
                <Row>
                    <Col>
                        <div className="sponsor-header-img">
                            <h1 className={"title-text"}>
                                Sponsors
                            </h1>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/*  Sponsorship Blurb */}
            <Container fluid="true" className="section" style={{background: "#00203E"}}>
                <Row className="no-margin-padding" style={{justifyContent: "center"}}>
                    <p className={"body-text-white"} style={{textAlign: "center"}}>
                        Our mission to show the potential of solar energy is made possible by our wonderful sponsors.
                        Their generosity and commitment to sustainability are instrumental in helping us
                        design, build and test our solar cars. Thank you.
                    </p>
                </Row>
            </Container>

            {/*  Dropdown Menu  */}
            <Container fluid="true" className="section">
                <Col style={{justifyContent: "center", marginBottom: "6rem"}}>
                    <Dropdown onSelect={(car) => SetCar()}>
                        <Dropdown.Toggle className="btn-transparent" variant={"btn-transparent"} style={{justifyContent: "center", alignItems: "center"}}>
                            <h5 id={"sponsor-dropdown-h5"}>Car {carNum} - {carName}</h5>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu">
                            <Dropdown.Item className="dropdown-row" style={{color: "white"}} car="3">Car 3 - Sunrider</Dropdown.Item>
                            <Dropdown.Item className="dropdown-row" style={{color: "white"}} car="4">Car 4 - Flare</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>

                {/*Display Sponsor Logos*/}
                <ShowSponsors car_num={carNum}/>
            </Container>
        </React.Fragment>
    )
}
