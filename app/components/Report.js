import React, {Component} from 'react';
import Filter from './Filter';

export default class Report extends Component {
    render(){
        <div class="report-container">
            <div class="filter-dropdown">
                <div class="dropdown">
                    <button class="dropbtn">Query Type</button>
                        <div class="dropdown-content">
                            <a href="#">Result Discrepancy</a>
                            <a href="#">Credit Discrepancy</a>
                            <a href="#">Issue of PDC</a>
                            <a href="#">Issue of other documents</a>
                        </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Status</button>
                    <div class="dropdown-content">
                        <a href="#">Resolved</a>
                        <a href="#">Unresolved</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Year</button>
                    <div class="dropdown-content">
                        <a href="#">1st</a>
                        <a href="#">2nd</a>
                        <a href="#">3rd</a>
                        <a href="#">4th</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="filter__button">Save</button>
                </div>
            </div>
        </div>
    }
} 