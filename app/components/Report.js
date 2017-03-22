import React, {Component} from 'react';
import Filter from './Filter';

export default class Report extends Component {
    render() {
        return (
            <div className="report-container">
                <div className="filter-dropdown">
                    <div className="dropdown">
                        <button className="dropbtn">Query Type</button>
                            <div className="dropdown-content">
                                <a href="#">Result Discrepancy</a>
                                <a href="#">Credit Discrepancy</a>
                                <a href="#">Issue of PDC</a>
                                <a href="#">Issue of other documents</a>
                            </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Status</button>
                        <div className="dropdown-content">
                            <a href="#">Resolved</a>
                            <a href="#">Unresolved</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Year</button>
                        <div className="dropdown-content">
                            <a href="#">1st</a>
                            <a href="#">2nd</a>
                            <a href="#">3rd</a>
                            <a href="#">4th</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="filter__button">Save</button>
                    </div>
                </div>
            </div>
        );
    }
} 