import React, { Component } from 'react'
import './style.css'

class Education extends Component {
    render() {
        const education = this.props.data
        const academyCourses = education.academyCourses.map((entry, i) => (
            <div className='academy-course icon-grid-container' key={i}>
                <i className='fa fa-fw fa-graduation-cap'></i>
                <span>{entry.title}</span>

                <i className='fa fa-fw fa-calendar'></i>
                <span>{entry.date}</span>

                <i className='fa fa-fw fa-university'></i>
                <span>{entry.school} – {entry.location}</span>

                {entry.info.map((info, i) => (
                    <React.Fragment>
                        <i className='fa fa-fw fa-info'></i>
                        <span>{info}</span>
                    </React.Fragment>
                ))}
            </div>
        ))

        const relevantCourses = education.relevantCourses.map((entry, i) => (
            <div className='course icon-grid-container' key={i}>
                <i className='fa fa-caret-right'></i>
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
                <i className='fa fa-caret-right'></i>
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
                        <i className='fa fa-commenting-o fa-flip-horizontal'></i>
                        {relevantCourses.length} courses on software, entrepreneurship, leadership and self development with a total of ~{relevantCoursesTotalDuration} hours
                    </small>
                </h3>

                <div className='courses grid-container'>
                    {relevantCourses}
                </div>

                <h3 id='relevant-events'>
                    Relevant events attended
                    <small>
                        <i className='fa fa-commenting-o fa-flip-horizontal'></i>
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
