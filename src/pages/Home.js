import React from 'react'
import {
  Link
} from "react-router-dom";

import aboutUs1 from '../content/assets/images/about_us_1.JPG'
import aboutUs2 from '../content/assets/images/about_us_2.jpg'

import event1 from '../content/assets/images/event_1.jpg'
import event2 from '../content/assets/images/event_2.jpg'

import team1 from '../content/assets/images/team_1.JPG'
import team2 from '../content/assets/images/team_2.jpg'

import contact1 from '../content/assets/images/contact_us_1.jpg'
import contact2 from '../content/assets/images/contact_us_2.jpg'

import sponsors1 from '../content/assets/images/sponsors_1.jpg'
import sponsors2 from '../content/assets/images/sponsors_2.jpg'

export default function Home() {
    return (
        <React.Fragment>
      <div>
        <div className="ui doubling stackable grid first-section" style={{height: '100vh', margin: 0}}>
          <div className="ui row">
            <div className="two wide column" />
            <div className="twelve wide column">
              <h1 className="ui left aligned header" style={{fontFamily: '"radnika"', marginTop: '25vh', fontSize: '9em', color: 'white', opacity: '0.8'}}>Solar Gators</h1>
            </div>
          </div>
          <div className="ui row" style={{marginTop: '10vh'}}>
            <div className="two wide column" style={{padding: '0 !important'}} />
            <div className="eight wide column" style={{padding: '0 !important'}}>
              <hr />
            </div>
          </div>
          <div className="ui row" style={{marginTop: '-13vh'}}>
            <div className="two wide column" />
            <div className="ui row six wide">
              <Link className="ui small inverted button" style={{fontFamily: '"radnika"', color: 'white'}} to="/about">about us</Link>
              <Link className="ui small inverted button" style={{fontFamily: '"radnika"', color: 'white'}} to="/sponsors">sponsors</Link>
              <Link className="ui small inverted button" style={{fontFamily: '"radnika"', color: 'white'}} to="/team">our team</Link>
              <Link className="ui small inverted button" style={{fontFamily: '"radnika"', color: 'white'}} to="/contact">contact us</Link>
            </div>
          </div>
        </div>
        <div className="ui grid">
          <div className="ui row" style={{marginTop: '10vh'}}>
            <div className="two wide column" />
            <div className="twelve wide column">
              <div className="ui grid">
                <ui className="row">
                  <div className="ui four wide column" />
                  <div className="ui eight wide column">
                    <h1 className="ui dividing header" style={{opacity: '0.8'}}>
                      BRINGING STUDENTS TOGETHER
                    </h1></div>
                </ui>
                <div className="ui row">
                  <div className="ui four wide column" />
                  <div className="ui eight wide column">Solar Gators is a University of Florida student organization driven by passionate engineers and designers determined to win the Formula Sun Grand Prix</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui grid stackable" style={{marginTop: '10vh', marginBottom: '15vh'}}>
          <div className="two wide column" />
          <div className="twelve wide column">
            <div className="ui very padded segment piled">
              <div className="ui grid">
                <div className="four wide column">
                  <div className="ui icon header center aligned" style={{opacity: '0.75'}}>
                    <i className="wrench icon" />
                    2 cars built
                  </div>
                </div>
                <div className="four wide column">
                  <div className="ui icon header center aligned" style={{opacity: '0.75'}}>
                    <i className="trophy icon" />
                    Founded in 2012
                  </div>
                </div>
                <div className="four wide column">
                  <div className="ui icon header center aligned" style={{opacity: '0.75'}}>
                    <i className="users icon" />
                    17 sub-engineering teams
                  </div>
                </div>
                <div className="four wide column">
                  <div className="ui icon header center aligned" style={{opacity: '0.75'}}>
                    <i className="certificate icon" />
                    25+ sponsors
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui grid centered stackable" style={{marginTop: '5vh'}}>
          <div className="ui raised cards">
            <div className="card">
              <div className="ui slide masked reveal image">
                <img className="visible content" src={aboutUs1} />
                <img className="hidden content" src={aboutUs2} />
              </div>
              <div className="content">
                <div className="description">
                  Our organization goes way back. Learn more about our history.
                </div>
              </div>
              <div className="ui bottom attached blue basic button">
                <i className="info icon" />
                About Us
              </div>
            </div>
            <div className="card">
              <div className="ui slide masked reveal image">
                <img className="visible content" src={team1} />
                <img className="hidden content" src={team2} />
              </div>
              <div className="content">
                <div className="description">
                  We have such a diverse group of members, ranging from all kinds of engineers.
                </div>
              </div>
              <div className="ui bottom attached blue basic button">
                <i className="info icon" />
                The Team
              </div>
            </div>
            <div className="card">
              <div className="ui slide masked reveal image">
                <img className="visible content" src={event1} />
                <img className="hidden content" src={event2} />
              </div>
              <div className="content">
                <div className="description">
                  Solar Gators provides many opportunities and activities. Find out when and where.
                </div>
              </div>
              <div className="ui bottom attached blue basic button">
                <i className="info icon" />
                Events
              </div>
            </div>
          </div>
          <div className="ui raised cards">
            <div className="card">
              <div className="ui slide masked reveal image">
                <img className="visible content" src={contact1} />
                <img className="hidden content" src={contact2} />
              </div>
              <div className="content">
                <div className="description">
                  Shoot as an email with any inquiry or question you have about us.
                </div>
              </div>
              <div className="ui bottom attached blue basic button">
                <i className="info icon" />
                Contact Us
              </div>
            </div>
            <div className="card">
              <div className="ui slide masked reveal image">
                <img className="visible content" src={sponsors1} />
                <img className="hidden content" src={sponsors2} />
              </div>
              <div className="content">
                <div className="description">
                  All of this is possible because of our sponsors. Check them out.
                </div>
              </div>
              <Link to="/sponsors">
                <div className="ui bottom attached blue basic button">
                  <i className="info icon" />
                  Sponsors
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>



        </React.Fragment>
    )
}
