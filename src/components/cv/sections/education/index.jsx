import React, { Component } from 'react';

import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt as faCalendar, faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faCaretRight, faGraduationCap, faInfo, faUniversity, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AnchoredHeader from '@lib/anchored-header.jsx';

import './style.css';

fontAwesomeLibrary.add(faGraduationCap, faCalendar, faUniversity, faInfo, faCaretRight, faCommentDots, faLanguage);

export default class Education extends Component {
    render() {
        const isVerbose = this.props.isVerbose;
        const education = this.props.data;

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
                        {entry.school}–{entry.location}
                    </span>

                    {date}

                    {entry.info.map((info, i) => (
                        <React.Fragment key={i}>
                            <FontAwesomeIcon icon={faInfo} fixedWidth />
                            <span>{info}</span>
                        </React.Fragment>
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
            otherEducation = (
                <>
                    <AnchoredHeader level='3' id='other-education'>
                        Other
                    </AnchoredHeader>
                    <div>
                        Over {education.relevantCourses.length} courses taken and {education.relevantEvents.length} events
                        attended on software, entrepreneurship, leadership and self development. See all of them at{' '}
                        <a href=' /cv/verbose#relevant-courses'>luiz.dev/cv/verbose</a>.
                    </div>
                </>
            );
        } else {
            const relevantCourses = education.relevantCourses.map((entry, i) => (
                <div className='course icon-grid-container' key={i}>
                    <FontAwesomeIcon icon={faCaretRight} />
                    <span>{entry.title}</span>
                    <br />
                    <small>
                        {entry.school}; {entry.duration}h — {entry.date}
                    </small>
                </div>
            ));

            const relevantEvents = education.relevantEvents.map((entry, i) => (
                <div className='event icon-grid-container' key={i}>
                    <FontAwesomeIcon icon={faCaretRight} />
                    <span>{entry.title}</span>
                    <br />
                    <small>
                        {entry.location}; {entry.date}
                    </small>
                </div>
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

                    <div className='courses grid-container'>{relevantCourses}</div>

                    <AnchoredHeader level='3' id='relevant-events'>
                        Relevant events attended
                        <small>
                            <FontAwesomeIcon icon={faCommentDots} flip='horizontal' />
                            {relevantEvents.length} events on technology and leadership in different cities and countries
                        </small>
                    </AnchoredHeader>

                    <div className='events grid-container'>{relevantEvents}</div>
                </>
            );
        }

        return (
            <section>
                <AnchoredHeader level='2'>Education</AnchoredHeader>
                <div className='academy-courses grid-container'>{academyCourses}</div>

                <AnchoredHeader level='3'>Languages</AnchoredHeader>
                <div className='languages grid-container'>{languages}</div>

                {otherEducation}
            </section>
        );
    }
}
