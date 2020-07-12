import React from "react";
import img3 from "../content/assets/images/img3.jpg";

import president from "../content/assets/images/president.JPG";
import vicepresident from "../content/assets/images/vicepresident.JPG";
import treasurer from "../content/assets/images/treasurer.JPG";
import secretary from "../content/assets/images/secretary.JPG";
import business from "../content/assets/images/business.JPG";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Team() {
  return (
    <React.Fragment>
      <div className="sponsor-container">
        <img style={{ width: "100%", opacity: 1 }} src={img3} />
        <h1 className="sponsor-centered">The Team</h1>
      </div>

      <div className="ui container" style={{ marginTop: "5vh" }}>
        <div className="ui centered grid">
          <ui className="row">
            <div className="ui two wide column" />
            <div className="ui twelve wide column">
              <h1 className="ui dividing header" style={{ opacity: "0.8" }}>
                Officers
              </h1>
            </div>
          </ui>
          <Container>
            <Row>
              <Col>
                <Card>
                  <CardImg top src={president} alt="President" />
                  <CardBody>
                    <CardTitle>Stephen Thomas</CardTitle>
                    <CardSubtitle>President</CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card>
                  <CardImg top src={vicepresident} alt="Vice President" />
                  <CardBody>
                    <CardTitle>Mariana Casas</CardTitle>
                    <CardSubtitle>Vice President</CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <CardImg top src={secretary} alt="Secretary" />
                  <CardBody>
                    <CardTitle>Katie Preiser</CardTitle>
                    <CardSubtitle>Secretary</CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card>
                  <CardImg top src={treasurer} alt="Treasurer" />
                  <CardBody>
                    <CardTitle>Nathan Andreo</CardTitle>
                    <CardSubtitle>Treasurer</CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card>
                  <CardImg top src={business} alt="Business Coordinator" />
                  <CardBody>
                    <CardTitle>Kaitlyn Lyons</CardTitle>
                    <CardSubtitle>Business Coordinator</CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
}
