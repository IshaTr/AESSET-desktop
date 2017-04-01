import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SideNav extends Component {
    render() {
        return (
            <div>
                <div className="nav__add-query">
                    <Link to="/queryform">
                        <i className="material-icons md-18 Grey500 icons">
                            add_circle
                        </i>
                        <span>Add query</span>
                    </Link>
                </div>
                <div className="nav__dashboard">
                    <Link to="/">
                        <i className="material-icons md-18 Grey500 icons">
                            library_books
                        </i>
                        <span>Report</span>
                    </Link>
                </div>
                <div className="nav__resolved-query">
                    <Link to="/report">
                        <i className="material-icons md-18 Grey500 icons">
                            check_circle
                        </i>
                        <span>Filter</span>
                    </Link>
                </div>
                <div className="nav__unresolved-query">
                    <Link to="">
                        <i className="material-icons md-18 Grey500 icons">
                            clear
                        </i>
                        <span></span>
                    </Link>
                </div>
            </div>
        );
    }
}