/*
 * @description 路由表
 * @fileName router.js
 * @author zh8
 * @date 2020/11/23 18:10:21
*/ 
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './views/home';
import List from './views/list';

// export default () => (
//     <Switch>
//         <Route exact path="/" component={ Home }/>
//         <Route exact path="/list" component={ List }/>
//     </Switch>
// )


export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/list/:id',
        component: List,
        exact: true
    }
]