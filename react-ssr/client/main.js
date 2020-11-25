/*
 * @description 客户端入口文件
 * @fileName main.js
 * @author zh8
 * @date 2020/11/23 16:58:31
*/
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './router'

import { Provider } from 'mobx-react'

import { createStoreMap } from './store/index'
let store = window.__STORE__ || {}
console.log(store)
render(
    <Provider store={createStoreMap(store)}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('app')
);
