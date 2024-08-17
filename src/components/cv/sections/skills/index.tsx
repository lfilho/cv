import { Component } from 'react';

import AnchoredHeader from '@lib/anchored-header.jsx';

import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core';
fontAwesomeLibrary.add(faHashtag);

export default class Skills extends Component {
    render() {
        const keywords = this.props.data.map((entry, i) => (
            <>
                <span className='keyword' key={i}>
                    {entry}
                    <span className='hidden-comma'>, </span>
                </span>
            </>
        ));

        return (
            <section>
                <AnchoredHeader level='2' id='skills'>
                    <FontAwesomeIcon icon={faHashtag} fixedWidth />
                    Skills and Competencies
                </AnchoredHeader>
                {keywords}
            </section>
        );
    }
}
