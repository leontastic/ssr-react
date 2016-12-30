import makeFontFace from '../../../utils/makeFontFace'

import SourceSansProBlack from './SourceSansPro-Black.woff2'
import SourceSansProBlackItalic from './SourceSansPro-BlackItalic.woff2'
import SourceSansProBold from './SourceSansPro-Bold.woff2'
import SourceSansProBoldItalic from './SourceSansPro-BoldItalic.woff2'
import SourceSansProExtraLight from './SourceSansPro-ExtraLight.woff2'
import SourceSansProExtraLightItalic from './SourceSansPro-ExtraLightItalic.woff2'
import SourceSansProLight from './SourceSansPro-Light.woff2'
import SourceSansProLightItalic from './SourceSansPro-LightItalic.woff2'
import SourceSansProRegular from './SourceSansPro-Regular.woff2'
import SourceSansProItalic from './SourceSansPro-Italic.woff2'
import SourceSansProSemibold from './SourceSansPro-Semibold.woff2'
import SourceSansProSemiboldItalic from './SourceSansPro-SemiboldItalic.woff2'

export default {
  regular: {
    200: makeFontFace('SourceSansProExtraLight', SourceSansProExtraLight),
    300: makeFontFace('SourceSansProLight', SourceSansProLight),
    400: makeFontFace('SourceSansProRegular', SourceSansProRegular),
    600: makeFontFace('SourceSansProSemibold', SourceSansProSemibold),
    700: makeFontFace('SourceSansProBold', SourceSansProBold),
    900: makeFontFace('SourceSansProBlack', SourceSansProBlack)
  },
  italic: {
    200: makeFontFace('SourceSansProExtraLightItalic', SourceSansProExtraLightItalic),
    300: makeFontFace('SourceSansProLightItalic', SourceSansProLightItalic),
    400: makeFontFace('SourceSansProItalic', SourceSansProItalic),
    600: makeFontFace('SourceSansProSemiboldItalic', SourceSansProSemiboldItalic),
    700: makeFontFace('SourceSansProBoldItalic', SourceSansProBoldItalic),
    900: makeFontFace('SourceSansProBlackItalic', SourceSansProBlackItalic)
  }
}
