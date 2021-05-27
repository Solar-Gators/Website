import React, { useState } from 'react'

import {
  Link
} from "react-router-dom"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Header from '../components/Header'

import zenithTecnica from '../content/assets/images/zenith-tecnica.png'
import PellucereTech from '../content/assets/images/Pellucere+Logo+R.png'
import MatrixComposities from '../content/assets/images/Matrix_Logo_lg.jpg'
import ElektroAutomatik from '../content/assets/images/ElektroAutomatik.png'
import westSystems from '../content/assets/images/West-System.jpg'
import molex from '../content/assets/images/new-molex-logo@2x.png'
import RapidHarness from '../content/assets/images/rapid-harness.png'
import RapidCut from '../content/assets/images/logo_rapidcut_small_1.jpg'
import merritSupply from '../content/assets/images/merritt-trans-white-200-1.png'
import SKF from '../content/assets/images/skf.png'
import the3AComposites from '../content/assets/images/3a-logo.png'
import PhoenixThermalSupply from '../content/assets/images/Phoenix-Side-Logo-Transparent.png'
import ansys from '../content/assets/images/1234751087606171086_1234751087606171086.png'
import FusionFilaments from '../content/assets/images/fusionfilaments.png'
import VR3 from '../content/assets/images/VR3.png'
import IC3D from '../content/assets/images/ic3-industries-logo.png'
import ProtoPlasta from '../content/assets/images/Logomark_Desktop_Oct_2020.webp'
import SainSmart from '../content/assets/images/sainsmart.webp'
import NordLock from '../content/assets/images/nordlock.jpg'
import IPF from '../content/assets/images/ipf.jpg'
import MAE from '../content/assets/images/mae.png'

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


function SponsorRow({ img1, img1link, img2, img2link, img3, img3link }) {
  let CustomImage = ({ src, link }) => {
    return <Col><a href={link}><span class="align-center"><img src={src} className="img-fluid" /></span></a></Col>
  }
  return (
    <Row className="align-items-center mb-3">
      { img1 ? <CustomImage src={img1} link={img1link} /> : <Col />}
      { img2 ? <CustomImage src={img2} link={img2link} /> : <Col />}
      { img3 ? <CustomImage src={img3} link={img3link} /> : <Col />}
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
          <Col lg={{ span: 10, offset: 1 }}>
            <h2 className="line-divider">OUR SPONSORS</h2>
            <p>Building, designing, prototyping, and organizing the build of a solar-powered vehicle is a very resource-intensive feat. All of this is possible due to the generosity and support of our beloved sponsors.</p>
          </Col>
          <Button className="btn-lg sponsor-button mt-3 mb-5 ml-auto mr-auto" as={Link} to="/donate">Sponsorship Opportunities</Button>
        </Row>
      </Container>

      <div className="separator">
        <h2 className="ml-4 mr-4">Vanquish Sponsors (Car 3, 2020-2021)</h2>
      </div>

      <Container className="mt-5">
        <div className="separator">
          <h2 className="ml-4 mr-4">
            <i class="fas fa-gift mr-3" />
                Platinum Sponsors
              </h2>
        </div>

        <SponsorRow img1={MAE} img1link="https://mae.ufl.edu/" img2={zenithTecnica} img2link="https://www.zenithtecnica.com/" img3={premiumEce} img3link="https://www.ece.ufl.edu/" />

        <div className="separator mt-5 mb-2">
          <h2 className="ml-4 mr-4">
            <i class="fas fa-gift mr-3" />
                Gold Sponsors
              </h2>
        </div>

        <SponsorRow img1={PellucereTech} img1link="https://www.pellucere.com/" img2={MatrixComposities} img2link="https://matrixcomp.com" img3={ElektroAutomatik} img3link="https://elektroautomatik.com/" />
        <SponsorRow img1={silverBac} img1link="https://bayareacircuits.com/" img2={westSystems} img2link="https://www.westsystem.com/" />

        <div className="separator mt-5 mb-2">
          <h2 className="ml-4 mr-4">
            <i class="fas fa-gift mr-3" />
                Silver Sponsors
              </h2>
        </div>

        <SponsorRow img1={silverMirage} img1link="http://www.mirage-mfg.com/" img2={RapidCut} img2link="https://www.rapidcut.com/" img3={bronzeBmrs} img3link="https://www.bmrswired.com/"/>
        <SponsorRow img1={molex} img1link="https://www.molex.com" img2={RapidHarness} img2link="https://rapidharness.com/" img3={bronzeTdk} img3link="https://www.tdk-lambda.com"/>

        <div className="separator mt-5 mb-2">
          <h2 className="ml-4 mr-4">
            <i class="fas fa-gift mr-3" />
                Bronze Sponsors
              </h2>
        </div>

        <SponsorRow img1={premiumAltair} img1link="https://www.altair.com/" img2={merritSupply} img2link="https://www.merrittsupply.com/" img3={westSystems} img3link="https://www.westsystem.com/" />
        <SponsorRow img1={SKF} img1link="https://www.skf.com" img2={the3AComposites} img2link="https://3acompositesusa.com/" img3={silverFgci} img3link="https://www.fgci.com/" />
        <SponsorRow img1={PhoenixThermalSupply} img1link="https://www.phoenixthermalsupply.com/"img2={ansys} img2link="https://www.ansys.com/" img3={VR3} img3link="https://vr3.ca/" />
        <SponsorRow img1={FusionFilaments} img1link="https://fusionfilaments.com/" img2={IC3D} img2link="https://www.ic3dprinters.com/" img3={ProtoPlasta} img3link="https://www.proto-pasta.com/" />
        <SponsorRow img1={SainSmart} img1link="https://www.sainsmart.com/" img2={NordLock} img2link="https://www.nord-lock.com" img3={IPF} img3link="https://goo.gl/maps/a8tBJe2cCBKJWkzq5" />

      </Container>

      <div className="separator">
        <h2 className="ml-4 mr-4">Cielo Car Sponsors (Car 2, 2019)</h2>
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
        <SponsorRow img1={silverBrembo} img2={silverAccurate} />

        <div className="separator mt-5 mb-2">
          <h2 className="ml-4 mr-4">
            <i class="fas fa-gift mr-3" />
                Bronze Sponsors
              </h2>
        </div>

        <SponsorRow img1={bronzeTdk} img2={bronzeZevia} img3={bronzeStickermule} />
        <SponsorRow img1={bronzeSolarcat} img2={bronzeKevins} img3={bronzeMoss} />
        <SponsorRow img1={bronzeBmrs} img2={bronzeBeadbuster} img3={bronzeHakko} />

      </Container>
    </React.Fragment>
  )
}
