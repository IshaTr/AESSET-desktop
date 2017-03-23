import React, {Component} from 'react';
import Filter from './Filter';

export default class Report extends Component {
    render() {
        return (
            <div className="report-container">
                <div className="filter-dropdown">
                    <div className="dropdown">
                        <div className="styled-select blue semi-square">
                            <select>
                                <option>Select Query type</option>
                                <option>Result Discrepancy</option>
                                <option>Credit Discrepancy</option>
                                <option>Issue of PDC</option>
                                <option>Issue of other documents</option>
                            </select>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="styled-select blue semi-square">
                            <select>
                                <option>Status</option>
                                <option>Resolved</option>
                                <option>Unresolved</option>
                            </select>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="styled-select blue semi-square">
                            <select>
                                <option>Select Year</option>
                                <option>1st</option>
                                <option>2nd</option>
                                <option>3rd</option>
                                <option>4th</option>
                            </select>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="styled-select blue semi-square">
                            <select>
                                <option>1st</option>
                                <option>2nd</option>
                                <option>3rd</option>
                                <option>4th</option>
                            </select>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="styled-select blue semi-square">
                            <button className="filter__button">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 