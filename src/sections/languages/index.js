import React, { Component } from 'react'

class Languages extends Component {
    render() {
        const languages = this.props.data.map((entry, i) => (
            <div key={i}>
                <i className='fa fa-language'></i>
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
