import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Header from '../components/Header'

import president20 from "../content/assets/images/president.JPG";
import vicepresident20 from "../content/assets/images/VicePresident20.png";
import treasurer20 from "../content/assets/images/Treasurer20.jpg";
import secretary20 from "../content/assets/images/Secretary20.png";
import business20 from "../content/assets/images/Business20.JPG";



function TeamCard({name, title, img, className}) {
  return (
  <Col className={`${className}`} style={{ maxWidth: '220px' }}>
    <Card>
      <Card.Img top src={img} alt={title} />
      <Card.Body className="pl-3 pr-3 pb-2">
        <h6 className="card-title">{name}</h6>
        <p style={{ fontSize: "14px", color: "rgba(0,0,0,.4)" }}>Member Since 2020</p>
        <h8 style={{ borderTop: '2px solid rgba(0,0,0,.05)' }} className="mt-auto d-block text-center">{title}</h8>
      </Card.Body>
    </Card>
  </Col>)
}

export default function Team() {
  return (
    <React.Fragment>
      <Header
        className="team-section"
      >
        <h1 className="about-centered ">The Team</h1>
      </Header>
      <Container>
        <h1
          className="line-divider"
          style={{ opacity: "0.8", margin: "4vh" }}
        >
          Officers
        </h1>
        <Row>
          <TeamCard name="Stephen Thomas" title="President" img={president20} className="ml-auto" />

          <TeamCard name="Charles Stone" title="Vice President" img={vicepresident20} />

          <TeamCard name="Irene Chung" title="Secretary" img={secretary20} className="mr-auto" />
        </Row>
        <Row style={{ marginTop: "4vh" }}>

          <TeamCard name="Yash Bhat" title="Treasurer" img={treasurer20} className="ml-auto" />
          <TeamCard name="Polina Leger" title="Business Coordinator" img={business20} className="mr-auto" />
        </Row>
      </Container>
    </React.Fragment>
  );
}
