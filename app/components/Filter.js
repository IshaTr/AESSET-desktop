import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
        return (
            <div class="filter-container">
                <button class="filter__button">Query Type</button>
                <div class="container__content">
                    <a href="">Resolved Queries</a>
                    <a href="">Unresolved Queries</a>
                    <a href="">Result Descripancy</a>
                    <a href="">Credit Descripancy</a>
                    <a href="">Issue of PDC</a>
                    <a href="">Issue of other Certificate</a>
                </div>                   
            </div>
            )
    }
}