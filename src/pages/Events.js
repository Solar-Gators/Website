import React from 'react'
import Container from 'react-bootstrap/Container'

import FullCalendar from '@fullcalendar/react'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import dayGridPlugin from '@fullcalendar/daygrid'



export default function Events() {
    return (
        <Container className="ml-auto mr-auto" style={{margin: '5vh'}}>
            <p>Site under construction</p>
            <FullCalendar
                plugins={[ googleCalendarPlugin, dayGridPlugin ]}
                initialView="dayGridMonth"
                googleCalendarApiKey='banana'
                events={{
                    googleCalendarId: 'solargatorsweb@gmail.com'
                }}
            />
        </Container>
    )
}
