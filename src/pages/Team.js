import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";

import president22      from "../content/assets/images/officers/2022/president22.JPG";
import vicepresident22  from "../content/assets/images/officers/2022/vp22.JPG";
import treasurer22      from "../content/assets/images/officers/2022/treasurer22.JPG";
import secretary22      from "../content/assets/images/officers/2022/secretary22.JPG";
import business22       from "../content/assets/images/officers/2022/business22.JPG";
import mechanicalPM22   from "../content/assets/images/officers/2022/mechPM22.JPG";
import electricalPM22   from "../content/assets/images/officers/2022/electricalPM22.JPG";
import integrationPM22  from "../content/assets/images/officers/2022/integPM22.JPG";
import aerobody22       from "../content/assets/images/officers/2022/aero22.JPG";
import batterypack22    from "../content/assets/images/officers/2022/battery22.JPG";
import brakes22         from "../content/assets/images/officers/2022/brakes22.JPG";
import suspension22     from "../content/assets/images/officers/2022/business22.JPG";
import chassis22        from "../content/assets/images/officers/2022/treasurer22.JPG";
import embeddedsystems22 from "../content/assets/images/officers/2022/embedsyst22.JPG";
import highvoltage22    from "../content/assets/images/officers/2022/highvolt22.JPG";
import lowvoltage22     from "../content/assets/images/officers/2022/electricalPM22.JPG";
import powermanagement22 from "../content/assets/images/officers/2022/power22.JPG";

import president21      from "../content/assets/images/officers/2021/president21.png";
import vicepresident21  from "../content/assets/images/officers/2021/vp21.png";
import treasurer21      from "../content/assets/images/officers/2021/treasurer21.jpg";
import secretary21      from "../content/assets/images/officers/2021/secretary21.jpg";
import business21       from "../content/assets/images/officers/2021/business21.png";
import aerobody21       from "../content/assets/images/officers/2021/aero21.jpg";     //update to pierre
import solararray21     from "../content/assets/images/officers/2021/solararray21.jpg";
import auxiliary21      from "../content/assets/images/officers/2021/auxilary21.jpg";
import bms21            from "../content/assets/images/officers/2021/bms21.jpg";
import motorcontroller21 from "../content/assets/images/officers/2021/business21.png";
import powerboard21     from "../content/assets/images/officers/2021/power21.JPG";
import telemetry21      from "../content/assets/images/officers/2021/telemetry21.jpg";
import battery21        from "../content/assets/images/officers/2022/mechPM22.JPG";
import brakes21         from "../content/assets/images/officers/2022/vp22.JPG";
import chassis21        from "../content/assets/images/officers/2021/chassis21.jpg";
import suspension21     from "../content/assets/images/officers/2021/suspension21.JPG";

import president20      from "../content/assets/images/officers/2020/president20.JPG";
import vicepresident20  from "../content/assets/images/officers/2020/vicepresident20.png";
import treasurer20      from "../content/assets/images/officers/2020/treasurer20.jpg";
import secretary20      from "../content/assets/images/officers/2020/secretary20.png";
import business20       from "../content/assets/images/officers/2020/business20.JPG";

import president19      from "../content/assets/images/officers/2019/president19.JPG";
import vicepresident19  from "../content/assets/images/officers/2019/vicepresident19.JPG";
import treasurer19      from "../content/assets/images/officers/2019/treasurer19.JPG";
import secretary19      from "../content/assets/images/officers/2019/secretary19.JPG";
import business19       from "../content/assets/images/officers/2019/business19.JPG";

//2022-23 Officers: (Names, Positions, Headshot)
let executive_board22 = [["Christian Michaelis", "President", president22], ["Lauren Shaw", "Vice President", vicepresident22], ["Andrew Carter", "Secretary", secretary22],
    ["Anton Nguyen", "Treasurer", treasurer22], ["Stanley Noel", "Business Coordinator", business22]];
let pms22 = [["Marcelo Valdez", "Mechanical PM", mechanicalPM22], ["Taylor Gerke", "Electrical PM", electricalPM22], ["Timothy Dockham", "Integration PM", integrationPM22]];
let mech_aero22 = [["Alexander Theophanis", "Aerobody", aerobody22], ["Martin Lu", "Battery Pack", batterypack22], ["Remington Ewing", "Brakes", brakes22],
    ["Stanley Noel", "Suspension", suspension22], ["Anton Nguyen", "Chassis", chassis22]];
let electrical22 =  [ ["Yashasvi Bhat", "Embedded Systems", embeddedsystems22], ["Mathew Shen", "High Voltage", highvoltage22],
    ["Taylor Gerke", "Low Voltage", lowvoltage22], ["Emma Geon", "Power Management", powermanagement22]];

//2021-22 Officers
let executive_board21 = [["Charles Stone", "President", president21], ["Irene Chung", "Vice President",vicepresident21],
    ["Maya Greene", "Secretary", secretary21], ["Jamie Van Der Veken", "Treasurer", treasurer21],
    ["Christian Michaelis", "Business Coordinator", business21]];
let pms21 = [["Brenden Reiss", "Mechanical PM"], ["Muhamed Hobi", "Electrical PM"], ["Pierre Angibaud", "Aero PM"]];
//aerobody: Pierre Angibaud
let mech_aero21 =[["Justin Nelson", "Aerobody", aerobody21], ["Morgen Anthony", "Solar Array", solararray21], ["Marcelo Valdez", "Battery Box", battery21],
    ["Lauren Shaw","Brakes", brakes21], ["Shane Lovello","Chassis",chassis21], ["Jessica Le", "Suspension", suspension21]];
