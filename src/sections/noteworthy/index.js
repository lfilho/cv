import React, { Component } from 'react'

class Noteworthy extends Component {
    render() {
        const entries = this.props.data.map((entry, i) => (
            <li key={i}>
                <i className='fa-li fa fa-caret-right'></i>
                {entry}
            </li>
        ))

        return (
            <section>
                <h2 id='certifications-and-achievements'>Certifications and Noteworthy achievements</h2>

                <ul className='fa-ul'>
                    {entries}
                </ul>
            </section>
        )
    }
}

export default Noteworthy