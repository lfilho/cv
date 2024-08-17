import { Component } from 'react';

import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faGraduationCap, faUniversity, faLanguage, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Books from '@components/cv/sections/books';
import Noteworthy from '@components/cv/sections/noteworthy';
import AnchoredHeader from '@lib/anchored-header.jsx';

import './style.css';

fontAwesomeLibrary.add(faGraduationCap, faUniversity, faCommentDots, faLanguage, faPuzzlePiece);

export default class Education extends Component {
    render() {
        const isVerbose = this.props.isVerbose;
        const education = this.props.data;
        const booksData = this.props.booksData;
        const noteworthyData = this.props.noteworthyData;

        const academyCourses = education.academyCourses.map((entry, i) => {
            const info = isVerbose
                ? entry.info.map((info, i) => (
                    <>
                        <span> {info}</span>
                    </>
                ))
                : null;

            const date = isVerbose ? (
                <>
                    <span>, </span>
                    <span>{entry.date}</span>
                    <span>. </span>
                </>
            ) : null;
            return (
                <li className='academy-course' key={i}>
                    <span>{entry.title}</span>

                    <span className='separator-highlight'> @ </span>
                    <span>
                        {entry.school} – {entry.location}
                    </span>

                    {date}
                    {info}
                </li>
            );
        });

        const languages = this.props.languageData.map((entry, i) => (
            <li key={i}>
                <span>
                    {entry.name} — {entry.level}
                </span>
            </li>
        ));

        let otherEducation;
        const relevantCoursesTotalDuration = Math.round(
            education.relevantCourses.reduce((sum, entry) => sum + entry.duration, 0),
        );

        if (!isVerbose) {
            const bookCount = booksData.software.length + booksData.softSkills.length;
            const courseCount = education.relevantCourses.length;
            const eventCount = education.relevantEvents.length;
            const noteworthyCount = noteworthyData.length;

            otherEducation = (
                <>
                    <AnchoredHeader level='3' id='other-education'>
                        <FontAwesomeIcon icon={faPuzzlePiece} fixedWidth />
                        Other
                    </AnchoredHeader>
                    <div>
                        Over {courseCount} courses and specializations taken, {bookCount} books read, {eventCount} events attended
                        and {noteworthyCount} achievements on software engineering, entrepreneurship, leadership and self growth.
                        See all of them at <a href=' /cv/verbose#relevant-courses'>luiz.dev/cv/verbose</a>.
                    </div>
                </>
            );
        } else {
            const relevantCourses = education.relevantCourses.map((entry, i) => (
                <li className='course' key={i}>
                    <span>{entry.title}</span>
                    <br />
                    <small>
                        {entry.school}; {entry.duration}h — {entry.date}
                    </small>
                </li>
            ));

            const relevantEvents = education.relevantEvents.map((entry, i) => (
                <li className='event' key={i}>
                    <span>{entry.title}</span>
                    <br />
                    <small>
                        {entry.location}; {entry.date}
                    </small>
                </li>
            ));

            otherEducation = (
                <>
                    <AnchoredHeader level='3' id='relevant-courses'>
                        Relevant courses or specializations taken
                        <small>
                            <FontAwesomeIcon icon={faCommentDots} flip='horizontal' />
                            {education.relevantCourses.length} courses on software, entrepreneurship, leadership and self
                            development with a total of ~{relevantCoursesTotalDuration} hours
                        </small>
                    </AnchoredHeader>

                    <ul className='courses grid-container'>{relevantCourses}</ul>

                    <AnchoredHeader level='3' id='relevant-events'>
                        Relevant events attended
                        <small>
                            <FontAwesomeIcon icon={faCommentDots} flip='horizontal' />
                            {relevantEvents.length} events on technology and leadership in different cities and countries
                        </small>
                    </AnchoredHeader>

                    <ul className='events grid-container'>{relevantEvents}</ul>

                    <Books data={booksData} />

                    <Noteworthy data={noteworthyData} />
                </>
            );
        }

        return (
            <>
                <AnchoredHeader level='2' id='education'>
                    Education
                </AnchoredHeader>
                <section className='education flex-container'>
                    <section>
                        <AnchoredHeader level='3' id='degrees'>
                            <FontAwesomeIcon icon={faGraduationCap} fixedWidth />
                            &nbsp;Degrees
                        </AnchoredHeader>
                        <ul className='academy-courses'>{academyCourses}</ul>
                    </section>

                    <section>
                        <AnchoredHeader level='3' id='languages'>
                            <FontAwesomeIcon icon={faLanguage} />
                            Languages
                        </AnchoredHeader>
                        <ul className='languages'>{languages}</ul>
                    </section>
                    <section>{otherEducation}</section>
                </section>
            </>
        );
    }
}
