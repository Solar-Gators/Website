import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import aboutUs1 from '../content/assets/images/about_us_1.JPG'
import aboutUs2 from '../content/assets/images/about_us_2.jpg'
import event1 from '../content/assets/images/event_1.jpg'

export default function About() {
  let getHeight = () => {
    return window.innerHeight - 62
  }

  const [imageHeight, setImageHeight] = useState(getHeight());

  window.onresize = () => {
    setImageHeight(getHeight())
  }

    return (
        <React.Fragment>
        <div className="about-section" style={{height: `${imageHeight}px`, margin: 0}}>
          <h1 className="about-centered ">About Us</h1>
        </div>
        <Container>
          <Row className="align-items-center about-row">
            <Col md={6}>
              <img className="img-fluid about-images rounded d-block m-auto" src={aboutUs2} />
            </Col>

            <Col md={6} className="mt-lg-0 mt-md-0 mt-sm-3 mt-3">
              <Card>
                <Card.Body>
                  <p>Solar Gators is a <strong>University of Florida student organization</strong> driven by passionate, eco-minded student engineers and designers. We are committed to designing, building, and racing a successful solar-powered vehicle that competes in the Formula Sun Grand Prix and the American Solar Challenge in 2019. Along the way, we aim to raise sustainability awareness amongst our peers, our community, and our world.</p>
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


          {/* <div className="ui grid middle aligned" style={{marginTop: '10vh', marginBottom: '10vh'}}>
            <div className="eight wide column">
              <div id="general-description" className="general-description ui stacked very padded segment">
                Our team was originally founded in 2012 with goals of racing in the summer of 2014.<br /> <br />A new group of UF students inherited the vestiges in the fall of 2016 with a goal of racing the following summer and did not fully realize their goals until a large donation from a sponsor six weeks out from competition.
              </div>
            </div>
            <div className="eight wide column">
              <img className="ui medium rounded centered image" src={event1} />
            </div>
          </div> */}
          {/* <div className="ui grid middle aligned" style={{marginTop: '10vh', marginBottom: '10vh'}}>
            <div className="eight wide column">
              <img className="ui medium rounded centered image" src={aboutUs1} />
            </div>
            <div className="eight wide column">
              <div id="general-description" className="general-description ui stacked very padded segment">
                The team aims to support the goals of the Herbert Wertheim College of Engineering by helping graduates meet the expectations of employers and by helping qualified graduates pursue advanced study through developing hands-on-applicable-skills within a solar race car design team.
              </div>
            </div>
          </div> */}
        </Container>
          {/* <div class="ui horizontal divider">
    MORE ABOUT US
  </div>
  <div class="ui grid middle aligned" style="margin-top: 2vh; margin-bottom: 2vh;">
    <div class="ui horizontal segments">
      <div class="ui segment">
        <p>Test</p>
      </div>
      <div class="ui segment">
        <p>Test</p>
      </div>
      <div class="ui segment">
        <p>Test</p>
      </div>
    </div>
  </div> */}

        </React.Fragment>
    )
}
