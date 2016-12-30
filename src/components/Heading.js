import { css } from 'glamor'
import React, { Component } from 'react'

import { fontFace } from '../utils/theme'

const style = css({
  fontFamily: fontFace
})

class Heading extends Component {
  render () {
    return (
      <h1 {...style}>{this.props.children}</h1>
    )
  }
}

export default Heading
