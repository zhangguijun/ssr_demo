/*
 * @description 路由表
 * @fileName router.js
 * @author zh8
 * @date 2020/11/23 18:10:21
*/ 
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Loadable from 'loadable-components';

const Loading = () => {
  return ''
};

// import Home from './views/home';
// import List from './views/list';
const Home = Loadable(() => import('../views/home'),{
    LoadingComponent: (props) => <Loading />,
});

const List = Loadable(() => import('../views/list'), {
    LoadingComponent: (props) => <Loading />,
})

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
        path: '/list',
        component: List,
    }
]