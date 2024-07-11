import React from 'react'
import { AddEventButton, AddEventForm, CalendarContainer, Content, EventCalendarContainer, EventInput, Events } from '../../styles/EventCalendarStyles'
import Sidebar from './Sidebar'

const TeacherEventCalendar = () => {
  return (
    <EventCalendarContainer>
      <Sidebar/>
      <Content>
        <h1>Event and Calenedar</h1>
        <div>Current Time: </div>

        <CalendarContainer>
          {/* Here we can display the calendar  */}
        </CalendarContainer>

        <AddEventForm>
          <h2>Add New Event</h2>
          <EventInput 
          type='text'
          placeholder='Enter event'
          />
          <AddEventButton
          type='submit'
          >Add Event </AddEventButton>
        </AddEventForm>
        <Events>
          <h2>Events</h2>
        </Events>
      </Content>

    </EventCalendarContainer>
  )
}

export default TeacherEventCalendar