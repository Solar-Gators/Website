import React from 'react'
import logoImage from '../content/assets/images/logo.png'

export default function Navbar() {

    return (
        <div className="ui menu borderless" style={{WebkitTransitionDuration: '0.1s', margin: 0}}>
        <div className="item">
          <img src={logoImage} />
        </div>
        <a className="item" href="/">Solar Gators</a>
        <a className="item" href="/about">About Us</a>
        <a className="item" href="/events">Events</a>
        <a className="item" href="/sponsors">Sponsors</a>
        <a className="item" href="/team">The Team</a>
        <div className="right menu">
          <div className="item">
            <a className="ui orange button" href="/contact">
              <i className="envelope open icon" />
              Contact
            </a>
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
