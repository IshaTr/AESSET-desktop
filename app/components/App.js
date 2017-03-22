import React, { Component } from 'react';
import SideNav from './SideNav';
import DashBoard from './DashBoard';
import Report from './Report';

export default class App extends Component {
    render() {
        return(
            <div>
                <div className="side-nav">
                    <SideNav />
                </div>
                <div className="content-wrapper">
                    <Report />
                </div>
            </div>
        );
    }
}