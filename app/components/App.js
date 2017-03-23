import React, { Component } from 'react';
import SideNav from './SideNav';

export default class App extends Component {
    render() {
        return(
            <div>
                <div className="side-nav">
                    <SideNav />
                </div>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.object
};