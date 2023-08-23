import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import car1 from "../../content/assets/images/car_pics/torch/torch_ontrack_clean.jpg";
import car2 from "../../content/assets/images/car_pics/cielo/IMG_9219.JPG";
import car3 from "../../content/assets/images/car_pics/sunrider/2022/AND02053.JPG";
import './CarsSection.scss'

function Car({car_img, car_name, car_year1, car_year2}) {
    //creates each car's container for image & hover description
    return (
        <Link className="car-card" to={"/cars"} onClick={() => {window.scroll(0,0);}} >
            <img className="car-card-img" src={car_img} alt={"car_img"}/>
            <div className="overlay">
                <div className="overlay-text-header">{car_name}</div>
                <div className="overlay-text-body">{car_year1} - {car_year2}</div>
            </div>
        </Link>
    )
}

function DonateButton ({on_mobile}) {
    if (!on_mobile) {
        return (
            <Button className="btn-primary" as={Link} to={"/donate"}
                    onClick={() => {window.scroll(0,0);}}>
                Donate
            </Button>
        )
    }
    else {
        return ("")
    }
}

export default function CarsSection({mobileView}) {
    return (
        <Container fluid="true" className="section">
            <Row>
                <h2 className="heading2-text">
                    Our Cars
                </h2>
            </Row>
            <Row className={"car-cards"}>
                <Car car_img={car1} car_name={"Torch"} car_year1={"2017"} car_year2={"2018"}/>
                <Car car_img={car2} car_name={"Cielo"} car_year1={"2018"} car_year2={"2019"}/>
                <Car car_img={car3} car_name={"Sunrider"} car_year1={"2020"} car_year2={"present"}/>
            </Row>
            <Row>
                <DonateButton on_mobile={mobileView}/>
            </Row>
        </Container>
    )
}
