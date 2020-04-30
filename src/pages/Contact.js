import React from 'react'
import sponsorBanner from '../content/assets/images/sponsor_banner.jpg'

export default function Contact() {
    return (
        <React.Fragment>
            <div className="sponsor-container">
                <img style={{width: '100%', opacity: 1}} src={sponsorBanner} />
                <h1 className="sponsor-centered">Contact Us</h1>
            </div>

            <div className="ui container" style={{marginTop: '10vh', marginBottom: '10vh'}}>
                <div className="ui grid">
                    <div className="ui row">
                    <div className="four wide column" />
                    <div className="eight wide column">
                        <div className="ui raised orange segment">
                        <div className="ui form">
                            <div className="field">
                            <label>Your name</label>
                            <input type="text" placeholder="Name" />
                            </div>
                            <div className="field">
                            <label>Your email</label>
                            <input type="text" placeholder="First Name" />
                            </div>
                            <div className="field">
                            <label>Your message</label>
                            <div className="field">
                                <textarea rows={2} defaultValue={""} />
                            </div>
                            </div>
                            <div className="ui primary button">Submit</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
