/*
 * @description ssr 配置
 * @fileName ssr.js
 * @author zh8
 * @date 2020/11/26 17:28:07
*/
import React from 'react'
import path from 'path'
import fs from 'fs'
import Mustache from 'mustache'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import { Provider } from 'mobx-react'
import { renderRoutes } from 'react-router-config'
import RouterConfig from '../client/router'
import tpl from './template2'
import { createStoreMap } from '../client/store/index'
let ssrStyles = []
class SSR {
  constructor(props) {
    Object.assign(this, props)
  }
  getScripts = (context) => {
    return `
    <script type="text/javascript">window.__STORE__ = ${JSON.stringify(context)}</script>
    <script src="./index.js"></script>
    `
  }
  getStyle() {
     const innerStyles = `<style type="text/css">${ssrStyles.reduceRight((a, b) => a + b, '')}</style>`
     return innerStyles
  }
  addStyles(css) {
    const styles = typeof css._getCss === 'function' ? css._getCss() : ''
    if(!ssrStyles.includes(styles)) {
      ssrStyles.push(css._getCss())
    }
  }
  renderTemplate = props => {
    return Mustache.render(tpl(props))
  }
  renderAPP(ctx, context) {
    const html = renderToString((
      <Provider store={new createStoreMap({ ...context })}>
        <StaticRouter location={ctx.request.url} context={{...context, addStyles: this.addStyles}}>
          {renderRoutes(RouterConfig)}
        </StaticRouter>
      </Provider>
    ))
    return this.renderTemplate({
      title: 'SSR你值得拥有',
      html,
      scripts: this.getScripts(context),
      css: this.getStyle()
    })
  }
}

export default SSR