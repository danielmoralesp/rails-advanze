//app/javascript/quotes/components/QuoteFooter.jsx

import React from 'react'
import { Link } from 'react-reouter-dom'

const QuoteFooter = props => (
  <div id="footer">
    <Link className="btn btn-primary" to={`/?quote=${props.startingQuoteId}`}>
      Back to Beginning
    </Link>
  </div>
)

export default QuoteFooter
