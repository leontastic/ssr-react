import { css } from 'glamor'

const makeFontFace = (fontFamily, url) => css.fontFace({ fontFamily, src: `url('${url}')` })

export default makeFontFace
