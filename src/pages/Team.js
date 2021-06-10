import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Header from '../components/Header'

import president21 from "../content/assets/images/VicePresident20.png";
import vicepresident21 from "../content/assets/images/Secretary20.png";
import treasurer21 from "../content/assets/images/Treasurer21.jpg";
import secretary21 from "../content/assets/images/Secretary21.jpg";
import business21 from "../content/assets/images/Business21.png";

import president20 from "../content/assets/images/president20.JPG";
import vicepresident20 from "../content/assets/images/VicePresident20.png";
import treasurer20 from "../content/assets/images/Treasurer20.jpg";
import secretary20 from "../content/assets/images/Secretary20.png";
import business20 from "../content/assets/images/Business20.JPG";
import president19 from "../content/assets/images/president20.JPG";
import vicepresident19 from "../content/assets/images/vicepresident19.JPG";
import treasurer19 from "../content/assets/images/treasurer19.JPG";
import secretary19 from "../content/assets/images/secretary19.JPG";
import business19 from "../content/assets/images/business19.JPG";

var names21 = ["Charles Stone", "Irene Chung", "Maya Greene", "Jamie Van Der Veken", "Kiran Mital", "Christian Michaelis"];
var imgs21 = [president21, vicepresident21, secretary21, treasurer21, business21];
var years21 = ["2019", "2019", "2019", "2019", "2019", "2019"];
var names20 = ["Stephen Thomas", "Charles Stone", "Irene Chung", "Yash Bhat", "Polina Leger"];
var imgs20 = [president20, vicepresident20, secretary20, treasurer20, business20];
var years20 = ["2017", "2019", "2019", "2019", "2019"];
var names19 = ["Stephen Thomas", "Mariana Casas", "Katie Preiser", "Nathan Andreo", "Kaitlyn Lyons"];
var imgs19 = [president19, vicepresident19, secretary19, treasurer19, business19];
var years19 = ["2017", "2017", "2017", "2017", "2018"];

function OfficerTitle({ eventkey }) {
  if (eventkey === "201920") {
    return (
      <h1
        className="line-divider"
        style={{ opacity: "0.8", margin: "4vh" }}
      >
        Officers 2019-2020
      </h1>);
  }
  if (eventkey === "202021") {
    return (
      <h1
        className="line-divider"
        style={{ opacity: "0.8", margin: "4vh" }}
      >
        Officers 2020-2021
      </h1>);
  }
  if (eventkey === "202122") {
    return (
      <h1
        className="line-divider"
        style={{ opacity: "0.8", margin: "4vh" }}
      >
        Officers 2021-2022
      </h1>);
  }
  return (
    <h1
      className="line-divider"
      style={{ opacity: "0.8", margin: "4vh" }}
    >
      Officers
    </h1>);
}

function EventTeamCard({ name, title, img, year, eventkey }) {
  if (eventkey === "202122") {
    return (
      <Row style={{ marginTop: "4vh" }}>
        <TeamCard name={name[3]} title={title[0]} img={img[3]} className="ml-auto" year={year[3]} />
        <TeamCard name={name[5]} title={title[0]} img={img[5]} year={year[5]} />
        <TeamCard name={name[4]} title={title[1]} img={img[4]} className="mr-auto" year={year[4]} />
      </Row>
    )
  } else {
    return (
      <Row style={{ marginTop: "4vh" }}>
        <TeamCard name={name[3]} title={title[0]} img={img[3]} className="ml-auto" year={year[3]} />
        <TeamCard name={name[4]} title={title[1]} img={img[4]} className="mr-auto" year={year[4]} />
      </Row>
    );
  }
}

function TeamCard({ name, title, img, className, year }) {
  return (
    <Col className={`${className}`} style={{ maxWidth: '220px' }}>
      <Card>
        <Card.Img top src={img} alt={title} />
        <Card.Body className="pl-3 pr-3 pb-2">
          <h6 className="card-title">{name}</h6>
          <p style={{ fontSize: "14px", color: "rgba(0,0,0,.4)" }}>Member Since {year}</p>
          <h8 style={{ borderTop: '2px solid rgba(0,0,0,.05)' }} className="mt-auto d-block text-center">{title}</h8>
        </Card.Body>
      </Card>
    </Col>)
}

export default class Team extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      names: names21,
      imgs: imgs21,
      years: years21,
      eventkey: "202122"
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header
          className="team-section"
        >
          <h1 className="about-centered ">The Team</h1>
        </Header>
        <Container>
          <OfficerTitle eventkey={this.state.eventkey} />
          <Col className="text-center">
            <Dropdown
              onSelect={
                (eventKey) => {
                  if (eventKey === "201920") {
                    this.setState((state) => {
                      return { names: names19, imgs: imgs19, years: years19, eventkey: eventKey }
                    });
                  }
                  if (eventKey === "202021") {
                    this.setState((state) => {
                      return { names: names20, imgs: imgs20, years: years20, eventkey: eventKey }
                    });
                  }
                  if (eventKey === "202122") {
                    this.setState((state) => {
                      return { names: names21, imgs: imgs21, years: years21, eventkey: eventKey }
                    });
                  }
                }}>
              <Dropdown.Toggle variant="Primary" id="dropdown-basic" className="ml-auto">
                Past Years
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="202122" >2021-2022</Dropdown.Item>
                <Dropdown.Item eventKey="202021" >2020-2021</Dropdown.Item>
                <Dropdown.Item eventKey="201920" >2019-2020</Dropdown.Item>

              </Dropdown.Menu>

            </Dropdown>
          </Col>
          <Col>
            <Row style={{ marginTop: "4vh" }}>
              <TeamCard name={this.state.names[0]} title="President" img={this.state.imgs[0]} className="ml-auto" year={this.state.years[0]} />
              <TeamCard name={this.state.names[1]} title="Vice President" img={this.state.imgs[1]} year={this.state.years[1]} />
              <TeamCard name={this.state.names[2]} title="Secretary" img={this.state.imgs[2]} className="mr-auto" year={this.state.years[2]} />
            </Row>
            <Row style={{ marginTop: "4vh" }}>
              <TeamCard name={this.state.names[3]} title="Treasurer" img={this.state.imgs[3]} className="ml-auto" year={this.state.years[3]} />
              <TeamCard name={this.state.names[4]} title="Business Coordinator" img={this.state.imgs[4]} className="mr-auto" year={this.state.years[4]} />
            </Row>
            {/* <EventTeamCard name={this.state.names} title={["Treasurer", "Business Coordinator"]} img={this.state.imgs} year={this.state.years} eventkey={this.state.eventkey} /> */}
          </Col>
        </Container>
      </React.Fragment>
    );
  }
}
