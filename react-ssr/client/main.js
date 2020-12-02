/*
 * @description 客户端入口文件
 * @fileName main.js
 * @author zh8
 * @date 2020/11/23 16:58:31
*/
import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './router'
import { renderRoutes } from 'react-router-config'
// import "babel-polyfill";
import { Provider } from 'mobx-react'
import renderBaseApp from './lib/renderBaseApp'

let store = window.__STORE__ || {}
hydrate(
    <React.Fragment>
        {renderBaseApp(store)}
    </React.Fragment>,
    document.getElementById('app')
);
