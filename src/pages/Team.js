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
import AB_body21 from "../content/assets/images/AB_body21.jpg";
import AB_solararray21 from "../content/assets/images/morgen.jpg";
import E_auxiliary21 from "../content/assets/images/AUX21.jpg";
import E_bms21 from "../content/assets/images/Treasurer20.jpg";
import E_motorcontroller from "../content/assets/images/Business21.png";
import E_powerboard from "../content/assets/images/Business20.JPG";
import E_telemetry from "../content/assets/images/mu.jpg";
import M_batterybox21 from "../content/assets/images/daniel.jpg";
import M_brakes21 from "../content/assets/images/Brendan21.jpg";
import M_chassis from "../content/assets/images/M_chassis.jpg";
import M_suspension from "../content/assets/images/M_suspension.JPG";

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

var names21 = ["Charles Stone", "Irene Chung", "Maya Greene", "Jamie Van Der Veken", "Christian Michaelis",
  "Justin Nelson", "Morgen Anthony", "Taylor Gerke", "Yash Bhat", "Christian Michaelis", "Polina Leger", "Muhamed Hobi",
  "Daniel Kogstrom", "Brendan Reiss", "Shane Lovello", "Jessica Le"];
var imgs21 = [president21, vicepresident21, secretary21, treasurer21, business21, AB_body21, AB_solararray21,
  E_auxiliary21, E_bms21, E_motorcontroller, E_powerboard, E_telemetry, M_batterybox21, M_brakes21, M_chassis, M_suspension];
var years21 = ["2019", "2019", "2019", "2019", "2019", "2019", "2019", "2020", "2019", "2019", "2019", "2019", "2020", "2019", "2019", "2019", "2019", "2019", "2020"];
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
      <Col>
        <h3
          // className="line-divider"
          style={{ opacity: "0.8", margin: "4vh" }}
        >
          Executive Board
        </h3>
        <Row style={{ marginTop: "4vh" }}>
          <TeamCard name={name[0]} title="President" img={img[0]} className="ml-auto" year={year[3]} />
          <TeamCard name={name[1]} title="Vice President" img={img[1]} year={year[4]} />
          <TeamCard name={name[2]} title="Secretary" img={img[2]} className="mr-auto" year={year[5]} />
        </Row>
        <Row style={{ marginTop: "4vh" }}>
          <TeamCard name={name[3]} title={title[0]} img={img[3]} className="ml-auto" year={year[6]} />
          <TeamCard name={name[4]} title={title[1]} img={img[4]} className="mr-auto" year={year[7]} />
        </Row>

        <h3
          // className="line-divider"
          style={{ opacity: "0.8", margin: "4vh" }}
        >
          Aero-Body
        </h3>
        <Row style={{ marginTop: "4vh" }}>
          <TeamCard name={name[5]} title="Body" img={img[5]} className="ml-auto" year={year[8]} />
          <TeamCard name={name[6]} title="Solar Array" img={img[6]} className="mr-auto" year={year[9]} />
        </Row>

        <h3
          // className="line-divider"
          style={{ opacity: "0.8", margin: "4vh" }}
        >
          Electrical
        </h3>
        <Row style={{ marginTop: "4vh" }}>
          <TeamCard name={name[7]} title="Auxiliary" img={img[7]} className="ml-auto" year={year[10]} />
          <TeamCard name={name[8]} title="Battery Manager" img={img[8]} year={year[11]} />
          <TeamCard name={name[9]} title="Motor Controller" img={img[9]} className="mr-auto" year={year[12]} />
        </Row>
        <Row style={{ marginTop: "4vh" }}>
          <TeamCard name={name[10]} title="Power Board" img={img[10]} className="ml-auto" year={year[13]} />
          <TeamCard name={name[11]} title="Telemetry" img={img[11]} className="mr-auto" year={year[14]} />
        </Row>

        <h3
          // className="line-divider"
          style={{ opacity: "0.8", margin: "4vh" }}
        >
          Mechanical
        </h3>
        <Row style={{ marginTop: "4vh" }}>
          <TeamCard name={name[12]} title="Battery Box" img={img[12]} className="ml-auto" year={year[15]} />
          <TeamCard name={name[13]} title="Brakes" img={img[13]} year={year[16]} />
          <TeamCard name={name[14]} title="Chassis" img={img[14]} className="mr-auto" year={year[17]} />
        </Row>
        <Row style={{ marginTop: "4vh" }}>
          <TeamCard name={name[15]} title="Suspension" img={img[15]} className="m-auto" year={year[18]} />
          </Row>
      </Col>
    )
  } else {
    return (
      <Col>
        <Row style={{ marginTop: "4vh" }}>
          <TeamCard name={name[0]} title="President" img={img[0]} className="ml-auto" year={year[19]} />
          <TeamCard name={name[1]} title="Vice President" img={img[1]} year={year[20]} />
          <TeamCard name={name[2]} title="Secretary" img={img[2]} className="mr-auto" year={year[21]} />
        </Row>
        <Row style={{ marginTop: "4vh" }}>
          <TeamCard name={name[3]} title="Treasurer" img={img[3]} className="ml-auto" year={year[22]} />
          <TeamCard name={name[4]} title="Business Coordinator" img={img[4]} className="mr-auto" year={year[23]} />
        </Row>
      </Col>
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

          <EventTeamCard name={this.state.names} title={["Treasurer", "Business Coordinator"]} img={this.state.imgs} year={this.state.years} eventkey={this.state.eventkey} />

        </Container>
      </React.Fragment>
    );
  }
}
