import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Header from '../components/Header'

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
 
var names = ["Stephen Thomas", "Charles Stone", "Irene Chung", "Yash Bhat", "Polina Leger"];
var imgs = [president20, vicepresident20, secretary20, treasurer20, business20];
var years = ["2017", "2018", "2019", "2019", "2019"];
var names20 = ["Stephen Thomas", "Charles Stone", "Irene Chung", "Yash Bhat", "Polina Leger"];
var imgs20 = [president20, vicepresident20, secretary20, treasurer20, business20];
var years20 = ["2017", "2019", "2019", "2019", "2019"];
var names19 = ["Stephen Thomas","Mariana Casas","Katie Preiser","Nathan Andreo","Kaitlyn Lyons"];
var imgs19 = [president19, vicepresident19, secretary19, treasurer19, business19];
var years19 = ["2017", "2017", "2017", "2017", "2018"];


function TeamCard({name, title, img, className, year}) {
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



export default class Team extends React.Component{
constructor(props) {
    super(props)
    this.state = {
      names: names20,
      imgs: imgs20,
      years: years20
    }
}

  render(){
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
          <TeamCard name = {this.state.names[0]} title ="President" img ={this.state.imgs[0]} className ="ml-auto" year = {this.state.years[0]}/>

          <TeamCard name = {this.state.names[1]} title="Vice President" img={this.state.imgs[1]} year = {this.state.years[1]}/>

          <TeamCard name = {this.state.names[2]} title="Secretary" img={this.state.imgs[2]} className="mr-auto" year = {this.state.years[2]}/>
          <Dropdown
          onSelect={
            (eventKey) =>
            { 
              if(eventKey === "201920")
              {
                this.setState((state) =>{
                    return { names: names19, imgs: imgs19, years: years19}
                });
              }
              if(eventKey === "202021")
              {
                this.setState((state) =>{
                  return { names: names20, imgs: imgs20, years: years20}
                });
              }
            }}>
          <Dropdown.Toggle variant="Primary" id="dropdown-basic" className = "ml-auto">
             Past Years
          </Dropdown.Toggle>
        
          <Dropdown.Menu>
          <Dropdown.Item eventKey = "202021" >2020-2021</Dropdown.Item>
          <Dropdown.Item eventKey = "201920">2019-2020</Dropdown.Item>
            
          </Dropdown.Menu>

          </Dropdown>
        </Row>
        <Row style={{ marginTop: "4vh" }}>
          <TeamCard name={this.state.names[3]} title="Treasurer" img={this.state.imgs[3]} className="ml-auto" year = {this.state.years[3]}/>
          <TeamCard name={this.state.names[4]} title="Business Coordinator" img={this.state.imgs[4]} className="mr-auto" year = {this.state.years[4]}/>
        </Row>
      </Container>
    </React.Fragment>
  ); 
}
}
