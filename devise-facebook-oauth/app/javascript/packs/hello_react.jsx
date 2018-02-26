// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Alert } from 'react-bootstrap'

const Hello = props => {
  return (
    <div>
      <div>Hello {props.name}!</div>
      <Alert bsStyle="warning">
        <strong>Holy guacamole!</strong> Best check yo self, you're not looking
        too good.
      </Alert>;
    </div>
  )
}

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div'))
  )
})
