import React from 'react';
import {
  useRoutes
} from "react-router-dom";
import Home from './Views/Home/index.js';
import Reserve from './Views/Reserves.js/index.js';

const App = () => {
    const routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: 'reserves', element: <Reserve /> },
    ]);

    return routes;
};

export default App;
