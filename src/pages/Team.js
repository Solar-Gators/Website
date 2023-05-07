import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Header from '../components/Header'

import headerImg from "../content/assets/images/new-teams.JPG"
import president22 from "../content/assets/images/president22.JPG";
import vicepresident22 from "../content/assets/images/vicepresident22.JPG";
import treasurer22 from "../content/assets/images/treasurer22.JPG";
import secretary22 from "../content/assets/images/secretary22.JPG";
import business22 from "../content/assets/images/businesscoordinator22.JPG";
import mechanicalPM22 from "../content/assets/images/mechanicalPM22.JPG";
import electricalPM22 from "../content/assets/images/electricalPM22.JPG";
import integrationPM22 from "../content/assets/images/integrationPM22.JPG";
import aerobody22 from "../content/assets/images/aerobody22.JPG";
import batterypack22 from "../content/assets/images/batterypack22.JPG";
import brakes22 from "../content/assets/images/brakes22.JPG";
import suspension22 from "../content/assets/images/businesscoordinator22.JPG";
import chassis22 from "../content/assets/images/treasurer22.JPG";
import embeddedsystems22 from "../content/assets/images/embeddedsystems22.JPG";
import highvoltage22 from "../content/assets/images/highvoltage22.JPG";
import lowvoltage22 from "../content/assets/images/electricalPM22.JPG";
import powermanagement22 from "../content/assets/images/powermanagement22.JPG";

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

var names22 = ["Christian Michaelis", "Lauren Shaw", "Andrew Carter", "Anton Nguyen", "Stanley Noel",
    "Marcelo Valdez", "Taylor Gerke", "Timothy Dockham", "Alexander Theophanis", "Martin Lu", "Remington Ewing", "Stanley Noel",
    "Anton Nguyen", "Yashasvi Bhat", "Mathew Shen", "Taylor Gerke", "Emma Geon"];
var imgs22 = [president22, vicepresident22, secretary22, treasurer22, business22, mechanicalPM22, electricalPM22, integrationPM22, aerobody22, batterypack22, brakes22,
    suspension22, chassis22, embeddedsystems22, highvoltage22, lowvoltage22, powermanagement22];
var years22 = ["2020", "2020", "2021", "2020", "2020", "2020", "2019", "2020", "2020", "2021", "2020", "2020", "2020", "2019", "2021", "2019", "2021"];
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


var h_top_margin = 100;
var margin1 = 20;
var r_top_margin = 60;
var r_bottom_margin = 70;

function AcademicYear({ eventkey }) {
    var year1;
    var year2;

    if (eventkey === "201920") {
        year1 = 2019;
        year2 = 2020;
    } else if (eventkey === "202021") {
        year1 = 2020;
        year2 = 2021;
    } else if (eventkey === "202122") {
        year1 = 2021;
        year2 = 2022;
    } else if (eventkey === "202223") {
        year1 = 2022;
        year2 = 2023;
    }
    return (
        <h1 className="heading5-text">
            {year1} - {year2}
        </h1>
    );
}