let electrical21 = [["Taylor Gerke", "Auxiliary", auxiliary21], ["Yash Bhat", "Battery Management", bms21],
    ["Christian Michaelis", "Motor Control", motorcontroller21], ["Polina Leger", "Power Board", powerboard21],
    ["Muhamed Hobi", "Telemetry", telemetry21]];

//2020-21 Officers
let executive_board20 = [["Stephen Thomas", "President", president20], ["Charles Stone", "Vice President",vicepresident20],
    ["Yash Bhat", "Treasurer", treasurer20], ["Irene Chung", "Secretary", secretary20],
    ["Polina Leger", "Business Coordinator", business20]];
let pms20 = [["Bridgette Ortiz & Adam Edwards", "Mechanical PM"],
    ["Samuel Cuervo", "Electrical PM"],
    ["Valeria Niebles & Jennifer Brett", "Aero PM"]];


//2019-20 Officers
let executive_board19 = [["Stephen Thomas", "President", president19], ["Mariana Casas", "Vice President",vicepresident19],
    ["Nathan Andreo", "Treasurer", treasurer19], ["Katie Preiser", "Secretary", secretary19],
    ["Kaitlyn Lyons", "Business Coordinator", business19]];

let pms19 = [["Jovani Hernandez", "Mechanical PM"], ["John Carr", "Electrical PM"], ["Pierre Angibaud", "Aero PM"], ["Valeria Giraldo", "General PM"]];
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

function OfficerTeam({ eventkey, executive_board, on_mobile }) {

    //Individual Officer
    let Officer = ({ name, title, img }) => {
        let padding = 13.5;
        if (on_mobile) {
            padding = 2;
        }
        //to align title properly for people with long name
        if (name.length > 19) {
            padding = 2;
        }
        return (
            <Col className="officer-col">
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

    //Row of officers in same category
    let OfficersRow = ({heading, officers}) => {
        return (
            <Row className="no-margin-padding" style={{justifyContent: "center"}}>
                <h2 className={"heading2-text"} id="officer-category-heading">{heading}</h2>
                {officers[0] ? <Officer name={officers[0][0]} title={officers[0][1]} img={officers[0][2]}/> : ""}
                {officers[1] ? <Officer name={officers[1][0]} title={officers[1][1]} img={officers[1][2]}/> : ""}
                {officers[2] ? <Officer name={officers[2][0]} title={officers[2][1]} img={officers[2][2]}/> : ""}
                {officers[3] ? <Officer name={officers[3][0]} title={officers[3][1]} img={officers[3][2]}/> : ""}
                {officers[4] ? <Officer name={officers[4][0]} title={officers[4][1]} img={officers[4][2]}/> : ""}
                {officers[5] ? <Officer name={officers[5][0]} title={officers[5][1]} img={officers[5][2]}/> : ""}
            </Row>
        )
    }

    //Officer Year
    if (eventkey === "202223") {
        return (
            <Col className="no-margin-padding" style={{justifyContent: "center"}}>
                <OfficersRow heading="Executive Board" officers={executive_board22}></OfficersRow>
                <OfficersRow heading="Project Managers" officers={pms22}></OfficersRow>
                <OfficersRow heading="Mechanical and Aerobody" officers={mech_aero22}></OfficersRow>
                <OfficersRow heading="Electrical" officers={electrical22}></OfficersRow>
            </Col>
        )
    }
    else if (eventkey === "202122") {
        return (
            <Col>
                <OfficersRow heading="Executive Board" officers={executive_board21}></OfficersRow>
                <OfficersRow heading="Mechanical and Aerobody" officers={mech_aero21}></OfficersRow>
                <OfficersRow heading="Electrical" officers={electrical21}></OfficersRow>
            </Col>
        )
    }
    else {
        return (
            <Col>
                <OfficersRow heading="Executive Board" officers={executive_board}></OfficersRow>
            </Col>
        )
    }
}

export default class Team extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            executive_board: executive_board22,
            eventkey: "202223"
        }
    }

    render() {
        /* mql = media query list (https://dev.to/yanns1/how-to-render-different-components-based-on-screen-size-2p35) */
        const mql = window.matchMedia('(max-width: 425px)');
        let mobileView = mql.matches;

        return (
            <React.Fragment >
            {/*  Page Header    */}
            <Container fluid="true" className="header">
                <Row>
                    <Col>
                        <div className="team-header-img">
                            <h1 className={"title-text"}>
                              Our Team
                            </h1>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/*  Page Contents  */}
            <Container fluid="true" className="section" style={{background: "#00203E"}}>
                {/*  Dropdown Menu  */}
                <Col style={{justifyContent: "center"}}>
                    <Dropdown onSelect={
                        (eventKey) => {
                            if (eventKey === "201920") {
                                this.setState((state) => {
                                    return { executive_board: executive_board19, eventkey: eventKey }
                                });
                            }
                            if (eventKey === "202021") {
                                this.setState((state) => {
                                    return { executive_board: executive_board20,eventkey: eventKey }
                                });
                            }
                            if (eventKey === "202122") {
                                this.setState((state) => {
                                    return { executive_board: executive_board21, eventkey: eventKey }
                                });
                            }
                            if (eventKey === "202223") {
                                this.setState((state) => {
                                    return { executive_board: executive_board22, eventkey: eventKey }
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

                <OfficerTeam eventkey={this.state.eventkey} executive_board={this.state.executive_board} on_mobile={mobileView}/>

            </Container>
            </React.Fragment>
        );
    }
}
