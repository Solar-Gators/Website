import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "../content/styles/Header.scss";
import "../content/styles/Cars.scss";
import "../content/styles/Button.scss";

export default function Cars() {
    return (
        <React.Fragment>
            {/*  Page Header */}
            <Container fluid="true" className="header">
                <Row>
                    <Col>
                        <div className="cars-header-img">
                            <h1 className={"title-text"}>
                                Our Cars
                            </h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}