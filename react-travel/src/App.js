import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import routerConf from './routes/routerConf';

const RenderRoute = (route) => {
  const routeChildren = []
  route.map((item) => routeChildren.push(<Route exact key={item.path} path={item.path} component={item.component} exact></Route>))
  return routeChildren
}

function App() {
  return (
    <Router>
      {
        RenderRoute(routerConf)
      }
    </Router>
  );
}

export default App;
