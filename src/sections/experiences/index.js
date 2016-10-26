import React, { Component } from 'react'
import './style.css'

class Experiences extends Component {
    render() {
        const softwareEngineeringXps = this.props.data.softwareEngineering.map((entry, i) => {
            const keywords = entry.keywords.map((entry, i) => <span className='keyword' key={i}>{entry}</span>)
            const description = entry.description.map((entry, i) => <p key={i}>{entry}</p>)

            return (
                <div className='xp flex-container' key={i}>
                    <aside className='flex-container'>
                        <div className='job-data'>
                            <div className='period'>
                                <i className='fa fa-fw fa-clock-o'></i>
                                <span>{entry.startDate} – {entry.endDate}</span>
                            </div>
                            <div className='company'>
                                <i className='fa fa-fw fa-building-o'></i>
                                <span className='org'>{entry.company}</span>
                            </div>
                            <div className='position'>
                                <i className='fa fa-fw fa-users'></i>
                                <span>{entry.position}</span>
                            </div>
                        </div>
                        <div className='job-keywords'>
                            <i className='fa fa-fw fa-tags'></i>
                            {keywords}
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
                <div className='title' key={i}>
                    <i className='fa fa-fw fa-microphone'></i>
                    <span>{entry}</span>
                </div>
            ))

            return (
                <div className='talk' key={i}>
                    <article>
                        <div className='period'>
                            <i className='fa fa-fw fa-calendar'></i>
                            <span>{entry.date} – {entry.location}</span>
                        </div>
                        <div className='event'>
                            <i className='fa fa-fw fa-ticket'></i>
                            <span>{entry.venue}</span>
                        </div>
                        {titles}
                    </article>
                </div>
            )
        })

        const volunteerXps = this.props.data.volunteer.map((entry, i) => {
            const keywords = entry.keywords.map((entry, i) => <span className='keyword' key={i}>{entry}</span>)

            return (
                <div className='volunteer xp' key={i}>
                    <aside className='flex-container'>
                        <div className='job-data'>
                            <div className='period'>
                                <i className='fa fa-fw fa-clock-o'></i>
                                <span>{entry.date} – {entry.location}</span>
                            </div>
                            <div className='company'>
                                <i className='fa fa-fw fa-building-o'></i>
                                <span className='org'>{entry.organization}</span>
                            </div>
                            <div className='position'>
                                <i className='fa fa-fw fa-user'></i>
                                <span>{entry.position}</span>
                            </div>
                        </div>
                        <div className='job-keywords'>
                            <i className='fa fa-fw fa-tags'></i>
                            {keywords}
                        </div>
                    </aside>
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

                    <div className='flex-container'>
                        {teacherOrSpeakerXps}
                    </div>

                    <h3 id='volunteer-work'>Volunteer Work</h3>

                    <p className='summary'>
                        Volunteer work ignited in me the caring for people: be them the ones we are the doing the work for, or my colleagues. It also taught me to value and dedicate my time for something else than money, for something that would do (or be) good for someone besides myself.
                   </p>

                   <p className='summary'>
                       You can check my open source contributions at <span className='org'><a href="https://github.com/lfilho">github.com/lfilho</a></span>.
                   </p>

                   <div className='flex-container'>
                       {volunteerXps}
                   </div>
               </div>
           </section>
        )
    }
}

export default Experiences
