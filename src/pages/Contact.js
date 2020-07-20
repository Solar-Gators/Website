import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import Header from '../components/Header'
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios'


export default function Contact() {

    let   [ captcha, setCaptcha ] = useState(null)
    const [ validated, setValidated ] = useState(false)
    const [ errorMsg, setErrorMsg ] = useState("")
    const [ successMsg, setSuccessMsg ] = useState("")


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

        axios.post('https://api.ufsolargators.org/api/contact', {
            email: email,
            name: name,
            msg: msg,
            token: captcha
        })
        .then(({ data: response }) => {
            /*
                {
                    success: boolean
                    msg: string
                }
            */

            if (response.success) {
                //good
                setSuccessMsg("Your message has successfully been delivered.")
                document.getElementById('contact-email').value = ""
                document.getElementById('contact-name').value = ""
                document.getElementById('contact-msg').value = ""
            }
            else {
                setErrorMsg(response.msg)
            }
        })
    }

    return (
        <React.Fragment>
            <Header className="sponsor-section">
                <h1 className="sponsor-centered">Contact Us</h1>
            </Header>

        <Container className="mt-4">
            <Card>
                <Card.Body>
                    { errorMsg ? <Alert variant="danger" >
                        {errorMsg}
                    </Alert> : "" }

                    { successMsg ? <Alert variant="success" >
                        {successMsg}
                    </Alert> : "" }

                    <Form onSubmit={onSubmit} validated={validated} noValidate>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" id="contact-name" required />
                            <Form.Control.Feedback type="invalid">
                                Please enter your name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" id="contact-email" required />
                            <Form.Control.Feedback type="invalid">
                                Please enter your email.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="message" id="contact-msg" required />
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
                            type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>

        </React.Fragment>
    )
}
