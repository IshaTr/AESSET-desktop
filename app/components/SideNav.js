import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SideNav extends Component {
    render() {
        return (
            <div>
                <div className="nav__add-query">
                    <Link to="/queryform"><i className="material-icons md-42 Grey500 icons">add_circle</i></Link>
                </div>
                <div className="nav__dashboard">
                    <Link to="/"><i className="material-icons md-42 Grey500 icons">library_books</i></Link>
                </div>
                <div className="nav__resolved-query">
                    <Link to="/report"><i className="material-icons md-42 Grey500 icons">check_circle</i></Link>
                </div>
                <div className="nav__unresolved-query">
                    <Link to=""><i className="material-icons md-42 Grey500 icons">clear</i></Link>
                </div>
            </div>
        );
    }
}