import React from 'react'

import {
  Link
} from "react-router-dom";

import sponsorsBanner from '../content/assets/images/sponsor_banner.jpg'

import premiumSoldworks from '../content/assets/images/premium_solidworks.png'
import premiumEaton from '../content/assets/images/premium_eaton.png'
import premiumAltair from '../content/assets/images/premium_altair.png'
import premiumEce from '../content/assets/images/premium_ece.png'
import premiumHwco from '../content/assets/images/premium_hwco.png'
import premiumSiemens from '../content/assets/images/premium_siemens.png'
import premiumSolarImpact from '../content/assets/images/premium_solar_impact.png'
import premiumSunpower from '../content/assets/images/premium_sunpower.png'
import premiumUfmae from '../content/assets/images/premium_ufmae.png'
import premiumUniversal from '../content/assets/images/premium_universal.png'


import silverBac from '../content/assets/images/silver_bac.jpg'
import silverUfippd from '../content/assets/images/silver_ufippd.png'
import silverRohacell from '../content/assets/images/silver_rohacell.jpg'
import silverMirage from '../content/assets/images/silver_mirage.png'
import silverFgci from '../content/assets/images/silver_fgci.png'
import silverBrembo from '../content/assets/images/silver_brembo.jpg'
import silverUfsg from '../content/assets/images/silver_ufsg.png'
import silverAccurate from '../content/assets/images/silver_accurate.png'


import bronzeTdk from '../content/assets/images/bronze_tdk.png'
import bronzeZevia from '../content/assets/images/bronze_zevia.png'
import bronzeStickermule from '../content/assets/images/bronze_stickermule.png'
import bronzeSolarcat from '../content/assets/images/bronze_solarcat.jpg'
import bronzeKevins from '../content/assets/images/bronze_kevins.jpg'

import bronzeHakko from '../content/assets/images/bronze_hakko.gif'
import bronzeMoss from '../content/assets/images/bronze_moss.jpg'
import bronzeBmrs from '../content/assets/images/bronze_bmrs.jpg'
import bronzeBeadbuster from '../content/assets/images/bronze_beadbuster.jpg'

