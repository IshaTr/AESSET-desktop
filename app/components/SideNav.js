import React, { Component } from 'react';

export default class SideNav extends Component {
    render() {
        return (
            <div>
                <div className="nav__add-query">
                    <a href="/queryform"><i className="material-icons md-42 Grey500 icons">add_circle</i></a>
                </div>
                <div className="nav__dashboard">
                    <a href="/dashboard"><i className="material-icons md-42 Grey500 icons">library_books</i></a>
                </div>
                <div className="nav__resolved-query">
                    <a href="/report"><i className="material-icons md-42 Grey500 icons">check_circle</i></a>
                </div>
                <div className="nav__unresolved-query">
                    <a href=""><i className="material-icons md-42 Grey500 icons">clear</i></a>
                </div>
            </div>
        );
    }
}