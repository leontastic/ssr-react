import { css } from 'glamor'
import React, { Component } from 'react'

import { baseFontSize } from './utils/theme'

css.global('*', {
  boxSizing: 'border-box'
})

css.global('html, body', {
  margin: 0,
  width: '100%'
})

css.global('html', {
  fontSize: baseFontSize
})

class App extends Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App
