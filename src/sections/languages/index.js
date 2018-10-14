import React, { Component } from 'react'

import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

fontAwesomeLibrary.add(faLanguage)

class Languages extends Component {
    render() {
        const languages = this.props.data.map((entry, i) => (
            <div key={i}>
                <FontAwesomeIcon icon={faLanguage} />
                <span> {entry.name} — {entry.level}</span>
            </div>
        ))

        return (
            <section>
                <h2 id='languages'>Languages</h2>

                <div className='languages grid-container'>
                    {languages}
                </div>
            </section>
        )
    }
}

export default Languages
