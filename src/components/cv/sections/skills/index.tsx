import { Component } from 'react';

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
