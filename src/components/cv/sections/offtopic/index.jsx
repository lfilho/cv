import React, { Component } from 'react';
import ReactAutoLink from 'react-autolink';

import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCaretRight, faBook } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';

import AnchoredHeader from '../../../../lib/anchored-header.jsx';

import './style.css';

fontAwesomeLibrary.add(faCaretRight, faBook, faCommentDots);

const createBookEntry = (entry, i) => (
    <div className="book icon-grid-container" key={i}>
        <FontAwesomeIcon icon={faCaretRight} />
        <span>
            {entry.title}
            <em>{entry.subtitle}</em>
        </span>
        <br />
        <small>{entry.author}</small>
    </div>
);

export default class OffTopic extends Component {
    render() {
        const books = this.props.data.books;
        const softwareBooks = books.software.map(createBookEntry);
        const softSkillsBooks = books.softSkills.map(createBookEntry);
        const freeTime = this.props.data.freeTime.map((entry, i) => (
            <p key={i} className="first">
                {ReactAutoLink.autolink(entry, {
                    target: '_blank',
                    key: `link${i}`,
                })}
            </p>
        ));

        return (
            <section>
                <AnchoredHeader level="2" id="not-so-off-topics">
                    <span>(The not so)</span> Off topics
                    <small>
                        <FontAwesomeIcon
                            icon={faCommentDots}
                            flip="horizontal"
                        />
                        Some other things that help shaping the professional I
                        am
                    </small>
                </AnchoredHeader>

                <AnchoredHeader level="3">Relevant content</AnchoredHeader>

                <AnchoredHeader
                    level="4"
                    id="relevant-content-software-development"
                >
                    <FontAwesomeIcon icon={faBook} />
                    Software Development
                    <small>
                        <FontAwesomeIcon
                            icon={faCommentDots}
                            flip="horizontal"
                        />
                        {softwareBooks.length} books on programming languages,
                        techniques and tools
                    </small>
                </AnchoredHeader>

                <div className="books grid-container">{softwareBooks}</div>

                <AnchoredHeader
                    level="4"
                    id="relevant-content-entrepreneurship"
                >
                    <FontAwesomeIcon icon={faBook} />
                    Soft Skills
                    <small>
                        <FontAwesomeIcon
                            icon={faCommentDots}
                            flip="horizontal"
                        />
                        {softSkillsBooks.length} books on leadership, culture,
                        productivity, entrepreneurship and management
                    </small>
                </AnchoredHeader>

                <div className="books grid-container">{softSkillsBooks}</div>

                {/* <AnchoredHeader level='3'>Free time</AnchoredHeader> */}

                {/* {freeTime} */}
            </section>
        );
    }
}
