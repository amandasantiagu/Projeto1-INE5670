import React from 'react';
import {
  useRoutes
} from "react-router-dom";
import Home from './Views/HomePage/HomePage';
import Parks from './Views/ParksPage.js';

const App = () => {
    const routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: 'reserves', element: <Parks /> },
    ]);

    return routes;
};

export default App;
