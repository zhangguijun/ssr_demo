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
import { renderToString, renderToNodeStream } from 'react-dom/server'
import { Provider } from 'mobx-react'
import { renderRoutes } from 'react-router-config'
import RouterConfig from '../client/route/router'
import tpl from './template2'
import { createStoreMap } from '../client/store/index'
let ssrStyles = []
class SSR {
  constructor(props) {
    Object.assign(this, props)
  }
  // 处理脚本
  getScripts = (context) => {
    return `
    <script type="text/javascript">window.__STORE__ = ${JSON.stringify(context)}</script>
    <script src="./index.js"></script>
    `
  }
  // 将处理的css 样式拼成字符
  // 未处理单独的css 文件
  getStyle() {
     const innerStyles = `<style type="text/css">${ssrStyles.reduceRight((a, b) => a + b, '')}</style>`
     return innerStyles
  }
  // 服务端处理css 样式
  addStyles(css) {
    const styles = typeof css._getCss === 'function' ? css._getCss() : ''
    if(!ssrStyles.includes(styles)) {
      ssrStyles.push(css._getCss())
    }
  }
  // 渲染模板
  renderTemplate = props => {
    // 模板引擎 无逻辑只有标签
    return Mustache.render(tpl(props))
  }
  // 服务器端渲染是一种无状态的渲染。基本的思路是，
  // 将<BrowserRouter>替换为无状态的<StaticRouter>。
  //将服务器上接收到的URL传递给路由用来匹配，同时支持传入context特性
  // 静态路由： 值得是在渲染之前就需要配置好路由信息
  // 动态路由： 随着应用渲染来起作用 无需事先配置好
  /**
   *
   * renderToString =》 会返回所有html 字符
   * renderToNodeStream =》 会以文件流的形式返回html 字符串
   */
  renderAPP(ctx, context) {

    const html = renderToString((
      <Provider store={new createStoreMap({ ...context })}>
       
        <StaticRouter location={ctx.request.url} context={{...context, addStyles: this.addStyles}}>
          {renderRoutes(RouterConfig)}
        </StaticRouter>
      </Provider>
    ))
    // const html = renderToNodeStream((
    //   <Provider store={new createStoreMap({ ...context })}>
       
    //     <StaticRouter location={ctx.request.url} context={{...context, addStyles: this.addStyles}}>
    //       {renderRoutes(RouterConfig)}
    //     </StaticRouter>
    //   </Provider>
    // ))
    
    return this.renderTemplate({
      title: 'SSR你值得拥有',
      html,
      scripts: this.getScripts(context),
      css: this.getStyle()
    })
  }
}

export default SSR