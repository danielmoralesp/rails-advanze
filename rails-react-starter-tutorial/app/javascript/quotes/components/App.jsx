// app/javascript/quotes/components/App.jsx

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import QuotesDisplay from './QuotesDisplay'

const App = props => (
  <Router>
    <div>
      <Route path="/" component={QuotesDisplay} />
    </div>
  </Router>
)

// Necesitarás esto en la parte inferior de cada archivo de componente
// para que esté disponible a través de las declaraciones de 'importación' de ES6.

export default App
