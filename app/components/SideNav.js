import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SideNav extends Component {
    render() {
        return (
            <div>
                <div className="sharda-logo">
                    <img src="./static/image/sharda.gif"/>
                </div>
                <div className="nav__add-query">
                    <Link to="/queryform">
                        <div className="nav-icon">
                            <i className="material-icons md-18 Grey500 icons">
                                add_circle
                            </i>
                        </div>
                        <div className="icon-name">
                            <span>Add Query</span>
                        </div>
                    </Link>
                </div>
                <div className="nav__dashboard">
                    <Link to="/">
                        <div className="nav-icon">
                            <i className="material-icons md-18 Grey500 icons">
                                library_books
                            </i>
                        </div>
                        <div className="icon-name">
                            <span>Dashboard</span>
                        </div>
                    </Link>
                </div>
                <div className="nav__resolved-query">
                    <Link to="/report">
                        <div className="nav-icon">
                            <i className="material-icons md-18 Grey500 icons">
                                check_circle
                            </i>
                        </div>
                        <div className="icon-name">
                            <span>Report</span>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}