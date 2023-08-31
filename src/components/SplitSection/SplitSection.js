import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";
import './SplitSection.scss'

function DividedSection({img, blurb, blurb2, img_left}) {
    let ImageHalf = () => {
        return (
            <Col className="no-margin-padding">
                <div className="image-half-container" style={{backgroundImage: "url(" + img + ")"}}/>
            </Col>
        )
    }
    let TextHalf = () => {
        return (
            <Col className="no-margin-padding">
                <div className="text-half-container">
                    { blurb ? <p style={{marginTop: "50px"}}>{blurb}</p> : ""}
                    { blurb2 ? <p style={{marginTop: "50px"}}>{blurb2}</p> : ""}
                </div>
            </Col>
        )
    }
    if (img_left) {
        return(
            <Row style={{padding: "0", margin: "0"}}>
                <ImageHalf/>
                <TextHalf/>
            </Row>
        )
    }
    else {
        return (
            <Row style={{padding: "0", margin: "0"}}>
                <TextHalf/>
                <ImageHalf/>
            </Row>
        )
    }
}

export default function SplitSection({on_mobile, img, blurb, blurb2, img_left, img_above}) {
    let Image = () => {
        return (
            <div className="image-half-container" style={{backgroundImage: "url(" + img + ")"}}/>
        )
    }
    let Text = () => {
        return (
            <Row className={"no-margin-padding"}>
                <div className="text-half-container">
                    <p>{blurb}</p>
                    {/* if there is a second paragraph */}
                    { blurb2 ? <p style={{paddingTop: "10px"}}>{blurb2}</p> : ""}
                </div>
            </Row>
        )
    }
    if (on_mobile) {
        if (img_above) {
            return (
                <Col className={"no-margin-padding"}>
                    <Image/>
                    <Text/>
                </Col>
            )
        }
        else {
            return (
                <Col className={"no-margin-padding"}>
                    <Text/>
                    <Image/>
                </Col>
            )
        }
    }
    else {
        return (
            <DividedSection img={img} blurb={blurb} blurb2={blurb2} img_left={img_left}/>
        )
    }
}