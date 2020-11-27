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
class SSR {
  constructor(props) {
    Object.assign(this, props)
  }
  getScripts = (context) => {
    return `
    <script type="text/javascript">window.__STORE__ = ${JSON.stringify(context)}</script>
    <script src="http://localhost:8001/index.js"></script>
    `
  }
  renderTemplate = props => {
    return Mustache.render(tpl(props))
  }
  renderAPP(ctx, context) {
    const html = renderToString((
      <Provider store={new createStoreMap({ ...context })}>
        <StaticRouter location={ctx.request.url} context={context}>
          {renderRoutes(RouterConfig)}
        </StaticRouter>
      </Provider>
    ))
    return this.renderTemplate({
      title: 'SSR你值得拥有',
      html,
      scripts: this.getScripts(context)
    })
  }
}

module.exports = SSR