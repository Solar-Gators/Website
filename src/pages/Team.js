import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Header from '../components/Header'

import president from "../content/assets/images/president.JPG";
import vicepresident from "../content/assets/images/vicepresident.JPG";
import treasurer from "../content/assets/images/treasurer.JPG";
import secretary from "../content/assets/images/secretary.JPG";
import business from "../content/assets/images/business.JPG";



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
          <TeamCard name="Stephen Thomas" title="President" img={president} className="ml-auto" />

          <TeamCard name="Mariana Casas" title="Vice President" img={vicepresident} />

          <TeamCard name="Katie Preiser" title="Secretary" img={secretary} className="mr-auto" />
        </Row>
        <Row style={{ marginTop: "4vh" }}>

          <TeamCard name="Nathan Andreo" title="Treasurer" img={treasurer} className="ml-auto" />
          <TeamCard name="Kaitlyn Lyons" title="Business Coordinator" img={business} className="mr-auto" />
        </Row>
      </Container>
    </React.Fragment>
  );
}