function OfficerTeam({ name, title, img, year, eventkey }) {
  if (eventkey === "202223") {
    return (
      <Col>
        <div className={"heading2-text"} style={{paddingTop: "50px", paddingBottom: margin1}}>
          Executive Board
        </div>
        <Row style={{paddingTop: r_top_margin, paddingBottom: r_bottom_margin, justifyContent: "center"}}>
                <Officer name={name[0]} title="President"      img={img[0]} year={year[0]} />
                <Officer name={name[1]} title="Vice President" img={img[1]} year={year[1]} />
                <Officer name={name[2]} title="Secretary"      img={img[2]} year={year[2]} />
                <Officer name={name[3]} title={title[0]}       img={img[3]} year={year[3]} />
                <Officer name={name[4]} title={title[1]}       img={img[4]} year={year[4]} />
        </Row>

        <div className={"heading2-text"} style={{paddingTop: h_top_margin, paddingBottom: margin1}}>
           Project Managers
        </div>
        <Row style={{paddingTop: r_top_margin, paddingBottom: r_bottom_margin, justifyContent: "center"}}>
          <Officer name={name[5]} title="Mechanical PM"    img={img[5]} year={year[5]} />
          <Officer name={name[6]} title="Electrical PM"    img={img[6]} year={year[6]} />
          <Officer name={name[7]} title="Integration PM"   img={img[7]} year={year[7]} />
        </Row>

        <div className={"heading2-text"} style={{paddingTop: h_top_margin, paddingBottom: margin1}}>
          Mechanical and Aerobody
        </div>
        <Row style={{paddingTop: r_top_margin, paddingBottom: r_bottom_margin, justifyContent: "center"}}>
          <Officer name={name[8]} title="Aerobody"     img={img[8]}    year={year[8]} />
          <Officer name={name[9]} title="Battery Pack" img={img[9]}    year={year[9]} />
          <Officer name={name[10]} title="Brakes"      img={img[10]}   year={year[10]} />
          <Officer name={name[11]} title="Suspension"  img={img[11]}   year={year[11]} />
          <Officer name={name[12]} title="Chassis"     img={img[12]}   year={year[12]} />
        </Row>

        <div className={"heading2-text"} style={{paddingTop: h_top_margin, paddingBottom: margin1}}>
          Electrical
        </div>
        <Row style={{paddingTop: r_top_margin, paddingBottom: r_bottom_margin, justifyContent: "center"}}>
          <Officer name={name[13]} title="Embedded Systems"    img={img[13]} year={year[13]} />
          <Officer name={name[14]} title="High Voltage"        img={img[14]} year={year[14]} />
          <Officer name={name[15]} title="Low Voltage"         img={img[15]} year={year[15]} />
          <Officer name={name[16]} title="Power Management"    img={img[16]} year={year[16]} />
        </Row>

      </Col>
    )
  } else {
    return (
      <Col>
          <div className={"heading2-text"} style={{paddingTop: "50px", paddingBottom: margin1}}>
              Executive Board
          </div>
        <Row style={{paddingTop: r_top_margin, paddingBottom: r_bottom_margin, justifyContent: "center"}}>
          <Officer name={name[0]} title="President"        img={img[0]} year={year[19]} />
          <Officer name={name[1]} title="Vice President"   img={img[1]} year={year[20]} />
          <Officer name={name[2]} title="Secretary"        img={img[2]} year={year[21]} />
          <Officer name={name[3]} title="Treasurer"        img={img[3]} year={year[22]} />
          <Officer name={name[4]} title="Business Coordinator" img={img[4]} year={year[23]} />
        </Row>
      </Col>
    );
  }
}

function Officer({ name, title, img, year }) {
    var padding = 13.5;
    //to align title properly for people with long name
    if (name.length > 17) {
        padding = 2;
    }
    return (
        <Col style={{ maxWidth: '220px', paddingLeft: "1%", paddingRight: "1%" }}>
            <div className={"officer-container"}>
            <div className={"headshot"}>
            <img className={"headshot-img"} src={img}></img>
            </div>
                <h5 className="heading5-text" style={{paddingBottom: padding}}>{name}</h5>
                <h6 className="heading6-text" style={{paddingTop: padding}}>{title}</h6>
            </div>
        </Col>
    )
}

export default class Team extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            names: names22,
            imgs: imgs22,
            years: years22,
            eventkey: "202223"
        }
    }

    render() {
        return (
            <React.Fragment >
            {/*  Page Header    */}
            <Container fluid="true" className="header">
                <Row>
                    <Col>
                        <div className="team-header-img" style={{background: "headerImg"}}>
                            <h1 className={"title-text"}>
                              Our Team
                            </h1>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/*  Page Contents  */}
            <Container fluid="true" style={{background: "#00203E", paddingBottom: "40px",}}>
                {/*  Dropdown Menu  */}
                <Col style={{paddingTop: '40px', justifyContent: "center"}}>
                    <Dropdown onSelect={
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
                            if (eventKey === "202223") {
                                this.setState((state) => {
                                    return { names: names22, imgs: imgs22, years: years22, eventkey: eventKey }
                                });
                            }
                        }}
                    >
                        <Dropdown.Toggle className="btn-transparent" variant={"btn-transparent"} style={{justifyContent: "center"}}>
                            <AcademicYear eventkey={this.state.eventkey} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu">
                            <Dropdown.Item className="dropdown-row" style={{color: "white"}} eventKey="201920">2019 - 2020</Dropdown.Item>
                            <Dropdown.Item className="dropdown-row" style={{color: "white"}} eventKey="202021">2020 - 2021</Dropdown.Item>
                            <Dropdown.Item className="dropdown-row" style={{color: "white"}} eventKey="202122">2021 - 2022</Dropdown.Item>
                            <Dropdown.Item className="dropdown-row" style={{color: "white"}} eventKey="202223">2022 - 2023</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
              </Col>

              <OfficerTeam name={this.state.names} title={["Treasurer", "Business Coordinator"]} img={this.state.imgs} year={this.state.years} eventkey={this.state.eventkey} />

            </Container>
            </React.Fragment>
        );
    }
}
