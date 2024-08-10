"use client"
import './calendar.css'

import React, { useState } from "react"
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
  isToday,
  isSameDay,
  isWeekend
} from "date-fns"
import './calendar.css' // Import the external CSS file

type Appointment = {
  date: Date
  topic: string
}

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [appointmentTopic, setAppointmentTopic] = useState<string>("")

  const startDate = startOfMonth(currentMonth)
  const endDate = endOfMonth(currentMonth)

  // Create an array of days including leading and trailing empty days
  const getCalendarDays = () => {
    const daysInCalendar = []
    const startOfWeek = startDate.getDay() // Sunday = 0
    const endOfWeek = endDate.getDay() // Saturday = 6

    // Fill leading empty days
    for (let i = 0; i < startOfWeek; i++) {
      daysInCalendar.push(null)
    }

    // Fill days of the current month
    for (let day of eachDayOfInterval({ start: startDate, end: endDate })) {
      daysInCalendar.push(day)
    }

    // Fill trailing empty days
    for (let i = endOfWeek + 1; i < 7; i++) {
      daysInCalendar.push(null)
    }

    return daysInCalendar
  }

  const handleDayClick = (day: Date) => {
    setSelectedDate(day)
  }

  const handleAppointmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAppointmentTopic(event.target.value)
  }

  const handleAppointmentSubmit = () => {
    if (selectedDate && appointmentTopic) {
      setAppointments((prevAppointments) => [
        ...prevAppointments,
        { date: selectedDate, topic: appointmentTopic }
      ])
      setAppointmentTopic("")
      setSelectedDate(null) // Hide the input box after submission
    }
  }

  const handleAppointmentRemove = (date: Date) => {
    setAppointments((prevAppointments) =>
      prevAppointments.filter((appointment) => !isSameDay(appointment.date, date))
    )
  }

  const isAppointmentDate = (date: Date) => {
    return appointments.some(app => isSameDay(app.date, date))
  }

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="calendar-header-button"
        >
          &lt;
        </button>
        <span className="calendar-month-label">{format(currentMonth, "MMMM yyyy")}</span>
        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="calendar-header-button"
        >
          &gt;
        </button>
      </div>

      <div className="calendar-grid">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
          <div key={day} className="calendar-day-name">{day}</div>
        ))}
        {getCalendarDays().map((day, index) => (
          <div
            key={index}
            onClick={() => day && handleDayClick(day)}
            className={`calendar-day ${
              day && isToday(day) ? "today" : ""
            } ${day && isAppointmentDate(day) ? "appointment" : ""}
            ${day && isWeekend(day) ? "weekend" : ""}`}
          >
            {day ? day.getDate() : ""}
          </div>
        ))}
      </div>

      {selectedDate && (
        <div className="appointment-box">
          <h3 className="text-lg font-semibold mb-2">Enter Appointment Topic</h3>
          <p className="mb-2">Selected Date: {format(selectedDate, "MMMM d, yyyy")}</p>
          <input
            type="text"
            placeholder="Enter appointment topic"
            value={appointmentTopic}
            onChange={handleAppointmentChange}
            className="appointment-input"
          />
          <div className="flex space-x-2">
            <button
              onClick={handleAppointmentSubmit}
              className="appointment-button save"
            >
              Save
            </button>
            <button
              onClick={() => setSelectedDate(null)}
              className="appointment-button cancel"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {appointments.length > 0 && (
        <div className="appointment-list">
          <h4 className="text-lg font-semibold mb-2">Appointments</h4>
          <ul>
            {appointments.map((app, index) => (
              <li key={index} className="appointment-list-item">
                <div>
                  <p className="text-sm font-medium">Date: {format(app.date, "MMMM d, yyyy")}</p>
                  <p className="text-sm text-gray-600">Topic: {app.topic}</p>
                </div>
                <button
                  onClick={() => handleAppointmentRemove(app.date)}
                  className="appointment-list-item-button"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Calendar
