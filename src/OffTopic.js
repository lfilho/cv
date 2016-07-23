import React, { Component } from 'react'

const createBookEntry = (entry, index) => (
    <li key={index}>
        <i className='fa-li fa fa-caret-right'></i>
        {entry.title}
        <small>
            {entry.author}
        </small>
    </li>
)

class OffTopic extends Component {
    render() {
        const books = this.props.data.books
        const softwareBooks = books.software.map(createBookEntry)
        const softSkillsBooks = books.softSkills.map(createBookEntry)
        const freeTime = this.props.data.freeTime.map((entry, index) => (
            <p key={index} className='first'>
                {entry}
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

                <ul className='software books fa-ul flex-container'>
                    {softwareBooks}
                </ul>

                <h4 id='relevant-content-entrepreneurship'>
                    <i className='fa fa-book'></i>
                    Soft Skills
                    <small>
                        <i className='fa fa-commenting-o fa-flip-horizontal'></i>
                        {softSkillsBooks.length} books on leadership, productivity, entrepreneurship and management
                    </small>
                </h4>

                <ul className='soft-skills books fa-ul flex-container'>
                    {softSkillsBooks}
                </ul>

                <h3 id='my-free-time'>Free time</h3>

                {freeTime}
            </section>
        )
    }
}

export default OffTopic
