import React from 'react'

import { BrowserRouter as Router } from 'react-router'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'

import { mergedMessages, selectedLanguage } from '../utils/Locale'

import App from './App'

export default ({ store }) => (
    <Provider store={store}>
        <IntlProvider
            locale={selectedLanguage}
            messages={mergedMessages}
        >
            <Router>
                <App />
            </Router>
        </IntlProvider>
    </Provider>
)