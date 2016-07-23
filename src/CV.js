import React, { Component } from 'react'

import Header from './Header'
import Experiences from './Experiences'
import Education from './Education'
import Noteworthy from './Noteworthy'
import Languages from './Languages'
import OffTopic from './OffTopic'

import CVData from './cv-data'

class CV extends Component {
    render() {
        return (
            <div id="page-wrapper">
                <Header data={CVData.header} />
                <Experiences data={CVData.experiences} />
                <Education data={CVData.education} />
                <Noteworthy data={CVData.noteworthy} />
                <Languages data={CVData.languages} />
                <OffTopic data={CVData.offTopic} />
            </div>
        )
    }
}

export default CV
