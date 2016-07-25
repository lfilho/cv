import React, { Component } from 'react'

import Header from './sections/header'
import Experiences from './sections/experiences'
import Education from './sections/education'
import Noteworthy from './sections/noteworthy'
import Languages from './sections/languages'
import OffTopic from './sections/offtopic'

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
