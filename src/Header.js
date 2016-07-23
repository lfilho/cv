import React, { Component } from 'react'

const BASE_YEAR = 2003
const CURRENT_YEAR = new Date().getFullYear()
const CAREER_TIME = CURRENT_YEAR - BASE_YEAR

class Header extends Component {
    render() {
        const name = this.props.data.name
        const location = this.props.data.location
        const contact = this.props.data.contact
        let introduction = this.props.data.introduction
        introduction[0] = CAREER_TIME + introduction[0]
        introduction = introduction.map((entry, i) => <p key={i}>{entry}</p>)

        // vCard / hCard Microformat:
        return (
            <header id='hcard-Luiz-Gonzaga-dos-Santos-Filho' className='vcard'>
                <h1 className='fn n'>
                    <span className='given-name'>{name.first}</span>&nbsp;
                    <span className='additional-name'>{name.middle}</span>&nbsp;
                    <span className='family-name'>{name.last}</span>
                </h1>

                <main>
                    <aside>
                        <section className='contacts'>
                            <div className='contact adr'>
                                <i className='fa fa-fw fa-map-marker'></i>
                                <span className='locality'>{location.city}</span>,
                                <span className='contry-name'>{location.country}</span>
                            </div>
                            {/* <div className='contact phone'>
                                    <i className='fa fa&#45;fw fa&#45;mobile'></i>
                                    <span>
                                        <a className='tel' href={'tel:+' + phone.raw}>{phone.formatted}</a>
                                    </span>
                                </div>
                            */}
                            <div className='contact website'>
                                <i className='fa fa-fw fa-home'></i>
                                <span>
                                    <a className='url' href={contact.url.href}>{contact.url.display}</a>
                                </span>
                            </div>
                            <div className='contact mail'>
                                <i className='fa fa-fw fa-envelope-o'></i>
                                <span>
                                    <a className='email' href={'mailto:' + contact.email}>{contact.email}</a>
                                </span>
                            </div>
                            <div className='linkedin'>
                                <i className='fa fa-fw fa-linkedin'></i>
                                <a className='url' href='{contact.linkedin.href}'>{contact.linkedin.display}</a>
                            </div>
                            <div className='xing'>
                                <i className='fa fa-fw fa-xing'></i>
                                <a className='url' href='{contact.xing.href}'>{contact.xing.display}</a>
                            </div>
                            <div className='github'>
                                <i className='fa fa-fw fa-github'></i>
                                <a className='url' href='{contact.github.href}'>{contact.github.display}</a>
                            </div>
                        </section>
                    </aside>
                    {introduction}
                </main>
            </header>
        )
    }
}

export default Header
