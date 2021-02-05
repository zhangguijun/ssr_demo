/*
 * @description 客户端入口文件
 * @fileName main.js
 * @author zh8
 * @date 2020/11/23 16:58:31
*/
import React from 'react';
import { hydrate, render } from 'react-dom';
import Router from './route/router'
// import "babel-polyfill";
import renderBaseApp from './lib/renderBaseApp'
import { matchPath } from 'react-router-dom'

let store = window.__STORE__ || {}

// 是 SSR 渲染
if (window.__STORE__) {
    // 匹配路由 
    const currentRoute = Router.find(r => matchPath(document.location.pathname, r)) || Router[0]
    // 获取当前路由组件
    const currentComponent = currentRoute && currentRoute.component;
    // 懒加载
    //当前组件完全加载进来后进行页面渲染
    currentComponent.load().then(() => {
        hydrate(
            <React.Fragment>
                {renderBaseApp(store, Router)}
            </React.Fragment>,
            document.getElementById('app')
        );
    })
} else {
    hydrate(
        <React.Fragment>
            {renderBaseApp(store, Router)}
        </React.Fragment>,
        document.getElementById('app')
    );
}


