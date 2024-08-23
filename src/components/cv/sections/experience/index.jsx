import { Component } from 'react';

import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBuilding, faCalendarAlt as faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import { faLaptopCode, faMicrophone, faHashtag, faTicketAlt, faUser } from '@fortawesome/free-solid-svg-icons';

import AnchoredHeader from '@lib/anchored-header.jsx';
import parseExperienceDescription from '@lib/array-to-html-list';

import './style.css';

fontAwesomeLibrary.add(faHashtag, faUser, faBuilding, faClock, faTicketAlt, faCalendar, faMicrophone, faLaptopCode);

export default class Experience extends Component {
    render() {
        const isVerbose = this.props.isVerbose;
        const softwareEngineeringXps = this.props.data.softwareEngineering.map((entry, i) => {
            const keywords = entry.keywords.map((entry, i) => (
                <>
                    <span className='keyword' key={i}>
                        <span className='hidden-comma'>, </span>
                        {entry}
                    </span>
                </>
            ));
            const keywordsSection = isVerbose && (
                <div className='job-keywords'>
                    <FontAwesomeIcon icon={faHashtag} fixedWidth />
                    <span>{keywords}</span>
                </div>
            );

            const positions = entry.positions.join('<span class="separator-highlight"> ➜ </span>');
            let description = isVerbose
                ? entry.description
                : entry.shortDescription.length > 0
                    ? entry.shortDescription
                    : entry.description;
            description = parseExperienceDescription(description);

            return (
                <div className='xp' key={i}>
                    <h3 className='grid-container'>
                        <div className='job-data'>
                            <FontAwesomeIcon icon={faLaptopCode} fixedWidth />
                            <span dangerouslySetInnerHTML={{ __html: positions }} />
                            <span className='separator-highlight'> @&nbsp;</span>
                            <span className='org'>{entry.company}</span>
                        </div>
                        <div className='period'>
                            <FontAwesomeIcon icon={faClock} fixedWidth />
                            <span>
                                {entry.startDate} – {entry.endDate}
                            </span>
                        </div>
                    </h3>
                    <article>
                        <div className='description'>{description}</div>
                    </article>
                    {keywordsSection}
                </div>
            );
        });

        let instructorOrSpeakerXps, volunteerXps, otherXps;
        if (!isVerbose) {
            instructorOrSpeakerXps = this.props.data.instructorOrSpeaker.length;
            volunteerXps = this.props.data.volunteer.length;

            otherXps = (
                <>
                    <AnchoredHeader level='3' id='other-xps'>
                        Other
                    </AnchoredHeader>

                    <div>
                        Over {instructorOrSpeakerXps} experiences as an instructor or speaker and {volunteerXps} volunteer
                        positions around leadership, web development, community and the arts. See all of them at{' '}
                        <a href='/cv/verbose#speaking-or-teaching'>luiz.dev/cv/verbose</a>.
                    </div>
                </>
            );
        } else {
            instructorOrSpeakerXps = this.props.data.instructorOrSpeaker.map((entry, i) => {
                let titles = [].concat(entry.title).map((entry, i) => (
                    <div className='title icon-grid-container' key={i}>
                        <FontAwesomeIcon icon={faMicrophone} fixedWidth />
                        <span>{entry}</span>
                    </div>
                ));

                return (
                    <article className='talk' key={i}>
                        <div className='period icon-grid-container'>
                            <FontAwesomeIcon icon={faCalendar} fixedWidth />
                            <span>
                                {entry.date} – {entry.location}
                            </span>
                        </div>
                        <div className='event icon-grid-container'>
                            <FontAwesomeIcon icon={faTicketAlt} fixedWidth />
                            <span>{entry.venue}</span>
                        </div>
                        {titles}
                    </article>
                );
            });

            volunteerXps = this.props.data.volunteer.map((entry, i) => {
                const keywords = entry.keywords.map((entry, i) => (
                    <>
                        <span className='keyword' key={i}>
                            <span className='hidden-comma'>, </span>
                            {entry}
                        </span>
                    </>
                ));

                return (
                    <div className='volunteer xp' key={i}>
                        <div className='job-data'>
                            <div className='period icon-grid-container'>
                                <FontAwesomeIcon icon={faClock} fixedWidth />
                                <span>
                                    {entry.date} – {entry.location}
                                </span>
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
                            <FontAwesomeIcon icon={faHashtag} fixedWidth />
                            <div>{keywords}</div>
                        </div>
                    </div>
                );
            });

            otherXps = (
                <>
                    <AnchoredHeader level='3' id='speaking-or-teaching'>
                        As a speaker or instructor
                    </AnchoredHeader>

                    <div className='grid-container'>{instructorOrSpeakerXps}</div>

                    <AnchoredHeader level='3'>Volunteer Work</AnchoredHeader>

                    <p className='summary'>
                        Volunteer work ignited in me the caring for people: be them the ones we are the doing the work for, or my
                        colleagues. It also taught me to value and dedicate my time for something else than money, for something
                        that would do (or be) good for someone besides myself.
                    </p>

                    <p className='summary'>
                        You can check my open source contributions at{' '}
                        <span className='org'>
                            <a href='https://github.com/lfilho'>github.com/lfilho</a>
                        </span>
                        .
                    </p>

                    <div className='grid-container'>{volunteerXps}</div>
                </>
            );
        }

        return (
            <section>
                <AnchoredHeader level='2' id='Experience'>
                    Experience
                </AnchoredHeader>

                <div>{softwareEngineeringXps}</div>

                {otherXps}
            </section>
        );
    }
}
