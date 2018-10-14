import React, { Component } from 'react'

import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGraduationCap,
    faUniversity,
    faInfo,
    faCaretRight
} from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt as faCalendar, faCommentDots } from '@fortawesome/free-regular-svg-icons'

import './style.css'

fontAwesomeLibrary.add(
    faGraduationCap,
    faCalendar,
    faUniversity,
    faInfo,
    faCaretRight,
    faCommentDots
)

class Education extends Component {
    render() {
        const education = this.props.data
        const academyCourses = education.academyCourses.map((entry, i) => (
            <div className='academy-course icon-grid-container' key={i}>
                <FontAwesomeIcon icon={faGraduationCap} fixedWidth />
                <span>{entry.title}</span>

                <FontAwesomeIcon icon={faCalendar} fixedWidth />
                <span>{entry.date}</span>
                <FontAwesomeIcon icon={faUniversity} fixedWidth />
                <span>{entry.school} – {entry.location}</span>

                {entry.info.map((info, i) => (
                    <React.Fragment>
                        <FontAwesomeIcon icon={faInfo} fixedWidth />
                        <span>{info}</span>
                    </React.Fragment>
                ))}
            </div>
        ))

        const relevantCourses = education.relevantCourses.map((entry, i) => (
            <div className='course icon-grid-container' key={i}>
                <FontAwesomeIcon icon={faCaretRight} />
                <span>
                    {entry.title}
                </span>
                <br/>
                <small>
                    {entry.school}; {entry.duration}h — {entry.date}
                </small>
            </div>
        ))

        const relevantCoursesTotalDuration = Math.round(
            education.relevantCourses.reduce((sum, entry) => sum + entry.duration, 0)
        )

        const relevantEvents = education.relevantEvents.map((entry, i) => (
            <div className='event icon-grid-container' key={i}>
                <FontAwesomeIcon icon={faCaretRight} />
                <span>
                    {entry.title}
                </span>
                <br />
                <small>
                    {entry.location}; {entry.date}
                </small>
            </div>
        ))

        return (
            <section>
                <h2 id='education'>Education</h2>

                <div className='academy-courses grid-container'>
                    {academyCourses}
                </div>
                <h3 id='relevant-courses'>
                    Relevant courses taken
                    <small>
                        <FontAwesomeIcon icon={faCommentDots} flip='horizontal' />
                        {relevantCourses.length} courses on software, entrepreneurship, leadership and self development with a total of ~{relevantCoursesTotalDuration} hours
                    </small>
                </h3>

                <div className='courses grid-container'>
                    {relevantCourses}
                </div>

                <h3 id='relevant-events'>
                    Relevant events attended
                    <small>
                        <FontAwesomeIcon icon={faCommentDots} flip='horizontal' />
                        {relevantEvents.length} events on technology and entrepreneurship in different cities and countries
                    </small>
                </h3>

                <div className='events grid-container'>
                    {relevantEvents}
                </div>
            </section>
        )
    }
}

export default Education
