import { Component } from 'react';

import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt as faCalendar, faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faGraduationCap, faInfo, faUniversity, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Books from '@components/cv/sections/books';
import Noteworthy from '@components/cv/sections/noteworthy';
import AnchoredHeader from '@lib/anchored-header.jsx';

import './style.css';

fontAwesomeLibrary.add(faGraduationCap, faCalendar, faUniversity, faInfo, faCommentDots, faLanguage);

export default class Education extends Component {
    render() {
        const isVerbose = this.props.isVerbose;
        const education = this.props.data;
        const booksData = this.props.booksData;
        const noteworthyData = this.props.noteworthyData;

        const academyCourses = education.academyCourses.map((entry, i) => {
            const date = isVerbose ? (
                <>
                    <FontAwesomeIcon icon={faCalendar} fixedWidth />
                    <span>{entry.date}</span>
                </>
            ) : null;
            return (
                <div className='academy-course icon-grid-container' key={i}>
                    <FontAwesomeIcon icon={faGraduationCap} fixedWidth />
                    <span>{entry.title}</span>

                    <FontAwesomeIcon icon={faUniversity} fixedWidth />
                    <span>
                        {entry.school} – {entry.location}
                    </span>

                    {date}

                    {entry.info.map((info, i) => (
                        <>
                            <FontAwesomeIcon icon={faInfo} fixedWidth />
                            <span>{info}</span>
                        </>
                    ))}
                </div>
            );
        });

        const languages = this.props.languageData.map((entry, i) => (
            <div key={i}>
                <FontAwesomeIcon icon={faLanguage} />
                <span>
                    {entry.name} — {entry.level}
                </span>
            </div>
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
                <section>
                    <AnchoredHeader level='2'>Education</AnchoredHeader>
                    <div className='academy-courses grid-container'>{academyCourses}</div>
                </section>

                <section>
                    <AnchoredHeader level='3'>Languages</AnchoredHeader>
                    <div className='languages grid-container'>{languages}</div>
                </section>

                <section>{otherEducation}</section>
            </>
        );
    }
}
