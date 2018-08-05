import React, { Component } from 'react'

class Noteworthy extends Component {
    render() {
        const entries = this.props.data.map((entry, i) => (
            <React.Fragment>
                <i className='fa fa-caret-right'></i>
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
