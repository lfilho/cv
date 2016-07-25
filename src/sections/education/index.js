import React, { Component } from 'react'

class Education extends Component {
    render() {
        const education = this.props.data
        const academyCourses = education.academyCourses.map((entry, i) => {
            const infos = entry.info.map((entry, i) => (
                <div className='info' key={i}>
                    <i className='fa fa-fw fa-info'></i>
                    <span>{entry}</span>
                </div>
            ))

            return (
                <div className='academy-course' key={i}>
                    <div className='title'>
                        <i className='fa fa-fw fa-graduation-cap'></i>
                        <span>{entry.title} &ndash; {entry.date}</span>
                    </div>
                    <div className='instituion'>
                        <i className='fa fa-fw fa-university'></i>
                        <span>{entry.school} &ndash; {entry.location}</span>
                    </div>
                    {infos}
                </div>
            )
        })

        const relevantCourses = education.relevantCourses.map((entry, i) => (
            <li key={i}>
                <i className='fa-li fa fa-caret-right'></i>
                {entry.title}
                <br/>
                <small>
                    {entry.school}; {entry.duration}h &mdash; {entry.date}
                </small>
            </li>
        ))

        const relevantCoursesTotalDuration = Math.round(
            education.relevantCourses.reduce((sum, entry) => sum + entry.duration, 0)
        )

        const relevantEvents = education.relevantEvents.map((entry, i) => (
            <li key={i}>
                <i className='fa-li fa fa-caret-right'></i>
                {entry.title}
                <br />
                <small>
                    {entry.location}; {entry.date}
                </small>
            </li>
        ))

        return (
            <section>
                <h2 id='education'>Education</h2>

                <div className='academy-courses flex-container'>
                    {academyCourses}
                </div>

                <h3 id='relevant-courses'>
                    Relevant courses taken
                    <small>
                        <i className='fa fa-commenting-o fa-flip-horizontal'></i>
                        {relevantCourses.length} courses on software, entrepreneurship and self development with a total of ~{relevantCoursesTotalDuration} hours
                    </small>
                </h3>

                <ul className='courses fa-ul flex-container'>
                    {relevantCourses}
                </ul>

                <h3 id='relevant-events'>
                    Relevant events attended
                    <small>
                        <i className='fa fa-commenting-o fa-flip-horizontal'></i>
                        {relevantEvents.length} events on technology and entrepreneurship in different cities and countries
                    </small>
                </h3>

                <ul className='events fa-ul flex-container'>
                    {relevantEvents}
                </ul>
            </section>
        )
    }
}

export default Education
