import React, { useState } from 'react'

import {
  Link
} from "react-router-dom"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Header from '../components/Header'

import premiumSoldworks from '../content/assets/images/premium_solidworks.png'
import premiumEaton from '../content/assets/images/premium_eaton.png'
import premiumAltair from '../content/assets/images/premium_altair.png'
import premiumEce from '../content/assets/images/premium_ece.png'
import premiumHwco from '../content/assets/images/premium_hwco.png'
import premiumSiemens from '../content/assets/images/premium_siemens.png'
import premiumSolarImpact from '../content/assets/images/premium_solar_impact.png'
import premiumSunpower from '../content/assets/images/premium_sunpower.png'
import premiumUfmae from '../content/assets/images/premium_ufmae.png'
import premiumUniversal from '../content/assets/images/premium_universal.png'


import silverBac from '../content/assets/images/silver_bac.jpg'
import silverUfippd from '../content/assets/images/silver_ufippd.png'
import silverRohacell from '../content/assets/images/silver_rohacell.jpg'
import silverMirage from '../content/assets/images/silver_mirage.png'
import silverFgci from '../content/assets/images/silver_fgci.png'
import silverBrembo from '../content/assets/images/silver_brembo.jpg'
import silverUfsg from '../content/assets/images/silver_ufsg.png'
import silverAccurate from '../content/assets/images/silver_accurate.png'


import bronzeTdk from '../content/assets/images/bronze_tdk.png'
import bronzeZevia from '../content/assets/images/bronze_zevia.png'
import bronzeStickermule from '../content/assets/images/bronze_stickermule.png'
import bronzeSolarcat from '../content/assets/images/bronze_solarcat.jpg'
import bronzeKevins from '../content/assets/images/bronze_kevins.jpg'

import bronzeHakko from '../content/assets/images/bronze_hakko.gif'
import bronzeMoss from '../content/assets/images/bronze_moss.jpg'
import bronzeBmrs from '../content/assets/images/bronze_bmrs.jpg'
import bronzeBeadbuster from '../content/assets/images/bronze_beadbuster.jpg'


function SponsorRow({ img1, img2, img3 }) {
  let CustomImage = ({src}) => {
    return <Col><img src={src} className="img-fluid" /></Col>
  }
  return (
    <Row className="align-items-center mb-3">
      { img1 ? <CustomImage src={img1} /> : <Col /> }
      { img2 ? <CustomImage src={img2} /> : <Col /> }
      { img3 ? <CustomImage src={img3} /> : <Col /> }
    </Row>
  )
}

export default function Sponsor() {
    return (
        <React.Fragment>
          <Header className="sponsor-section">
            <h1 className="sponsor-centered">Sponsors</h1>
          </Header>
          <Container>
            <Row className="mt-5">
              <Col lg={{span: 10, offset: 1}}>
                <h2 className="line-divider">OUR SPONSORS</h2>
                <p>Building, designing, prototyping, and organizing the build of a solar-powered vehicle is a very resource-intensive feat. All of this is possible due to the generosity and support of our beloved sponsors.</p>
              </Col>
              <Button className="btn-lg sponsor-button mt-3 mb-5 ml-auto mr-auto" as={Link} to="/donate">Sponsorship Opportunities</Button>
            </Row>
          </Container>

          <div className="separator">
            <h2 className="ml-4 mr-4">Cielo Car Sponsors (2019)</h2>
          </div>

          <Container className="mt-5">
            <div className="separator">
              <h2 className="ml-4 mr-4">
                <i class="fas fa-gift mr-3" />
                Platinum Sponsors
              </h2>
            </div>

            <SponsorRow img1={premiumSoldworks} img2={premiumEaton} img3={premiumAltair} />
            <SponsorRow img1={premiumEce} img2={premiumHwco} img3={premiumSiemens} />
            <SponsorRow img1={premiumSolarImpact} img2={premiumSunpower} img3={premiumUfmae} />
            <SponsorRow img2={premiumUniversal} />

            <div className="separator mt-5 mb-2">
              <h2 className="ml-4 mr-4">
                <i class="fas fa-gift mr-3" />
                Silver Sponsors
              </h2>
            </div>

            <SponsorRow img1={silverBac} img2={silverUfippd} img3={silverRohacell} />
            <SponsorRow img1={silverMirage} img2={silverFgci} img3={silverUfsg} />
            <SponsorRow img1={premiumSoldworks} img2={premiumEaton} img3={premiumAltair} />
            <SponsorRow img1={silverBrembo} img2={silverAccurate} />

            <div className="separator mt-5 mb-2">
              <h2 className="ml-4 mr-4">
                <i class="fas fa-gift mr-3" />
                Bronze Sponsors
              </h2>
            </div>

            <SponsorRow img1={bronzeTdk} img2={bronzeZevia} img3={bronzeStickermule} />
            <SponsorRow img1={bronzeSolarcat} img2={bronzeKevins} img3={bronzeMoss} />
            <SponsorRow img1={premiumSoldworks} img2={premiumEaton} img3={premiumAltair} />
            <SponsorRow img1={bronzeBmrs} img2={bronzeBeadbuster} img3={bronzeHakko} />

          </Container>
        </React.Fragment>
    )
}
