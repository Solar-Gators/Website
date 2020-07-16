import React, { useState } from "react";

import president from "../content/assets/images/president.JPG";
import vicepresident from "../content/assets/images/vicepresident.JPG";
import treasurer from "../content/assets/images/treasurer.JPG";
import secretary from "../content/assets/images/secretary.JPG";
import business from "../content/assets/images/business.JPG";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function Team() {
  let getHeight = () => {
    console.log(window.innerHeight);
    return window.innerHeight - 62;
  };

  const [homeImageHeight, setHomeImageHeight] = useState(getHeight());

  window.onresize = () => {
    setHomeImageHeight(getHeight());
  };
  return (
    <React.Fragment>
      <div
        className="team-first-section"
        style={{ height: `${homeImageHeight}px`, margin: 0 }}
      >
        <Container fluid={true}>
          <Row>
            <Col md={{ offset: 1 }}>
              <h1
                className="ui left aligned header"
                style={{
                  fontFamily: '"radnika"',
                  marginTop: "25vh",
                  fontSize: "9em",
                  color: "white",
                  opacity: "0.8",
                }}
              >
                The Team
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <h1
          className="ui dividing header"
          style={{ opacity: "0.8", margin: "4vh" }}
        >
          Officers
        </h1>
        <Row>
          <Col>
            <Card>
              <Card.Img top src={president} alt="President" />
              <Card.Body>
                <Card.Title>Stephen Thomas</Card.Title>
                <Card.Subtitle>President</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img top src={vicepresident} alt="Vice President" />
              <Card.Body>
                <Card.Title>Mariana Casas</Card.Title>
                <Card.Subtitle>Vice President</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: "4vh" }}>
          <Col>
            <Card>
              <Card.Img top src={secretary} alt="Secretary" />
              <Card.Body>
                <Card.Title>Katie Preiser</Card.Title>
                <Card.Subtitle>Secretary</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img top src={treasurer} alt="Treasurer" />
              <Card.Body>
                <Card.Title>Nathan Andreo</Card.Title>
                <Card.Subtitle>Treasurer</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img top src={business} alt="Business Coordinator" />
              <Card.Body>
                <Card.Title>Kaitlyn Lyons</Card.Title>
                <Card.Subtitle>Business Coordinator</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
