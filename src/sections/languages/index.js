import React, { Component } from 'react'

class Languages extends Component {
    render() {
        const languages = this.props.data.map((entry, i) => (
            <li key={i}>
                <i className='fa-li fa fa-language'></i>
                &nbsp;{entry.name} &mdash; {entry.level}
            </li>
        ))

        return (
            <section>
                <h2 id='languages'>Languages</h2>

                <ul className='languages fa-ul flex-container'>
                    {languages}
                </ul>
            </section>
        )
    }
}

export default Languages
