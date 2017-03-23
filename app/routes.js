import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';

import DashBoard from './components/DashBoard';
import QueryForm from './components/QueryForm';
import Report from './components/Report';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={DashBoard} />
        <Route path="queryform" component={QueryForm} />
        <Route path="report" component={Report} />
    </Route>
);
