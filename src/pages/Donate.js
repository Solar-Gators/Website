import React from 'react'
import sponsorBanner from '../content/assets/images/sponsor_banner.jpg'
import sponsorshipLevels from '../content/assets/images/sponsorship-levels.png'

export default function Donate() {
    return (
        <React.Fragment>
            <div className="sponsor-container">
                <img style={{width: '100%', opacity: 1}} src={sponsorBanner} />
                <h1 className="sponsor-centered">Sponsorship Opportunities</h1>
            </div>

            <div className="ui grid">
                <div className="ui row" style={{marginTop: '10vh'}}>
                    <div className="two wide column" />
                    <div className="twelve wide column">
                    <div className="ui grid">
                        <ui className="row">
                        <div className="ui two wide column" />
                        <div className="ui twelve wide column">
                            <h1 className="ui dividing header" style={{opacity: '0.8'}}>
                            About the Organization
                            </h1></div>
                        </ui>
                        <div className="ui row">
                        <div className="ui two wide column" />
                        <div className="ui six wide column">
                            <p className="regular-text">
                            Solar Gators is a 501(c)(3) nonprofit organization. We have sponsorship tiers available, but appreciate any contribution to the organization. Contributions online are general use and permit the club to continue constructing the car and working towards our goal of competitions. Please note that if making an online contribution, you will be redirected to the University of Florida website to complete your gift. On the university's donation page, please be sure to mention "Solar Gators" in the comment box. If you would prefer to make a contribution by check, or have something else to give, please follow the links below. Tax forms are available upon request. </p></div>
                        <p />
                        <div className="ui six wide column">
                            <img style={{width: '100%', opacity: 1}} src={sponsorshipLevels} />
                        </div>
                        </div>
                        <div className="ui row centered">
                        <div className="fourteen wide column"><div className="ui fluid divider" /></div>
                        </div>
                        <div className="ui row centered">
                        <div className="ui centered grid">
                            <div className="four wide column" style={{margin: '1vw'}}>
                            <div className="ui row centered">
                                <a href="https://www.uff.ufl.edu/OnlineGiving/FundDetail.asp?FundCode=003911&AppealCode=GESWQA1">
                                <button className="circular orange ui icon massive button"><i className="icon credit card" /></button>
                                </a>            </div>
                            <div className="ui row centered">
                                <p style={{fontSize: '1.15em', opacity: '0.8', width: '100%', textAlign: 'center !important', margin: '4px'}}>Donate online</p>
                            </div>
                            </div>
                            <div className="four wide column" style={{margin: '1vw'}}>
                            <div className="ui row centered">
                                <a href="https://www.uff.ufl.edu/OnlineGiving/FundDetail.asp?FundCode=003911&AppealCode=GESWQA1">
                                <button className="circular orange ui icon massive button"><i className="icon credit card" /></button>
                                </a>            </div>
                            <div className="ui row centered">
                                <p style={{fontSize: '1.15em', opacity: '0.8', width: '100%', textAlign: 'center !important', margin: '4px'}}>Donate by Check</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="ui row centered">
                        <div className="fourteen wide column"><div className="ui fluid divider" /></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </React.Fragment>
    )
}