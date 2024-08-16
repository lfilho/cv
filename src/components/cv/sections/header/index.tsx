import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import { faChalkboardTeacher, faEnvelope, faHome, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';

import './style.css';

const CAREER_START_YEAR: 2003 = 2003;
const today: Date = new Date();
const currentYear: number = today.getFullYear();
const currentMonth: number = today.getMonth() + 1;
const fractionalYear: number = currentMonth > 6 ? 0.5 : 0;

const CAREER_TENURE: number = currentYear + fractionalYear - CAREER_START_YEAR;

fontAwesomeLibrary.add(faMapMarkerAlt, faHome, faGithub, faLinkedin, faTwitter, faHandshake, faEnvelope);

export default class Header extends Component {
    render() {
        const isVerbose = this.props.isVerbose;
        const { name, location, contact } = this.props.data;
        const introduction = this.props.data.introduction;
        introduction[0] = introduction[0].replace(`{{CAREER_TENURE}}`, `${CAREER_TENURE}`);
        const introParagraphs: JSX.Element[] = introduction.map((entry: string, i: number) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: entry }} />
        ));
        const linkToAlternateVersion = isVerbose ? (
            <p>
                You're looking at the verbose version of my resumé, for the regular version, visit <a href='/cv'>luiz.dev/cv</a>.
            </p>
        ) : (
            <p>
                For a more verbose version of my resumé, visit <a href='/cv/verbose'>luiz.dev/cv/verbose</a>.
            </p>
        );

        // vCard / hCard Microformat:
        return (
            <header id='hcard-Luiz-Gonzaga-dos-Santos-Filho' className='vcard'>
                <h1 className='fn n'>
                    <span className='p-given-name'>{name.first} </span>
                    <span className='p-family-name'>{name.last}</span>
                    <span className='p-honorific-suffix'>, {name.title}</span>
                </h1>
                <aside>
                    <ul className='contacts'>
                        <li className='contact adr'>
                            <FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth />
                            <span className='p-locality'>{location.city}</span>
                            <span>, </span>
                            <span className='p-country-name'>{location.country}</span>
                        </li>
                        {/*
                            <li className='contact phone'>
                                <i className='fa fa-fw fa-mobile'></i>
                                <span>
                                    <a className='p-tel' href={'tel:+' + phone.raw}>{phone.formatted}</a>
                                </span>
                            </li>
                            */}
                        <li className='contact website'>
                            <FontAwesomeIcon icon={faHome} fixedWidth />
                            <span>
                                <a className='u-url' href={contact.url.href}>
                                    {contact.url.display}
                                </a>
                            </span>
                        </li>
                        <li className='contact mail'>
                            <FontAwesomeIcon icon={faEnvelope} fixedWidth />
                            <span>
                                <a className='u-email' href={'mailto:' + contact.email}>
                                    {contact.email}
                                </a>
                            </span>
                        </li>
                        <li className='linkedin'>
                            <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                            <a className='url' href={contact.linkedin.href}>
                                {contact.linkedin.display}
                            </a>
                        </li>
                        <li className='topmate'>
                            <FontAwesomeIcon icon={faHandshake} fixedWidth />
                            <a className='url' href={contact.topmate.href}>
                                {contact.topmate.display}
                            </a>
                        </li>

                        {/* <li className='twitter'>
                                <FontAwesomeIcon icon={faTwitter} fixedWidth />
                                <a className='url' href={contact.twitter.href}>
                                    {contact.twitter.display}
                                </a>
                            </li> */}
                        <li className='speakerdeck'>
                            <FontAwesomeIcon icon={faChalkboardTeacher} fixedWidth />
                            <a className='url' href={contact.speakerdeck.href}>
                                {contact.speakerdeck.display}
                            </a>
                        </li>
                        <li className='github'>
                            <FontAwesomeIcon icon={faGithub} fixedWidth />
                            <a className='url' href={contact.github.href}>
                                {contact.github.display}
                            </a>
                        </li>
                    </ul>
                </aside>

                <main>
                    {introParagraphs}
                    {linkToAlternateVersion}
                </main>
            </header>
        );
    }
}
