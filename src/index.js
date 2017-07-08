import React from 'react'
import ReactDOM from 'react-dom'

import './css/normalize.css'
import './css/base.css'
import './css/print.css'
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
