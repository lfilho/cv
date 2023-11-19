import { Component } from 'react';

import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AnchoredHeader from '@lib/anchored-header.jsx';

fontAwesomeLibrary.add(faLanguage);

export default class Languages extends Component {
    render() {
        const languages = this.props.data.map((entry, i) => (
            <div key={i}>
                <FontAwesomeIcon icon={faLanguage} />
                <span>
                    {' '}
                    {entry.name} — {entry.level}
                </span>
            </div>
        ));

        return (
            <section>
                <AnchoredHeader level='2'>Languages</AnchoredHeader>

                <div className='languages grid-container'>{languages}</div>
            </section>
        );
    }
}
