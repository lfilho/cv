import { Component } from 'react';

import AnchoredHeader from '@lib/anchored-header.jsx';

export default class Noteworthy extends Component {
    render() {
        const entries = this.props.data.map(entry => <li>{entry}</li>);

        return (
            <section>
                <AnchoredHeader level='2'>Other noteworthy achievements</AnchoredHeader>

                <ul className='noteworthy'>{entries}</ul>
            </section>
        );
    }
}
