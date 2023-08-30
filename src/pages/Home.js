import React from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

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

import MAE from "../content/assets/images/sponsor_logos/MAE.png";
import ZenithTecnica from "../content/assets/images/sponsor_logos/ZenithTecnica.png";
import ECE from "../content/assets/images/sponsor_logos/ECE.png";
import Header from "../components/Header";
import CarsSection from "../components/CarsSection/CarsSection";
import MissionStatements from "../components/MissionStatements/MissionStatements";
import fsgp23 from "../content/assets/images/people/team22/victory0_crop_edit.jpg";

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

          {/*  Mission Section */}
          <MissionStatements on_mobile={mobileView} white_background={true} button={true}/>

          {/*  Join Team  */}
          <Container fluid={"true"} className={"section"} >
              <h2>Join Our Team</h2>
              <div className={"join-team"}>
                  <p>
                    Interested in joining our team on the road to solar success?
                  </p>
                  <div id={"schedule"}>
                      <h5>Weekly Meeting Schedule</h5>
                      <div className={"flex-rows-center"}>
                          <p>MON & THURS</p>
                          <p>6:00 PM</p>
                          <p>Matherly Hall</p>
                      </div>
                  </div>
              </div>
          </Container>

          {/*  Team Section */}
          <Container fluid="true" className="section" style={{backgroundColor: '#00203E'}}>
              <Row>
                  <h2>
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

          {/* Car Section */}
          <CarsSection mobileView={mobileView}/>

          {/*  Sponsors Section */}
          <Container fluid="true" className="section">
              <Row>
                  <h2>
                      Become A Sponsor
                  </h2>
              </Row>

              <SponsorSection on_mobile={mobileView}/>
          </Container>

      </React.Fragment>
    )
}
