import React from 'react';
const Home = React.lazy(() => import('./views/Home/Home'));
const RedeIcone = React.lazy(() => import('./views/RedeIcone/RedeIcone'));
const Sobre = React.lazy(() => import('./views/Sobre/Sobre'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/redeicone', name: 'Rede Icone', component: RedeIcone },
  { path: '/about', name: 'Sobre', component: Sobre },
 
];

export default routes;