export default function Sponsor() {
    return (
        <React.Fragment>
          <div className="sponsor-container">
            <img style={{width: '100%', opacity: 1}} src={sponsorsBanner} />
            <h1 className="sponsor-centered">Sponsors</h1>
          </div>
          <div className="ui grid">
            <div className="ui row" style={{marginTop: '5vh'}}>
              <div className="two wide column" />
              <div className="twelve wide column">
                <div className="ui grid">
                  <ui className="row">
                    <div className="ui four wide column" />
                    <div className="ui eight wide column">
                      <h1 className="ui dividing header" style={{opacity: '0.8'}}>
                        OUR SPONSORS
                      </h1></div>
                  </ui>
                  <div className="ui row">
                    <div className="ui four wide column" />
                    <div className="ui eight wide column">Building, designing, prototyping, and organizing the build of a solar-powered vehicle is a very resource-intensive feat. All of this is possible due to the generosity and support of our beloved sponsors.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ui grid">
          <div className="ui row" style={{marginTop: '5vh'}}>
            <div className="two wide column" />
            <div className="twelve wide column">
              <div className="ui grid">
                <ui className="row">
                  <div className="ui four wide column" />
                  <div className="ui eight wide column">
                    <h1 className="ui dividing header" style={{opacity: '0.8'}}>
                      OUR SPONSORS
                    </h1></div>
                </ui>
                <div className="ui row">
                  <div className="ui four wide column" />
                  <div className="ui eight wide column">Building, designing, prototyping, and organizing the build of a solar-powered vehicle is a very resource-intensive feat. All of this is possible due to the generosity and support of our beloved sponsors.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ui grid">
          <div className="ui row centered">
            <Link to="/donate">
              <div className="ui animated basic blue circular massive button" tabIndex={0}>
                <div className="visible content">Sponsorship Opportunities</div>
                <div className="hidden content">
                  <i className="right arrow icon" />
                </div>
              </div>
            </Link></div>
          <div className="ui row centered" style={{marginTop: '5vh'}}>
            <div className="sixteen wide column">
              <div className="ui horizontal divider header dash_header">
                <h1>Cielo Car Sponsors (2019)</h1>
              </div>
            </div>
          </div>
          <div className="ui row centered" style={{marginTop: '5vh'}}>
            <div className="thirteen wide column">
              <div className="ui horizontal divider header dash_header">
                <i className="gift icon" />
                Platnium Sponsors
              </div>
              <div className="ui middle aligned three column divided grid" style={{marginTop: '1vh'}}>
                <div className="ui column">
                  <img style={{width: '100%'}} src={premiumSoldworks} />
                </div>
                <div className="ui column">
                  <img style={{width: '100%'}} src={premiumEaton} />
                </div>
                <div className="ui column">
                  <img style={{width: '100%', height: '20vh'}} src={premiumAltair} />
                </div>
              </div>
              <div className="ui middle aligned three column divided grid" style={{marginTop: '1vh'}}>
                <div className="ui column">
                  <img style={{width: '100%'}} src={premiumEce} />
                </div>
                <div className="ui column">
                  <img style={{width: '100%'}} src={premiumHwco} />
                </div>
                <div className="ui column">
                  <img style={{width: '100%', height: '20vh'}} src={premiumSiemens} />
                </div>
              </div>
              <div className="ui middle aligned three column divided grid" style={{marginTop: '1vh'}}>
                <div className="ui column">
                  <img style={{width: '100%'}} src={premiumSolarImpact} />
                </div>
                <div className="ui column">
                  <img style={{width: '100%'}} src={premiumSunpower} />
                </div>
                <div className="ui column">
                  <img style={{width: '100%', height: '20vh'}} src={premiumUfmae} />
                </div>
              </div>
              <div className="ui middle aligned three column divided grid" style={{marginTop: '1vh'}}>
                <div className="ui column">
                </div>
                <div className="ui column">
                  <img style={{width: '100%'}} src={premiumUniversal} />
                </div>
                <div className="ui column">
                </div>
              </div>
            </div>
          </div>
          <div className="ui row centered">
            <div className="fourteen wide column"><div className="ui fluid divider" /></div>
          </div>
          <div className="ui row centered" style={{marginTop: '5vh'}}>
            <div className="fourteen wide column">
              <div className="ui horizontal divider header dash_header">
                <i className="gift icon" />
                Silver Sponsors
              </div>
              <div className="ui middle aligned three column divided grid" style={{marginTop: '1vh'}}>
                <div className="ui column">
                  <img style={{width: '100%'}} src={silverBac} />
                </div>
                <div className="ui column">
                  <img style={{width: '100%'}} src={silverUfippd} />
                </div>
                <div className="ui column">
                  <img style={{width: '100%', height: '20vh'}} src={silverRohacell} />
                </div>
              </div>
              <div className="ui middle aligned three column divided grid" style={{marginTop: '1vh'}}>
                <div className="ui column">
                  <img style={{width: '100%'}} src={silverMirage} />
                </div>
                <div className="ui column">
                  <img style={{width: '100%'}} src={silverFgci} />
                </div>
                <div className="ui column">
                  <img style={{width: '100%', height: '20vh'}} src={silverBrembo} />
                </div>
              </div>
              <div className="ui middle aligned three column divided grid" style={{marginTop: '1vh'}}>
                <div className="ui column">
                  <img style={{width: '80%'}} src={silverUfsg} />
                </div>
                <div className="ui column">
                  <img style={{width: '100%'}} src={silverAccurate} />
                </div>
              </div>
            </div>
          </div>
          <div className="ui row centered">
            <div className="fourteen wide column"><div className="ui fluid divider" /></div>
          </div>
          <div className="ui row centered" style={{marginTop: '5vh'}}>
            <div className="fourteen wide column">
              <div className="ui horizontal divider header dash_header">
                <i className="gift icon" />
                Bronze Sponsors
              </div>
              <div className="ui middle aligned three column divided grid" style={{marginTop: '1vh'}}>
                <div className="ui column">
                  <img style={{width: '100%'}} src={bronzeTdk} />
                </div>
                <div className="ui column">
                  <img style={{width: '100%'}} src={bronzeZevia} />
                </div>
                <div className="ui column">
                  <img style={{width: '100%', height: '20vh'}} src={bronzeStickermule} />
                </div>
              </div>
              <div className="ui middle aligned three column divided grid" style={{marginTop: '1vh'}}>
                <div className="ui column">
                  <img style={{width: '100%'}} src={bronzeSolarcat} />
                </div>
                <div className="ui column">
                  <img style={{width: '100%'}} src={bronzeKevins} />
                </div>
                <div className="ui column">
                  <img style={{width: '100%', height: '20vh'}} src={bronzeHakko} />
                </div>
              </div>
              <div className="ui middle aligned three column divided grid" style={{marginTop: '1vh'}}>
                <div className="ui column">
                  <img style={{width: '100%'}} src={bronzeMoss} />
                </div>
                <div className="ui column">
                  <img style={{width: '100%'}} src={bronzeBmrs} />
                </div>
                <div className="ui column">
                  <img style={{width: '100%', height: '20vh'}} src={bronzeBeadbuster} />
                </div>
              </div>
            </div>
          </div>
          <div className="ui row centered">
            <div className="fourteen wide column"><div className="ui fluid divider" /></div>
          </div>
        </div>

        </React.Fragment>
    )
}
