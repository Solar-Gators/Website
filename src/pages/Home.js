import React from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import Header from "../components/Header";
import CarsSection from "../components/CarsSection/CarsSection";
import MissionStatements from "../components/MissionStatements/MissionStatements";
import { get_eboard, get_elec, get_mech, get_pms } from "../content/assets/images/officers";

import fsgp23 from "../content/assets/images/people/team22/victory0_crop_edit.jpg";
import MAE from "../content/assets/images/sponsor_logos/MAE.png";
import ZenithTecnica from "../content/assets/images/sponsor_logos/ZenithTecnica.png";
import ECE from "../content/assets/images/sponsor_logos/ECE.png";

//2022-23 Officers: (Names, Positions, Headshot)
let executive_board22 = get_eboard("2022");
let pms22 = get_pms("2022");
let mech_aero22 = get_mech("2022");
let electrical22 =  get_elec("2022");

//Car 3 Platinum Sponsors
let platinum3 = [[MAE, "https://mae.ufl.edu/"], [ZenithTecnica, "https://www.zenithtecnica.com/"], [ECE, "https://www.ece.ufl.edu/"]];

function Officer({pic}) {
    //creates individual officer headshot container w image
    return (
        <div className={"headshot"} >
            <img className={"headshot-img"} src={pic} alt={"headshot"}/>
        </div>
    )
}

function SponsorSection ({on_mobile}) {
    let LogoImage = ({ src, link }) => {
        if (on_mobile) {
            return (
                <Col className="logo-col">
                    <a href={link}>
                        <span className="align-center">
                            <img src={src} className="sponsor-logo" alt={"logo"}/>
                        </span>
                    </a>
                </Col>
            )
        }
        else {
            return (
                <Col className="logo-col" style={{maxWidth: "18vw", margin: "2vw 0"}}>
                    <a href={link}>
                        <span className="align-center">
                            <img src={src} className="sponsor-logo" style={{maxWidth: "18vw", padding: "0 2vw"}} alt={"logo"}/>
                        </span>
                    </a>
                </Col>
            )
        }
    }
    let SponsorRow = ({link1, img1, link2, img2, link3, img3}) => {
        //creates Row with one (two or three) sponsor logos
        return (
            <Row className="no-margin-padding" style={{justifyContent: "center", alignItems: "center", marginBottom: "15px"}}>
                { img1 ? <LogoImage src={img1} link={link1} /> : ""}
                { img2 ? <LogoImage src={img2} link={link2} /> : ""}
                { img3 ? <LogoImage src={img3} link={link3} /> : ""}
            </Row>
        )
    }
    if (on_mobile) {
        return (
            <Col>
                <Row>
                    <SponsorRow img1={platinum3[0][0]} link1={platinum3[0][1]}
                                 img2={platinum3[1][0]} link2={platinum3[1][1]}
                                 img3={platinum3[2][0]} link3={platinum3[2][1]}
                    />
                </Row>

                <p>
                    Solar Gators relies on the support of sponsors to further our mission of showing the potential of solar energy. Sponsoring us means becoming an integral part of our team, and helping to inspire the next generation of engineers and innovators. Join us on our mission towards a brighter, more sustainable future.
                </p>

                <Row>
                    <Button className="btn-primary"
                            as={Link} to={"/donate"}
                            onClick={() => {window.scroll(0,0);}}>
                        Donate
                    </Button>
                </Row>
            </Col>
        )
    }
    else {
        return (
            <Row>
                <Col className={"no-margin-padding"} id="sponsor_logos_half">
                    <SponsorRow img1={platinum3[0][0]} link1={platinum3[0][1]} img2={platinum3[2][0]} link2={platinum3[2][1]}></SponsorRow>
                    <SponsorRow img1={platinum3[1][0]} link1={platinum3[1][1]}></SponsorRow>
                </Col>
                <Col className={"no-margin-padding"}>
                    <Container >
                        <Row >
                            <p>
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
                                Donate
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
          <Header title={"Powered By Florida sunshine"}
                  imgcss={"home-header-img"}/>

          {/* FSGP 23 Champions */}
          <Container fluid="true" className="section" style={{background: "#00203E"}}>
              <Row className={"fsgp-row"}>
                  <h2>
                      Solar Gators Victory!
                  </h2>
                  <p className={"body-text-white"} style={{textAlign: "center"}}>
                      Our team achieved an electrifying
                      <span className={"accent_word"} id={"orange_accent"}> victory at this year's Formula Sun Grand Prix (FSGP)</span>
                      , solidifying our position as pioneers in solar-powered endurance racing.
                      Battling against formidable competitors from around the country, our team demonstrated their exceptional engineering prowess and unyielding determination, ultimately crossing the finish line in an awe-inspiring
                      <span className={"accent_word"} id={"orange_accent"}> first place</span>
                      . Additionally, our team received awards for
                      <span className={"accent_word"} id={"orange_accent"}> Most Improved </span>
                      and
                      <span className={"accent_word"} id={"orange_accent"}> Aesthetics</span>
                      .
                  </p>
                  <img src={fsgp23} alt={""}/>
              </Row>
          </Container>

          {/*  Join Team  */}
          <Container fluid="true" className={"section"} >
              <h2>Join Our Team</h2>
              <div className={"join-team"}>
                  <p>Interested in joining us on the road to solar success? Fill out our <a href={"https://docs.google.com/forms/d/e/1FAIpQLSdxo60I7caWoVV9q_ASSbCC-DZLAxdsBqwobLBTsZWxY3mGhQ/viewform"}
                  ><span className={"accent_link"}>new member interest form.</span></a>
                  </p>
                  <div id={"schedule"}>
                      <h5>Weekly Meeting Schedule</h5>
                      <div className={"flex-rows-center"}>
                          <p className={"accent_word"}>MON & THURS</p>
                          <p>6:00 PM</p>
                          <p>Matherly Hall</p>
                      </div>
                  </div>
              </div>
          </Container>

          {/*  Mission Section */}
          <MissionStatements on_mobile={mobileView} white_background={true} button={true}/>

          {/*  Team Section */}
          <Container fluid="true" className="section" style={{backgroundColor: '#00203E'}}>
              <h2>Meet The Team</h2>
              <div className={"slider"}>
                  <div className={"slide-track"}>
                      <Officer pic={executive_board22[0][2]}/>
                      <Officer pic={executive_board22[1][2]}/>
                      <Officer pic={executive_board22[2][2]}/>
                      <Officer pic={executive_board22[3][2]}/>
                      <Officer pic={executive_board22[4][2]}/>
                      <Officer pic={pms22[0][2]}/>
                      <Officer pic={pms22[1][2]}/>
                      <Officer pic={pms22[2][2]}/>
                      <Officer pic={mech_aero22[0][2]}/>
                      <Officer pic={mech_aero22[1][2]}/>
                      <Officer pic={mech_aero22[2][2]}/>
                      <Officer pic={electrical22[0][2]}/>
                      <Officer pic={electrical22[1][2]}/>
                      <Officer pic={electrical22[3][2]}/>
                  </div>
              </div>
              <Button className="btn-primary" as={Link} to={"/team"}
                      onClick={() => {window.scroll(0,0);}}>
                  Team 2023
              </Button>
          </Container>

          {/* Car Section */}
          <CarsSection mobileView={mobileView}/>

          {/*  Sponsors Section */}
          <Container fluid="true" className="section">
              <h2>Become A Sponsor</h2>
              <SponsorSection on_mobile={mobileView}/>
          </Container>

      </React.Fragment>
    )
}
