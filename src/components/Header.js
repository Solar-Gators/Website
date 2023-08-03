import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header({title, imgcss}) {
    return (
        <Container fluid="true" className="header">
            <div className={imgcss}>
                <h1 className={"title-text"}>
                    {title}
                </h1>
            </div>
        </Container>
    )
}
