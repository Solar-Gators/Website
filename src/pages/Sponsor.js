import React from 'react'
import {Link} from "react-router-dom"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

//Car 3 Sponsor Logos
//Platinum
import MAE from '../content/assets/images/sponsor_logos/MAE.png'
import ZenithTecnica from '../content/assets/images/sponsor_logos/ZenithTecnica.png'
import ECE from '../content/assets/images/sponsor_logos/ECE.png'
//Gold
import Pellucere from '../content/assets/images/sponsor_logos/Pellucere.png'
import MatrixComposities from '../content/assets/images/sponsor_logos/Matrix.png'
import ElektroAutomatik from '../content/assets/images/sponsor_logos/ElektroAutomatik.png'
import BayArea from '../content/assets/images/sponsor_logos/BayArea.png'
import WestSystems from '../content/assets/images/sponsor_logos/WestSystem.png'
//Silver
import Mirage from '../content/assets/images/sponsor_logos/Mirage.png'
import RapidCut from '../content/assets/images/sponsor_logos/RapidCut.png'
import BMRS from '../content/assets/images/sponsor_logos/Bmrs.png'
import Molex from '../content/assets/images/sponsor_logos/Molex.png'
import RapidHarness from '../content/assets/images/sponsor_logos/RapidHarness.png'
import TDK from '../content/assets/images/sponsor_logos/TDK.png'
//Bronze
import Altair from '../content/assets/images/sponsor_logos/Altair.png'
import MerritSupply from '../content/assets/images/sponsor_logos/MerritSupply.png'
import SKF from '../content/assets/images/sponsor_logos/SKF.png'
import _3A from '../content/assets/images/sponsor_logos/3A.png'
import FGCI from '../content/assets/images/sponsor_logos/FGCI.png'
import PhoenixThermalSupply from '../content/assets/images/sponsor_logos/PhoenixThermal.png'
import Ansys from '../content/assets/images/sponsor_logos/Ansys.png'
import VR3 from '../content/assets/images/sponsor_logos/VR3.png'
import FusionFilaments from '../content/assets/images/sponsor_logos/FusionFilaments.png'
import IC3D from '../content/assets/images/sponsor_logos/IC3D.png'
import ProtoPasta from '../content/assets/images/sponsor_logos/Protopasta.webp'
import SainSmart from '../content/assets/images/sponsor_logos/SainSmart.webp'
import NordLock from '../content/assets/images/sponsor_logos/NordLock.png'
import IPF from '../content/assets/images/sponsor_logos/IPF.png'

//Car 2 Sponsors
// import Solidworks from '../content/assets/images/sponsor_logos/SolidWorks.png'
// import Eaton from '../content/assets/images/sponsor_logos/Eaton.png'
// import HWCE from '../content/assets/images/sponsor_logos/HWCE.png'
// import Siemens from '../content/assets/images/sponsor_logos/Siemens.png'
// import SolarImpact from '../content/assets/images/sponsor_logos/SolarImpact.png'
// import SunPower from '../content/assets/images/sponsor_logos/SunPower.png'
// import Universal from '../content/assets/images/sponsor_logos/Universal.png'
// import IPPD from '../content/assets/images/sponsor_logos/IPPD.png'
// import Rohacell from '../content/assets/images/sponsor_logos/Rohacell.png'
// import Brembo from '../content/assets/images/sponsor_logos/Brembo.png'
// import UFSG from '../content/assets/images/sponsor_logos/UFSG.png'
// import Accurate from '../content/assets/images/sponsor_logos/Accurate.png'
// import Zevia from '../content/assets/images/sponsor_logos/Zevia.png'
// import Stickermule from '../content/assets/images/sponsor_logos/StickerMule.png'
// import SolarCat from '../content/assets/images/sponsor_logos/SolarCat.png'
// import Kevins from '../content/assets/images/sponsor_logos/Kevins.png'
// import Hakko from '../content/assets/images/sponsor_logos/Hakko.png'
// import MossSolar from '../content/assets/images/sponsor_logos/MossSolar.png'
// import BeadBuster from '../content/assets/images/sponsor_logos/BeadBuster.png'

//Car 3 Sponsors
let platinum3 = [[MAE, "https://mae.ufl.edu/"], [ZenithTecnica, "https://www.zenithtecnica.com/"], [ECE, "https://www.ece.ufl.edu/"]];
let gold3 = [[Pellucere, "https://www.pellucere.com/"], [MatrixComposities, "https://matrixcomp.com"],
    [ElektroAutomatik, "https://elektroautomatik.com/"], [BayArea,"https://bayareacircuits.com/"], [WestSystems, "https://www.westsystem.com/"]];
let silver3 = [[Mirage, "https://www.mirage-mfg.com/"], [RapidCut, "https://www.rapidcut.com/"], [BMRS, "https://www.bmrswired.com/"],
    [Molex, "https://www.molex.com"], [RapidHarness, "https://rapidharness.com/"], [TDK, "https://www.tdk-lambda.com"]];
let bronze3 = [[Altair, "https://www.altair.com/"], [MerritSupply, "https://www.merrittsupply.com/"], [WestSystems, "https://www.westsystem.com/"],
    [SKF, "https://www.skf.com"],[_3A, "https://3acompositesusa.com/"],[FGCI, "https://www.fgci.com/"],
    [PhoenixThermalSupply, "https://www.phoenixthermalsupply.com/"], [Ansys, "https://www.ansys.com/"], [VR3, "https://vr3.ca/"],
    [FusionFilaments, "https://fusionfilaments.com/"], [IC3D, "https://www.ic3dprinters.com/"], [ProtoPasta, "https://www.proto-pasta.com/"],
    [SainSmart, "https://www.sainsmart.com/"], [NordLock, "https://www.nord-lock.com"], [IPF, "https://goo.gl/maps/a8tBJe2cCBKJWkzq5"]];

