// app/javascript/quotes/components/App.jsx

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import QuotesDisplay from './QuotesDisplay'

const App = props => (
  <Router startingQuoteId={props.startingQuoteId}>
    <div>
      <Route
        path="/"
        startingQuoteId={props.startingQuoteId}
        render={routeProps => <QuotesDisplay {...props} {...routeProps} />}
      />
    </div>
  </Router>
)

// Necesitarás esto en la parte inferior de cada archivo de componente
// para que esté disponible a través de las declaraciones de 'importación' de ES6.

export default App
