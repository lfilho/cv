import type CVData from '@components/cv/cvData.d';
import { Component } from 'react';

import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import AnchoredHeader from '@lib/anchored-header.jsx';

import './style.css';

fontAwesomeLibrary.add(faBook, faCommentDots);

const createBookEntry = (entry: any, i: number) => (
    <li className='book' key={i}>
        <span>
            {entry.title}
            <em>{entry.subtitle}</em>
        </span>
        <br />
        <small>{entry.author}</small>
    </li>
);

export default class Books extends Component<{ data: CVData['books'] }> {
    render() {
        const books = this.props.data;
        const softwareBooks = books.software.map(createBookEntry);
        const softSkillsBooks = books.softSkills.map(createBookEntry);

        return (
            <section>
                <AnchoredHeader level='3'>Relevant books read</AnchoredHeader>

                <AnchoredHeader level='4' id='relevant-content-software-development'>
                    <FontAwesomeIcon icon={faBook} />
                    Software Development
                    <small>
                        <FontAwesomeIcon icon={faCommentDots} flip='horizontal' />
                        {softwareBooks.length} books on programming languages, techniques and tools
                    </small>
                </AnchoredHeader>

                <ul className='books grid-container'>{softwareBooks}</ul>

                <AnchoredHeader level='4' id='relevant-content-entrepreneurship'>
                    <FontAwesomeIcon icon={faBook} />
                    <em>Hard</em> Skills
                    <small>
                        <FontAwesomeIcon icon={faCommentDots} flip='horizontal' />
                        {softSkillsBooks.length} books on leadership, culture, productivity, entrepreneurship and management
                    </small>
                </AnchoredHeader>

                <ul className='books grid-container'>{softSkillsBooks}</ul>
            </section>
        );
    }
}
