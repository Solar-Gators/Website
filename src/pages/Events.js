import React from 'react'
import Container from 'react-bootstrap/Container'

import FullCalendar from '@fullcalendar/react'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import dayGridPlugin from '@fullcalendar/daygrid'



export default function Events() {
    return (
        <Container className="ml-auto mr-auto" style={{margin: '5vh'}}>
            <FullCalendar
                plugins={[ googleCalendarPlugin, dayGridPlugin ]}
                initialView="dayGridMonth"
                googleCalendarApiKey='AIzaSyAHAyW347iPTLmSv8yL9WqitQ5YJnfHIXw'
                events={{
                    googleCalendarId: 'solargatorsweb@gmail.com'
                }}
            />
        </Container>
    )
}
