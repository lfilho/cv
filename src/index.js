import React from 'react'
import ReactDOM from 'react-dom'

import './css/normalize.css'
import './css/base.css'
import './css/print.css'

import CV from './CV'

import trackPageView from './util/google-analytics'

ReactDOM.render(
    <CV />,
    document.getElementById('root')
)

trackPageView()
