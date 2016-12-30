import { rehydrate } from 'glamor'
import { renderStaticOptimized } from 'glamor/server'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { Router, RouterContext, match, browserHistory, createMemoryHistory } from 'react-router'
import Routes from './routes'

/* Client render (optional) */
if (typeof document !== 'undefined') {
  rehydrate(window.__glam)

  const root = document.getElementById('root')
  ReactDOM.render(<Router history={browserHistory} routes={Routes} />, root)
}

/* Exported static site renderer */
module.exports = (locals, callback) => {
  const assets = Object.keys(locals.webpackStats.compilation.assets)
  const js = assets.filter(value => value.match(/\.js$/))

  const history = createMemoryHistory()
  const location = history.createLocation(locals.path)

  match({
    routes: Routes,
    location: location
  }, (error, redirectLocation, renderProps) => {
    if (error) console.log(error)

    const { html, css, ids } = renderStaticOptimized(() => {
      return ReactDOMServer.renderToStaticMarkup(<RouterContext {...renderProps} />)
    })

    const result = ReactDOMServer.renderToStaticMarkup(
      <html>
        <head>
          <title>ssr-react | Server Side Rendered React Boilerplate</title>
          <style dangerouslySetInnerHTML={{ __html: css }} />
          <link rel='icon' href='/favicon.ico' />
        </head>
        <body>
          <div id='root' dangerouslySetInnerHTML={{ __html: html }} />
          <script dangerouslySetInnerHTML={{ __html: `window.__glam = ${JSON.stringify(ids)}` }} />
          {js.map((src) => <script src={src} />)}
        </body>
      </html>
    )

    callback(null, result)
  })
}
