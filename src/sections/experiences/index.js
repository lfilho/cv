import React, { Component } from 'react'

import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faTags,
    faUsers,
    faUser,
    faTicketAlt,
    faMicrophone
} from '@fortawesome/free-solid-svg-icons'
import {
    faCalendarAlt as faCalendar,
    faClock,
    faBuilding
} from '@fortawesome/free-regular-svg-icons'

import './style.css'

fontAwesomeLibrary.add(
    faTags,
    faUsers,
    faUser,
    faBuilding,
    faClock,
    faTicketAlt,
    faCalendar,
    faMicrophone
)

class Experiences extends Component {
    render() {
        const softwareEngineeringXps = this.props.data.softwareEngineering.map((entry, i) => {
            const keywords = entry.keywords.map((entry, i) => <span className='keyword' key={i}>{entry}</span>)
            const description = entry.description.map((entry, i) => <p key={i}>{entry}</p>)

            return (
                <div className='xp' key={i}>
                    <aside className='grid-container'>
                        <div className='job-data icon-grid-container'>
                            <FontAwesomeIcon icon={faClock} fixedWidth />
                            <span>{entry.startDate} – {entry.endDate}</span>
                            <FontAwesomeIcon icon={faBuilding} fixedWidth />
                            <span className='org'>{entry.company}</span>
                            <FontAwesomeIcon icon={faUsers} fixedWidth />
                            <span>{entry.position}</span>
                        </div>
                        <div className='job-keywords icon-grid-container'>
                            <FontAwesomeIcon icon={faTags} fixedWidth />
                            <span>{keywords}</span>
                        </div>
                    </aside>
                    <article>
                        <div className='description'>
                            {description}
                        </div>
                    </article>
                </div>
            )
        })

        const teacherOrSpeakerXps = this.props.data.teacherOrSpeaker.map((entry, i) => {
            let titles = [].concat(entry.title).map((entry, i) => (
                <div className='title icon-grid-container' key={i}>
                    <FontAwesomeIcon icon={faMicrophone} fixedWidth />
                    <span>{entry}</span>
                </div>
            ))

            return (
                <article className='talk' key={i}>
                    <div className='period icon-grid-container'>
                        <FontAwesomeIcon icon={faCalendar} fixedWidth />
                        <span>{entry.date} – {entry.location}</span>
                    </div>
                    <div className='event icon-grid-container'>
                        <FontAwesomeIcon icon={faTicketAlt} fixedWidth />
                        <span>{entry.venue}</span>
                    </div>
                    {titles}
                </article>
            )
        })

        const volunteerXps = this.props.data.volunteer.map((entry, i) => {
            const keywords = entry.keywords.map((entry, i) => <span className='keyword' key={i}>{entry}</span>)

            return (
                <div className='volunteer xp' key={i}>
                    <div className='job-data'>
                        <div className='period icon-grid-container'>
                            <FontAwesomeIcon icon={faClock} fixedWidth />
                            <span>{entry.date} – {entry.location}</span>
                        </div>
                        <div className='company icon-grid-container'>
                            <FontAwesomeIcon icon={faBuilding} fixedWidth />
                            <span className='org'>{entry.organization}</span>
                        </div>
                        <div className='position icon-grid-container'>
                            <FontAwesomeIcon icon={faUser} fixedWidth />
                            <span>{entry.position}</span>
                        </div>
                    </div>
                    <div className='job-keywords icon-grid-container'>
                        <FontAwesomeIcon icon={faTags} fixedWidth />
                        <div>
                            {keywords}
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <section>
                <h2 id='experiences'>Experiences</h2>

                <h3 id='software-engineering'>Software Engineering</h3>

                <div>
                    {softwareEngineeringXps}

                    <h3 id='speaking-or-teaching'>As a speaker or teacher</h3>

                    <div className='grid-container'>
                        {teacherOrSpeakerXps}
                    </div>

                    <h3 id='volunteer-work'>Volunteer Work</h3>

                    <p className='summary'>
                        Volunteer work ignited in me the caring for people: be them the ones we are the doing the work for, or my colleagues. It also taught me to value and dedicate my time for something else than money, for something that would do (or be) good for someone besides myself.
                    </p>

                   <p className='summary'>
                       You can check my open source contributions at <span className='org'><a href="https://github.com/lfilho">github.com/lfilho</a></span>.
                   </p>

                   <div className='grid-container'>
                       {volunteerXps}
                   </div>
               </div>
           </section>
        )
    }
}

export default Experiences
