import React, { Component } from 'react'

import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

fontAwesomeLibrary.add(faCaretRight)

class Noteworthy extends Component {
    render() {
        const entries = this.props.data.map((entry, i) => (
            <React.Fragment>
                <FontAwesomeIcon icon={faCaretRight} />
                <span>{entry}</span>
            </React.Fragment>
        ))

        return (
            <section>
                <h2 id='certifications-and-achievements'>Certifications and Noteworthy achievements</h2>

                <div className='icon-grid-container'>
                    {entries}
                </div>
            </section>
        )
    }
}

export default Noteworthy
