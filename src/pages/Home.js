import React, { useState } from 'react'
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Header from '../components/Header'
import "../content/styles/Header.scss";
import "../content/styles/Home.scss";
import "../content/styles/Button.scss";

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




function HomeIcon({icon, children}) {
  return (
    <Col md={3}>
        <i class={`fas ${icon} home-icon`} />
        <br />
        <p className="mt-1 home-icon-text">{children}</p>
    </Col>
  )
}

function HomeCard({im1, im2, linkTitle, link, children, index}) {
  return (
    <Col 
    xl={{span: 2, offset: index == 0 ? 0 : 0}} 
    lg={{ span: 4, offset: index == 3 ? 2 : 0 }} md={6}
    className={`
    mt-xl-0 ${index == 3 || index == 4 ? "mt-lg-4" : "mt-lg-0"}
    ${index == 2 || index == 3 || index == 4 ? "mt-md-4" : "mt-md-0"}
    mt-sm-4
    ml-auto mr-auto`}>
      <Card className="home-card m-auto h-100">
        <div className="home-card-images">
          <Card.Img src={im1} />
          <Card.Img src={im2} className="home-card-hidden" />
        </div>
        <Card.Body className="home-card-body text-center d-table m-auto">
          <p className="m-auto">{children}</p>
        </Card.Body>
        <Button variant="home-card" className="w-100 btn-sm" as={Link} to={link}>{linkTitle}</Button>
      </Card>
    </Col>
  )
}

const SubscriptionForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    });

  return (
    <Container>
      <Row noGutters={true}>
        <Col xs = {{offset: 2, span: 8}} md = {{span: 6, offset: 3}} lg = {{span:4, offset: 4}}>
        {status === "sending" && <div style={{ color: "blue", textAlign: "center" }}>Sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red", textAlign: "center"}}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green", textAlign: "center" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        </Col>
      </Row>
          
      <Row noGutters={false}>
        <Col xs = {{offset: 2, span: 8}} md = {{span: 6, offset: 3}} lg = {{span:4, offset: 4}}>
          <Row noGutters={true}>
            <Col xs = {{span: 8}}>
              <input
                style={{ fontSize: "1.4em", marginTop: "1rem", width: "100%", height: "85%"}}
                ref={node => (email = node)}
                type="email"
                placeholder="Email Address"
              />
            </Col>
            <Col className = "ml-1" xs = {{span: 3}}> 
              <Button className="btn-subscription" onClick={submit}>
                Go!
              </Button>
            </Col>     
          </Row>
        </Col>  
        <Col xs = {{offset: 4, span:4}} md = {{offset: 5, span: 2}}> 

        </Col>
      </Row>
    </Container>
  );
};

function Officer({pic}) {
    return (
        <div className={"headshot"} >
            <img className={"headshot-img"} src={pic}></img>
        </div>
    )
}

export default function Home() {
    return (
      <React.Fragment>
        {/*  Page Header */}
        <Container fluid="true" className="header">
            <Row>
                <Col>
                    <div className="header-img">
                        <h1 className={"header-text"}>
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

            <Row>
                <Col className={"mission-statement"}>
                    <p><b>Accelerate</b> the world's transition to sustainable energy</p>
                </Col>
                <Col className={"mission-statement"}>
                    <p><b>Develop</b> gator engineers through design and manufacturing experience</p>
                </Col>
                <Col className={"mission-statement"}>
                    <p><b>Inspire</b> students to explore their interests within STEM</p>
                </Col>
                <Col className={"mission-statement"}>
                    <p><b>Build</b> awareness within our community about the benefits of solar energy</p>
                </Col>
            </Row>
            <Row>
                <Button className="btn-primary" as={Link} to={"/about"}>About Us</Button>
            </Row>
        </Container>


          {/* Team Section */}
          <Container fluid="true" className="section" style={{backgroundColor: '#00203E' , height: "650px"}}>
              <Row>
                  <h2 className="heading2-text" style={{color:'white'}}>
                      The Team
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
                  <Button className="btn-primary" as={Link} to={"/team"}>Meet Our Team</Button>
              </Row>
          </Container>

          {/* Car Section */}
          <Container fluid="true" className="section" style={{height: "650px"}}>
              <Row>
                  <h2 className="heading2-text" style={{color:'#F37833'}}>
                      Our Cars
                  </h2>
              </Row>

              <Row>
                    <div className="car-card">
                        <img className="car-card-img" src={'../content/assets/images/car_pics/car1.jpg'}/>
                    </div>
              </Row>
          </Container>

        {/*  <Card className="section">*/}
        {/*    <Card.Body>*/}
        {/*      <Row className="text-center home-icon">*/}
        {/*        <HomeIcon icon="fa-wrench">3 cars built</HomeIcon>*/}
        {/*        <HomeIcon icon="fa-trophy">Founded in 2012</HomeIcon>*/}
        {/*        <HomeIcon icon="fa-users">17 sub-engineering teams</HomeIcon>*/}
        {/*        <HomeIcon icon="fa-certificate ">25+ sponsors</HomeIcon>*/}
        {/*      </Row>*/}
        {/*    </Card.Body>*/}
        {/*  </Card>*/}
        {/*/!*</Container>*!/*/}
        {/*<Container fluid={true} className="container-home-cards p-0">*/}
        {/*  <Row className="section">*/}
        {/*    <HomeCard index={0} im1={aboutUs1} im2={aboutUs2} linkTitle="About Us" link="/about">Our organization goes way back. Learn more about our history.</HomeCard>*/}
        {/*            <HomeCard index={1} im1={team1} im2={team2} linkTitle="The Team" link="/team">Solar Gators is a University of Florida student organization driven by passionate engineers and designers determined to win the Formula Sun Grand Prix.</HomeCard>*/}

        {/*    <HomeCard index={3} im1={contact1} im2={contact2} linkTitle="Contact Us" link="/contact">Shoot as an email with any inquiry or question you have about us.</HomeCard>*/}
        {/*    <HomeCard index={4} im1={sponsors1} im2={sponsors2} linkTitle="Sponsors" link="/sponsors">All of this is possible because of our sponsors. Check them out.</HomeCard>*/}
        {/*  </Row>*/}
        {/*</Container>*/}
      </React.Fragment>
    )
}
