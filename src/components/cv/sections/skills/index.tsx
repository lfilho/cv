import { Component } from 'react';

import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
fontAwesomeLibrary.add(faHashtag);

import AnchoredHeader from '@lib/anchored-header.jsx';

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
                    Skills
                    <small>Overall skills along my career in alphabetical order</small>
                </AnchoredHeader>
                {keywords}
            </section>
        );
    }
}
