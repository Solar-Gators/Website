import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Header from '../components/Header'

import sponsorBanner from '../content/assets/images/sponsor_banner.jpg'

export default function Contact() {
    return (
        <React.Fragment>
            <Header className="sponsor-section">
                <h1 className="sponsor-centered">Contact Us</h1>
            </Header>

        <Container className="mt-4">
            <Card>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="message" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>

        </React.Fragment>
    )
}
