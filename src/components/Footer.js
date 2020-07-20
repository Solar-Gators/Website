import React from 'react'
import sponsorsImage from '../content/assets/images/sponsors.png'
import {
  Link
} from "react-router-dom";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer() {

    return (
      <div id="footer">
        <Row>
            <Col md={6}>
              <h2 className="text-white" >UF Solar Gators</h2>
              <a target="_blank" href="https://www.facebook.com/UFSolarGators/">
                <button className="btn btn-social-icon btn-facebook btn-rounded">
                  <i class="fab fa-facebook-f"></i>
                </button>
              </a>
              <a target="_blank" href="https://twitter.com/solargators?lang=en">
                <button className="btn btn-social-icon btn-twitter btn-rounded ml-2">
                  <i class="fab fa-twitter" />
                </button>
              </a>
              <a target="_blank" href="https://www.instagram.com/ufsolargators/">
                <button className="btn btn-social-icon btn-instagram btn-rounded ml-2">
                  <i class="fab fa-instagram"></i>
                </button>
              </a>
            </Col>
            <Col md={3} xs={6}>
              <h5 className="text-white mt-sm-3 mt-3">Connect</h5>
              <Link to="/contact" style={{color:  'white'}}>Contact us</Link>
              <br />
              <Link to="https://www.facebook.com/UFSolarGators/" style={{color: 'white'}}>Join Us</Link>
            </Col>

            <Col md={3} xs={6}>
              <h5 className="text-white mt-sm-3 mt-3">Support us</h5>
              <Link to="/donate" style={{color:  'white'}}>Donate</Link>
              <br />
              <Link to="/sponsors" style={{color:  'white'}}>Sponsor Us</Link>
            </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <div className="separator text-white">
              <i className="fas fa-certificate home-icon separator-icon ml-2" aria-hidden="true" />
              <strong className="mr-2">Our Sponsors</strong>
            </div>
            <img style={{width: '100%'}} src={sponsorsImage} />
          </Col>
        </Row>
      </div>
    );
}
