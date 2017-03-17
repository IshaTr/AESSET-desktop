import React, { Component } from 'react';

export default class SideNav extends Component {
    render() {
        return (
            <div>
                <div className="nav__dashboard">
                    <a href=""><i className="material-icons md-42 Grey500 icons">library_books</i></a>
                </div>
                <div className="nav__resolved-query">
                    <a href=""><i className="material-icons md-42 Grey500 icons">check_circle</i></a>
                </div>
                <div className="nav__unresolved-query">
                    <a href=""><i className="material-icons md-42 Grey500 icons">error</i></a>
                </div>
            </div>
        );
    }
}