//Car 2 Sponsors
// var platinum2 = [Solidworks, Eaton, Altair, ECE, HWCE, Siemens, SolarImpact, SunPower, MAE, Universal];
// var silver2 = [BayArea, IPPD, Rohacell, Mirage, FGCI, UFSG, Brembo, Accurate];
// var bronze2 = [TDK, Zevia, Stickermule, SolarCat, Kevins, MossSolar, BMRS, BeadBuster, Hakko];

function SponsorRow({ img1, img1link, img2, img2link, img3, img3link }) {
  let CustomImage = ({ src, link }) => {
    return <Col>
        <a href={link}>
            <span class="align-center">
                <img src={src} className="sponsor-logo" />
            </span>
        </a>
    </Col>
  }
  return (
    <Row style={{justifyContent: "center", alignItems: "center"}}>
      { img1 ? <CustomImage src={img1} link={img1link} /> : ""}
      { img2 ? <CustomImage src={img2} link={img2link} /> : ""}
      { img3 ? <CustomImage src={img3} link={img3link} /> : ""}
    </Row>
  )
}

function ShowSponsors({car_num}) {
    if (car_num === "3") {
        return (
            <Container fluid="true" className="section">
                <h2 className="heading2-text" style={{paddingBottom: "10px"}}>Sunrider Sponsors</h2>
                <h4 className="heading6-text">2020-2023</h4>

                {/* PLATINUM */}
                <h3 className="heading3-text">Platinum Sponsors</h3>
                <SponsorRow img1={platinum3[0][0]} img1link={platinum3[0][1]} img2={platinum3[1][0]} img2link={platinum3[1][1]} img3={platinum3[2][0]} img3link={platinum3[2][1]} />

                {/* GOLD */}
                <h3 className="heading3-text">Gold Sponsors</h3>
                <SponsorRow img1={gold3[0][0]} img1link={gold3[0][1]} img2={gold3[1][0]} img2link={gold3[1][1]} img3={gold3[2][0]} img3link={gold3[2][1]} />
                <SponsorRow img1={gold3[3][0]} img1link={gold3[3][1]} img2={gold3[4][0]} img2link={gold3[4][1]} />

                {/* SILVER */}
                <h3 className="heading3-text">Silver Sponsors</h3>
                <SponsorRow img1={silver3[0][0]} img1link={silver3[0][1]} img2={silver3[1][0]} img2link={silver3[1][1]} img3={silver3[2][0]} img3link={silver3[2][1]} />
                <SponsorRow img1={silver3[3][0]} img1link={silver3[3][1]} img2={silver3[4][0]} img2link={silver3[4][1]} />

                {/* BRONZE */}
                <h3 className="heading3-text">Bronze Sponsors</h3>
                <SponsorRow img1={bronze3[0][0]} img1link={bronze3[0][1]} img2={bronze3[1][0]} img2link={bronze3[1][1]} img3={bronze3[2][0]} img3link={bronze3[2][1]} />
                <SponsorRow img1={bronze3[3][0]} img1link={bronze3[3][1]} img2={bronze3[4][0]} img2link={bronze3[4][1]} img3={bronze3[5][0]} img3link={bronze3[5][1]}/>
                <SponsorRow img1={bronze3[6][0]} img1link={bronze3[6][1]} img2={bronze3[7][0]} img2link={bronze3[7][1]} img3={bronze3[8][0]} img3link={bronze3[8][1]} />
                <SponsorRow img1={bronze3[9][0]} img1link={bronze3[9][1]} img2={bronze3[10][0]} img2link={bronze3[10][1]} img3={bronze3[11][0]} img3link={bronze3[11][1]}/>
                <SponsorRow img1={bronze3[12][0]} img1link={bronze3[12][1]} img2={bronze3[13][0]} img2link={bronze3[13][1]} img3={bronze3[14][0]} img3link={bronze3[14][1]} />

            </Container>
        );
    }
}

export default function Sponsor() {
  return (
    <React.Fragment>
        {/*  Page Header */}
        <Container fluid="true" className="header">
            <Row>
                <Col>
                    <div className="sponsor-header-img">
                        <h1 className={"title-text"}>
                            Sponsors
                        </h1>
                    </div>
                </Col>
            </Row>
        </Container>

        {/*  Sponsorship Blurb */}
        <Container fluid="true" className="section" style={{background: "#00203E", paddingTop: "80px", paddingBottom: "80px"}}>
            <Row style={{justifyContent: "center"}}>
                <p className={"body-text-white"} style={{paddingLeft: "30px", paddingRight: "30px", textAlign: "center"}}>
                    Our mission to show the potential of solar energy is made possible by our wonderful sponsors.
                    Their generosity and commitment to sustainability are instrumental in helping us
                    design, build and test our solar cars. Thank you.
                </p>
            </Row>
            <Button className="btn-primary" style={{width: "250px", justifyContent: "center", left: "calc(50% - 250px/2 + 2px)", marginTop: "40px"}} as={Link} to={"/donate"}>Become a Sponsor</Button>
        </Container>

        <ShowSponsors car_num={"3"}/>

    </React.Fragment>
  )
}
