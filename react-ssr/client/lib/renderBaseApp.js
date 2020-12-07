/*
 * @description 渲染基础
 * @fileName renderBaseApp.js
 * @author zh8
 * @date 2020/11/26 17:32:18
*/

import React from 'react';
import { renderRoutes } from 'react-router-config'
import { Provider } from 'mobx-react'
import { createStoreMap } from '../store/index'
import { BrowserRouter } from 'react-router-dom';
export const renderBaseApp = (context, router) => {

  return (
    <Provider store={createStoreMap(context, router)}>
      <BrowserRouter>
        {renderRoutes(router)}
      </BrowserRouter>
    </Provider>
  )

}
export default renderBaseApp;