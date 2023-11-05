import React, { Component } from 'react';

import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import AnchoredHeader from '../../../../lib/anchored-header.jsx';

fontAwesomeLibrary.add(faCaretRight);

export default class Noteworthy extends Component {
    render() {
        const entries = this.props.data.map((entry, i) => (
            <React.Fragment key={i}>
                <FontAwesomeIcon icon={faCaretRight} />
                <span>{entry}</span>
            </React.Fragment>
        ));

        return (
            <section>
                <AnchoredHeader level="2">
                    Certifications and Noteworthy achievements
                </AnchoredHeader>

                <div className="noteworthy icon-grid-container">{entries}</div>
            </section>
        );
    }
}
