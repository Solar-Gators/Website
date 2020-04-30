import React from 'react'
import img3 from '../content/assets/images/img3.jpg'

import president from '../content/assets/images/president.JPG'
import vicepresident from '../content/assets/images/vicepresident.JPG'
import treasurer from '../content/assets/images/treasurer.JPG'
import secretary from '../content/assets/images/secretary.JPG'
import business from '../content/assets/images/business.JPG'

export default function Team() {

    return (
        <React.Fragment>
            <div className="sponsor-container">
                <img style={{width: '100%', opacity: 1}} src={img3} />
                <h1 className="sponsor-centered">The Team</h1>
            </div>

            <div className="ui container" style={{marginTop: '5vh'}}>
          <div className="ui centered grid">
            <ui className="row">
              <div className="ui two wide column" />
              <div className="ui twelve wide column">
                <h1 className="ui dividing header" style={{opacity: '0.8'}}>
                  Officers
                </h1></div>
            </ui>
            <div className="ui row">
              <div className="ui three wide column">
                <div className="ui fluid card">
                  <div className="image">
                    <img src={president} />
                  </div>
                  <div className="content">
                    <a className="header">Stephen Thomas</a>
                    <div className="meta">
                      <span className="date">Member since 2016</span>
                    </div>
                    {/* <div class="description">
                Vrushank is an engineering student
              </div> */}
                  </div>
                  <div className="extra content">
                    <div className="center aligned author">
                      <strong>President</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ui three wide column">
                <div className="ui fluid card">
                  <div className="image">
                    <img src={vicepresident} />
                  </div>
                  <div className="content">
                    <a className="header">Mariana Casas</a>
                    <div className="meta">
                      <span className="date">Member since 2016</span>
                    </div>
                    {/* <div class="description">
                Vrushank is an engineering student
              </div> */}
                  </div>
                  <div className="extra content">
                    <div className="center aligned author">
                      <strong>Vice president</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ui three wide column">
                <div className="ui fluid card">
                  <div className="image">
                    <img src={treasurer} />
                  </div>
                  <div className="content">
                    <a className="header">Nathan Andreo</a>
                    <div className="meta">
                      <span className="date">Member since 2016</span>
                    </div>
                    {/* <div class="description">
                Vrushank is an engineering student
              </div> */}
                  </div>
                  <div className="extra content">
                    <div className="center aligned author">
                      <strong>Treasurer</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ui row">
              <div className="ui three wide column">
                <div className="ui fluid card">
                  <div className="image">
                    <img src={secretary} />
                  </div>
                  <div className="content">
                    <a className="header">Katie Preiser</a>
                    <div className="meta">
                      <span className="date">Member since 2016</span>
                    </div>
                    {/* <div class="description">
                Vrushank is an engineering student
              </div> */}
                  </div>
                  <div className="extra content">
                    <div className="center aligned author">
                      <strong>Secretary</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ui three wide column">
                <div className="ui fluid card">
                  <div className="image">
                    <img src={business} />
                  </div>
                  <div className="content">
                    <a className="header">Kaitlyn Lyons</a>
                    <div className="meta">
                      <span className="date">Member since 2016</span>
                    </div>
                    {/* <div class="description">
                Vrushank is an engineering student
              </div> */}
                  </div>
                  <div className="extra content">
                    <div className="center aligned author">
                      <strong>Business Coordinator</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <ui class="row">
        <div class="ui two wide column"></div>
        <div class="ui twelve wide column">
          <h1 class="ui dividing header" style='opacity: 0.8'>
            Power Supply Leads
          </hq>
        </div>
      </ui>
      <div class="ui row">
        <div class="ui three wide column">
          <div class="ui fluid card">
            <div class="image">
              <img src="https://semantic-ui.com/images/avatar/large/elliot.jpg">
            </div>
            <div class="content">
              <a class="header">Vrushank Desai</a>
              <div class="meta">
                <span class="date">Member since 2016</span>
              </div>
              <div class="description">
                Vrushank is an engineering student
              </div>
            </div>
            <div class="extra content">
              <div class="center aligned author">
                <strong>President</strong>
              </div>
            </div>
        </div>
        </div>
        <div class="ui three wide column">
          <div class="ui fluid card">
            <div class="image">
              <img src="https://semantic-ui.com/images/avatar/large/elliot.jpg">
            </div>
            <div class="content">
              <a class="header">Vrushank Desai</a>
              <div class="meta">
                <span class="date">Member since 2016</span>
              </div>
              <div class="description">
                Vrushank is an engineering student
              </div>
            </div>
            <div class="extra content">
              <div class="center aligned author">
                <strong>President</strong>
              </div>
            </div>
        </div>
        </div>
        <div class="ui three wide column">
          <div class="ui fluid card">
            <div class="image">
              <img src="https://semantic-ui.com/images/avatar/large/elliot.jpg">
            </div>
            <div class="content">
              <a class="header">Vrushank Desai</a>
              <div class="meta">
                <span class="date">Member since 2016</span>
              </div>
              <div class="description">
                Vrushank is an engineering student
              </div>
            </div>
            <div class="extra content">
              <div class="center aligned author">
                <strong>President</strong>
              </div>
            </div>
        </div>
        </div>
      </div> */}
          </div>
        </div>
        </React.Fragment>
    )

}