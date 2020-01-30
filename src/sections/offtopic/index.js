import React, { Component } from 'react'
import ReactAutoLink from 'react-autolink'

import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCaretRight, faBook } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'

import './style.css'

fontAwesomeLibrary.add(faCaretRight, faBook, faCommentDots)

const createBookEntry = (entry, i) => (
    <div className='icon-grid-container' key={i}>
        <FontAwesomeIcon icon={faCaretRight} />
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
                <h2 id='not-so-off-topics'>
                    <span>(The not so)</span> Off topics
                    <small>
                        <FontAwesomeIcon icon={faCommentDots} flip='horizontal' />
                        Some other things that help shaping the professional I am
                    </small>
                </h2>

                <h3 id='relevant-content'>Relevant content</h3>

                <h4 id='relevant-content-software-development'>
                    <FontAwesomeIcon icon={faBook} />
                    Software Development
                    <small>
                        <FontAwesomeIcon icon={faCommentDots} flip='horizontal' />
                        {softwareBooks.length} books on programming languages, techniques and tools
                    </small>
                </h4>

                <div className='books grid-container'>
                    {softwareBooks}
                </div>

                <h4 id='relevant-content-entrepreneurship'>
                    <FontAwesomeIcon icon={faBook} />
                    Soft Skills
                    <small>
                        <FontAwesomeIcon icon={faCommentDots} flip='horizontal' />
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
