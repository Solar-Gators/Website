import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios'
import ReactGA from 'react-ga'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../content/styles/Contact.scss";


export default function Contact() {

    let   [ captcha, setCaptcha ] = useState(null)
    const [ validated, setValidated ] = useState(false)
    const [ errorMsg, setErrorMsg ] = useState("")
    const [ successMsg, setSuccessMsg ] = useState("")
    const [ submitting, setSubmitting ] = useState(false)


    let onSubmit = (event) =>  {
        event.preventDefault()
        setErrorMsg("")
        setSuccessMsg("")
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return
        }

        let email = document.getElementById('contact-email')?.value
        let name = document.getElementById('contact-name')?.value
        let msg = document.getElementById('contact-msg')?.value

        if (!captcha) {
            return setErrorMsg("Please verify the reCaptcha.")
        }
        
        //set submitting true to disable form
        setSubmitting(true)

        axios.post('https://api.ufsolargators.org/api/contact', {
            email: email,
            name: name,
            msg: msg,
            token: captcha
        })
        .then(({ data: response }) => {
            /* success: boolean
                    msg: string
            */

            if (response.success) {
                ReactGA.event({
                    category: 'User',
                    action: 'Successfully submitted Contact Form'
                  })
                //good
                setSuccessMsg("Message sent!")
                document.getElementById('contact-email').value = ""
                document.getElementById('contact-name').value = ""
                document.getElementById('contact-msg').value = ""
            }
            else {
                setErrorMsg(response?.msg)
                ReactGA.event({
                    category: 'User',
                    action: 'User error submitting form'
                  })
            }

            //enable submitting
            setSubmitting(false)
        })
        .catch(({data: response}) => {
            setErrorMsg(response?.msg ?? "There has been an internal error.")
            //enable submitting
            setSubmitting(false)

            ReactGA.event({
                category: 'Error',
                action: 'Got an error while submitting form (PROGRAMMING ERROR)'
              })
        })
    }

    return (
        <React.Fragment>
            {/*  Page Header */}
            <Container fluid="true" className="header">
                <Row>
                    <Col>
                        <div className="contact-header-img">
                            <h1 className={"title-text"}>
                                Contact Us
                            </h1>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid="true" style={{justifyContent: "center"}}>
                <Container fluid="true" className="transparent-box">
                        { errorMsg ? <Alert variant="danger" >
                            {errorMsg}
                        </Alert> : "" }

                        { successMsg ? <Alert variant="success" >
                            {successMsg}
                        </Alert> : "" }

                        <Form onSubmit={onSubmit} validated={validated} noValidate>
                            <Form.Group controlId="formBasicEmail" style={{paddingBottom: "1vw"}}>
                                <Form.Label className="body-text" style={{paddingBottom: "10px"}}>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" id="contact-name" required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your name.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" style={{paddingBottom: "1vw"}}>
                                <Form.Label className="body-text" style={{paddingBottom: "10px"}}>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" id="contact-email" required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your email.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox" style={{paddingBottom: "1vw"}}>
                                <Form.Label className="body-text" style={{paddingBottom: "10px"}}>
                                    Message
                                </Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Hey Solar Gators..." id="contact-msg" required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your message.
                                </Form.Control.Feedback>
                            </Form.Group>


                            <ReCAPTCHA
                                sitekey={process.env.REACT_APP_ReCAPTCHA}
                                onChange={setCaptcha}
                                className="mb-3"
                            />

                            <Button
                                variant="primary"
                                type="submit"
                                disabled={submitting}>
                                Submit
                            </Button>
                        </Form>
                </Container>
            </Container>

        </React.Fragment>
    )
}
