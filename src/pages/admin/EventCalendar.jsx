import React, { useEffect, useState } from 'react'
import { AddEventButton, AddEventForm, CalendarContainer, Content, Event, EventCalendarContainer, EventInput, Events } from '../../styles/EventCalendarStyles'
import Sidebar from './Sidebar'
import axios from 'axios'

const EventCalendar = () => {
  const [events, setEvents] = useState([])
  const [error, setError] = useState("")
  const [newEvent, setNewEvent] = useState()

  useEffect(()=> {
          fetchEvents()
  },[])
  
const fetchEvents = async () => {
  try {
    const response = await axios.get('http://localhost:4000/api/v1/events')
    if(response.data && Array.isArray(response.data.teachers)){
      setEvents(response.data.events  || [])

    }else{
      console.log("Error while fetching teachers:", response.data)
    }
} catch (error) {
    console.error("Error fetching teachers: ", error)
    
}
}

const addEvent = async (e) => {
  e.preventDefault()

  try {
      const response = await axios.post('http://localhost:4000/api/v1/events', {event: newEvent});
      console.log("Response data", response.data)
      setEvents([...events, response.data.events] )
      setNewEvent ("")
    } catch (error) {
      console.error("Error adding EVENTS: ", error)
      if(error.response && error.response.data && error.response.data.error){
        setError(error.response.data.error)

}else{
  setError("Error adding event")
}
  }
}
  return (
    <EventCalendarContainer>
      <Sidebar/>
      <Content>
        <h1>Event and Calenedar</h1>
        <div>Current Time: </div>

        <CalendarContainer>
          {/* Here we can display the calendar  */}
        </CalendarContainer>

        <AddEventForm onSubmit={addEvent}>
          <h2>Add New Event</h2>
          <EventInput 
          type='text'
          value={newEvent}
          placeholder='Enter event'
          onChange={(e) => setNewEvent(e.target.value)}
          />
          <AddEventButton
          type='submit'
          >Add Event </AddEventButton>
        </AddEventForm>
        <Events>
          <h2>Events</h2>
          {events.map((event, index) => {
            <Event key={index}>{event}</Event>

          })}
        </Events>
      </Content>

    </EventCalendarContainer>
  )
}

export default EventCalendar