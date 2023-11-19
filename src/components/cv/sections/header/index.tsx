import type CVData from '@components/cv/cvData.d';
import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faChalkboardTeacher, faEnvelope, faHome, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';

import './style.css';

const BASE_YEAR: 2003 = 2003;
const CURRENT_YEAR: number = new Date().getFullYear();
const CAREER_TIME: number = CURRENT_YEAR - BASE_YEAR;

fontAwesomeLibrary.add(faMapMarkerAlt, faHome, faGithub, faLinkedin, faTwitter, faChalkboardTeacher, faEnvelope);

export default class Header extends Component<{ data: CVData['header'] }> {
    render() {
        const { name, location, contact } = this.props.data;
        const introduction: string[] = this.props.data.introduction;
        introduction[0] = introduction[0].replace(`{{CAREER_TIME}}`, CAREER_TIME.toString());
        const introParagraphs: JSX.Element[] = introduction.map((entry, i) => <p key={i}>{entry}</p>);

        // vCard / hCard Microformat:
        return (
            <header id='hcard-Luiz-Gonzaga-dos-Santos-Filho' className='vcard'>
                <h1 className='fn n'>
                    <span className='p-given-name'>{name.first} </span>
                    <span className='p-additional-name'>{name.middle} </span>
                    <span className='p-family-name'>{name.last}</span>
                    <span className='p-honorific-suffix'>, {name.title}</span>
                </h1>

                <main>
                    <aside>
                        <section className='contacts'>
                            <div className='contact adr'>
                                <FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth />
                                <span className='p-locality'>{location.city}</span>
                                <span>, </span>
                                <span className='p-country-name'>{location.country}</span>
                            </div>
                            {/*
                            <div className='contact phone'>
                                <i className='fa fa-fw fa-mobile'></i>
                                <span>
                                    <a className='p-tel' href={'tel:+' + phone.raw}>{phone.formatted}</a>
                                </span>
                            </div>
                            */}
                            <div className='contact website'>
                                <FontAwesomeIcon icon={faHome} fixedWidth />
                                <span>
                                    <a className='u-url' href={contact.url.href}>
                                        {contact.url.display}
                                    </a>
                                </span>
                            </div>
                            <div className='contact mail'>
                                <FontAwesomeIcon icon={faEnvelope} fixedWidth />
                                <span>
                                    <a className='u-email' href={'mailto:' + contact.email}>
                                        {contact.email}
                                    </a>
                                </span>
                            </div>
                            <div className='linkedin'>
                                <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                                <a className='url' href={contact.linkedin.href}>
                                    {contact.linkedin.display}
                                </a>
                            </div>
                            <div className='twitter'>
                                <FontAwesomeIcon icon={faTwitter} fixedWidth />
                                <a className='url' href={contact.twitter.href}>
                                    {contact.twitter.display}
                                </a>
                            </div>
                            <div className='speakerdeck'>
                                <FontAwesomeIcon icon={faChalkboardTeacher} fixedWidth />
                                <a className='url' href={contact.speakerdeck.href}>
                                    {contact.speakerdeck.display}
                                </a>
                            </div>
                            <div className='github'>
                                <FontAwesomeIcon icon={faGithub} fixedWidth />
                                <a className='url' href={contact.github.href}>
                                    {contact.github.display}
                                </a>
                            </div>
                        </section>
                    </aside>
                    <p>Welcome to my admittedly verbose resume! For a more concise one please visit my LinkedIn profile.</p>
                    {introParagraphs}
                </main>
            </header>
        );
    }
}
