import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Header from '../components/Header'

import sponsorshipLevels from '../content/assets/images/sponsorship-levels.png'

export default function Donate() {
    return (
        <React.Fragment>

            <Header className="donate-section">
                <h1 className="sponsor-centered">Sponsorship Opportunities</h1>
            </Header>
            <Container>
            <h2 className="line-divider" style={{marginTop: '10vh', marginBottom: '30px'}}>About the Organization</h2>
            <Row>
                <Col className="text-center">
                    <p className="text-left">Solar Gators is a 501(c)(3) nonprofit organization. We have sponsorship tiers available, but appreciate any contribution to the organization. Contributions online are general use and permit the club to continue constructing the car and working towards our goal of competitions. Please note that if making an online contribution, you will be redirected to the University of Florida website to complete your gift. On the university's donation page, please be sure to mention "Solar Gators" in the comment box. If you would prefer to make a contribution by check, or have something else to give, please follow the links below. Tax forms are available upon request.</p>

                    <a
                    className="btn btn-primary btn-circle ml-auto mr-auto mt-4"
                    href="https://www.uff.ufl.edu/OnlineGiving/FundDetail.asp?FundCode=003911&AppealCode=GESWQA1"
                    target="_blank">
                        <i class="fas fa-credit-card mr-2"></i>
                        Donate Online</a>
                </Col>

                <Col>
                <img style={{width: '100%', opacity: 1}} src={sponsorshipLevels} alt="photo" />
                </Col>
            </Row>

            <Row>
                <Col xs={{ span: 2, offset: 4 }} >
                    
                </Col>
            </Row>
        </Container>
    </React.Fragment>
    )
}