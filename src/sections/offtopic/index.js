import React, { Component } from 'react'
import ReactAutoLink from 'react-autolink'
import './style.css'

const createBookEntry = (entry, i) => (
    <div className='icon-grid-container' key={i}>
        <i className='fa fa-caret-right'></i>
        <span>
            {entry.title}
            <em>{entry.subtitle}</em>
        </span>
        <br/>
        <small>{entry.author}</small>
    </div>
)

class OffTopic extends Component {
    render() {
        const books = this.props.data.books
        const softwareBooks = books.software.map(createBookEntry)
        const softSkillsBooks = books.softSkills.map(createBookEntry)
        const freeTime = this.props.data.freeTime.map((entry, i) => (
            <p key={i} className='first'>
                { ReactAutoLink.autolink(entry, { target: '_blank', key: `link${i}` }) }
            </p>
        ))

        return (
            <section>
                <h2 id='off-topics'>
                    <span>(The not so)</span> Off topics
                    <small>
                        <i className='fa fa-commenting-o fa-flip-horizontal'></i>
                        Some other things that help shaping the professional I am
                    </small>
                </h2>

                <h3 id='relevant-content'>Relevant content</h3>

                <h4 id='relevant-content-software-development'>
                    <i className='fa fa-book'></i>
                    Software Development
                    <small>
                        <i className='fa fa-commenting-o fa-flip-horizontal'></i>
                        {softwareBooks.length} books on programming languages, techniques and tools
                    </small>
                </h4>

                <div className='books grid-container'>
                    {softwareBooks}
                </div>

                <h4 id='relevant-content-entrepreneurship'>
                    <i className='fa fa-book'></i>
                    Soft Skills
                    <small>
                        <i className='fa fa-commenting-o fa-flip-horizontal'></i>
                        {softSkillsBooks.length} books on leadership, culture, productivity, entrepreneurship and management
                    </small>
                </h4>

                <div className='books grid-container'>
                    {softSkillsBooks}
                </div>

                <h3 id='my-free-time'>Free time</h3>

                {freeTime}
            </section>
        )
    }
}

export default OffTopic
