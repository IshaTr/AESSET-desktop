import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import routes from './routes';

render(
    <Router history={hashHistory} routes={routes} />,
    document.querySelector('.content'));
