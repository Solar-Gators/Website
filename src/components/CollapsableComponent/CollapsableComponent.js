import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import {Link} from "react-router-dom";
import React, {useState} from "@types/react";

//Initialization for collapsable field components in implimentation
// const [open0, setOpen0] = useState(false);
// const [open1, setOpen1] = useState(false);

export default function CollapsableComponent({open, setOpen, label, text, emphasis, link}) {
    return (
        <Row className="no-margin-padding">
            <Col className="collapse-col">
                <h5 id="collapse-heading">
                    <Button className="btn-collapsable-field"
                            onClick={() => setOpen(!open)}
                            aria-controls="online-collapse-text"
                            aria-expanded={open}
                    >+</Button>
                    {label}
                </h5>
                <Collapse in={open} id="collapse-content">
                    <div id="collapse-text">
                        <p style={{marginBottom: "0px"}}>{text}
                            {/* Orange Emphasis Text */}
                            <span style={{color: "#F37833", fontWeight: "500", display: "inline"}}>{emphasis}</span>

                            {/* Hyperlink if one */}
                            { {link} ? <Link style={{color: '#F37833', display: 'inline'}}
                                             to={"/contact"} onClick={() => {window.scroll(0,0);}}>{link}</Link> : ""}
                        </p>
                    </div>
                </Collapse>
            </Col>
        </Row>
    )
}