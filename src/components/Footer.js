import React from 'react'
import sponsorsImage from '../content/assets/images/sponsors.png'

export default function Footer() {

    return (
<div className="ui grid" style={{marginTop: '10vh'}}>
        <div className="ui container fluid" style={{background: '#202121', paddingTop: '8vh', paddingLeft: '20vh', paddingRight: '20vh'}}>
          <div className="ui grid">
            <div className="ui row">
              <div className="four wide column" style={{marginLeft: '0vw'}}>
                <h1 className="ui left header" style={{color: 'white'}}>UF Solar Gators</h1>
              </div>
              <div className="four wide column" />
              <div className="four wide column">
                <h3 className="ui left header" style={{color: 'white'}}>Connect</h3>
              </div>
              <div className="four wide column">
                <h3 className="ui left header" style={{color: 'white'}}>Support us</h3>
              </div>
            </div>
            <div className="ui row">
              <div className="six wide column">
                <a href="https://www.facebook.com/UFSolarGators/">
                  <button className="ui big circular facebook icon button">
                    <i className="facebook icon" />
                  </button>
                </a>
                <a href="https://twitter.com/solargators?lang=en">
                  <button className="ui big circular twitter icon button">
                    <i className="twitter icon" />
                  </button>
                </a>
                <a href="https://www.facebook.com/UFSolarGators/">
                  <button className="ui big circular instagram icon button">
                    <i className="instagram icon" />
                  </button>
                </a>
              </div>
              <div className="two wide column" />
              <div className="four wide column" style={{marginTop: '-3vh'}}>
                <h5 className="ui header left" style={{color: 'white', opacity: '0.8'}}>
                  <a href="/contact" style={{color:  'white'}}>Contact us</a>
                  <br />
                  <a href="https://www.facebook.com/UFSolarGators/" style={{color: 'white'}}>Join Us</a>
                </h5>
              </div>
              <div className="four wide column" style={{marginTop: '-3vh'}}>
                <h5 className="ui header left" style={{color: 'white', opacity: '0.8'}}>
                  <a href="/donate" style={{color:  'white'}}>Donate</a>
                  <br />
                  <a href="/sponsors" style={{color:  'white'}}>Sponsor Us</a>
                </h5>
              </div>
            </div>
          </div>
          <h4 className="ui horizontal inverted divider header" style={{marginTop: '5vh'}}>
            <i className="certificate icon" />
            Our Sponsors
          </h4>
          <img style={{width: '100%'}} src={sponsorsImage} />
        </div>
      </div>
    );
}
