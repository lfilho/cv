import React from 'react'
import ReactDOM from 'react-dom'

import './normalize.css'
import './base.css'
import './print.css'
import './fonts/font-awesome.min.css'

import CV from './CV'

import linkifyAnchors from './util/linkify-anchors'
import trackPageView from './util/google-analytics'

ReactDOM.render(
    <CV />,
    document.getElementById('root'),
    linkifyAnchors
);

trackPageView()
