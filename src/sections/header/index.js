import React, { Component } from 'react'
import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faChalkboardTeacher, faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

import './style.css'

const BASE_YEAR = 2003
const CURRENT_YEAR = new Date().getFullYear()
const CAREER_TIME = CURRENT_YEAR - BASE_YEAR

fontAwesomeLibrary.add(
    faMapMarkerAlt,
    faHome,
    faGithub,
    faLinkedin,
    faTwitter,
    faChalkboardTeacher,
    faEnvelope
)

export default class Header extends Component {
    render() {
        const name = this.props.data.name
        const location = this.props.data.location
        const contact = this.props.data.contact
        let introduction = this.props.data.introduction
        introduction[0] = introduction[0].replace(`{{CAREER_TIME}}`, CAREER_TIME)
        introduction = introduction.map((entry, i) => <p key={i}>{entry}</p>)

        // vCard / hCard Microformat:
        return (
            <header id='hcard-Luiz-Gonzaga-dos-Santos-Filho' className='vcard'>
                <h1 className='fn n'>
                    <span className='given-name'>{name.first} </span>
                    <span className='additional-name'>{name.middle} </span>
                    <span className='family-name'>{name.last}</span>
                </h1>

                <main>
                    <aside>
                        <section className='contacts'>
                            <div className='contact adr'>
                                <FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth />
                                <span className='locality'>{location.city}</span>
                                <span>, </span>
                                <span className='country-name'>{location.country}</span>
                            </div>
                            {/*
                            <div className='contact phone'>
                                <i className='fa fa-fw fa-mobile'></i>
                                <span>
                                    <a className='tel' href={'tel:+' + phone.raw}>{phone.formatted}</a>
                                </span>
                            </div>
                            */}
                            <div className='contact website'>
                                <FontAwesomeIcon icon={faHome} fixedWidth />
                                <span>
                                    <a className='url' href={contact.url.href}>{contact.url.display}</a>
                                </span>
                            </div>
                            <div className='contact mail'>
                                <FontAwesomeIcon icon={faEnvelope} fixedWidth />
                                <span>
                                    <a className='email' href={'mailto:' + contact.email}>{contact.email}</a>
                                </span>
                            </div>
                            <div className='linkedin'>
                                <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                                <a className='url' href={contact.linkedin.href}>{contact.linkedin.display}</a>
                            </div>
                            <div className='twitter'>
                                <FontAwesomeIcon icon={faTwitter} fixedWidth />
                                <a className='url' href={contact.twitter.href}>{contact.twitter.display}</a>
                            </div>
                            <div className='speakerdeck'>
                                <FontAwesomeIcon icon={faChalkboardTeacher} fixedWidth />
                                <a className='url' href={contact.speakerdeck.href}>{contact.speakerdeck.display}</a>
                            </div>
                            <div className='github'>
                                <FontAwesomeIcon icon={faGithub} fixedWidth />
                                <a className='url' href={contact.github.href}>{contact.github.display}</a>
                            </div>
                        </section>
                    </aside>
                    {introduction}
                </main>
            </header>
        )
    }
}
