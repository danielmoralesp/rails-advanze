// app/javascript/quotes/components/QuotesDisplay.jsx

import React from 'react'
import { Redirect } from 'react-router-dom'
import queryString from 'query-string'
import axios from 'axios'
import QuoteText from './QuoteText'
import QuoteNavigation from './QuoteNavigation'
import QuoteFooter from './QuoteFooter'

class QuotesDisplay extends React.Component {
  constructor() {
    super()

    this.state = {
      quote: {},
      fireRedirect: false
    }
  }

  fetchQuote(id) {
    axios
      .get(`api/quotes/${id}`)
      .then(response => {
        this.setState({ quote: response.data })
      })
      .catch(error => {
        this.setState({ fireRedirect: true })
      })
  }

  setQuoteIdFromQueryString(qs) {
    this.qsParams = queryString.parse(qs)
    if (this.qsParams.quote) {
      // asignar ID de quote de la query string de la URL
      this.quoteId = Number(this.qsParams.quote)
    } else {
      this.quoteId = this.props.startingQuoteId
      // this.quoteId = 1
      // actualizar URL en el navegador para reflejar la quote actual en la query string
      this.props.history.push(`/?quote=${this.quoteId}`)
    }
  }

  componentDidMount() {
    this.setQuoteIdFromQueryString(this.props.location.search)
    this.fetchQuote(this.quoteId)
  }

  componentWillReceiveProps(nextProps) {
    this.setQuoteIdFromQueryString(nextProps.location.search)
    this.fetchQuote(this.quoteId)
  }

  render() {
    const quote = this.state.quote
    const nextQuoteId = quote.next_id
    const previousQuoteId = quote.previous_id

    return (
      <div>
        <div className="quote-container">
          {this.state.fireRedirect && <Redirect to={'/'} />}
          {previousQuoteId && (
            <QuoteNavigation
              direction="previous"
              otherQuoteId={previousQuoteId}
            />
          )}
          <QuoteText quote={this.state.quote} />
          {nextQuoteId && (
            <QuoteNavigation direction="next" otherQuoteId={nextQuoteId} />
          )}
        </div>
        {this.state.quote.id !== parseInt(this.props.startingQuoteId, 10) && (
          <QuoteFooter startingQuoteId={this.props.startingQuoteId} />
        )}
      </div>
      // <div>
      //   {previousQuoteId && (
      //     <Link to={`/?quote=${previousQuoteId}`}>Previous </Link>
      //   )}
      //   {nextQuoteId && <Link to={`/?quote=${nextQuoteId}`}>Next </Link>}
      //   <p>{quote.text}</p>
      //   <p>{quote.author}</p>
      // </div>
    )
  }
}

export default QuotesDisplay
