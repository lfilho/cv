import React, { Component } from 'react'

import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

fontAwesomeLibrary.add(faLink)

function sanitizeAnchors(text) {
    return text.trim().toLowerCase().replace(/\s/g, '-')
}

export default class AnchoredHeader extends Component {
    render() {
        const Header = `h${this.props.level}`;
        const id = this.props.id || sanitizeAnchors(this.props.children)
        const href = `#${id}`
        const anchor = (
            <a class='header-link' href={href}>
                <FontAwesomeIcon icon={faLink} fixedWidth />
            </a>
        )
        return (
            <Header id={id}>
                {anchor}
                {this.props.children}
            </Header>
        )
    }
}
