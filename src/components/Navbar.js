import React from 'react'
import logoImage from '../content/assets/images/logo.png'
import {
  Link
} from "react-router-dom";

export default function Navbar() {

    return (
        <div className="ui menu borderless" style={{WebkitTransitionDuration: '0.1s', margin: 0}}>
        <div className="item">
          <img src={logoImage} />
        </div>
        <Link className="item" to="/">Solar Gators</Link>
        <Link className="item" to="/about">About Us</Link>
        <Link className="item" to="/events">Events</Link>
        <Link className="item" to="/sponsors">Sponsors</Link>
        <Link className="item" to="/team">The Team</Link>
        <div className="right menu">
          <div className="item">
            <Link className="ui orange button" to="/contact">
              <i className="envelope open icon" />
              Contact
            </Link>
          </div>
          <div className="item">
            <a href="https://www.facebook.com/UFSolarGators/">
              <div className="ui blue button">
                <i className="flag checkered icon" />
                Join
              </div>
            </a>
          </div>
        </div>
      </div>
    )
}
