import React, {Component} from 'react';
import axios from 'axios';
import ListItem from './ListItem';
import DatePicker from 'react-datepicker';
import moment from 'moment';

let today = new Date().toLocaleDateString('ko-KR').slice(0, 10).replace(/\. /g,"-");

export default class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query_type: undefined,
            status: undefined,
            department: undefined,
            status: undefined,
            date: moment(),
            data: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDateChange = (date) => {
        this.setState({
            date: date
        });
    }

    onFilter = () => {
        const params = {};
        var date = this.state.date;

        Object.keys(this.state).forEach((item) => {
            if (item !== "data" && this.state[item] && item !== "date" ) {
                params[item] = this.state[item];
            }
            else if (item == "date") {
                params["date"] = moment(date,"YYYY-MM-DD").format("YYYY-MM-DD");
            }

        });

        axios.get(`http://localhost:8000/querylist/`,{
            params
        })
            .then(response => {
                this.setState({data: response.data});
            })
            .catch(function (errors) {
                console.log(errors);
            });
    }

    renderResult = () => {
        const { data } = this.state;
        if (data) {
            return data.map(query => (
                <ListItem data={query} key={query.token_id} />
            ));
        }
        return null;
    }

    render() {
        return (
            <div className="report-container content-wrapper">
                <div className="filter-dropdown">
                    <div className="dropdown">
                        <div className="styled-select blue semi-square">
                            <select name="query_type" value={this.state.query_type} onChange={this.handleChange}>
                                <option value={undefined}>Select Query type</option>
                                <option value="result">Result Discrepancy</option>
                                <option value="credit">Credit Discrepancy</option>
                                <option value="pdc_issue">Issue of PDC</option>
                                <option value="other_certificate">Issue of other documents</option>
                            </select>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="styled-select blue semi-square">
                            <select name="status" value={this.state.status} onChange={this.handleChange}>
                                <option value={undefined}>Select Status</option>
                                <option value="resolved">Resolved</option>
                                <option value="unresolved">Unresolved</option>
                                <option value="pending">Pending</option>
                                <option value="reschedule">Reschedule</option>
                                <option value="transfer">Transfer</option>
                            </select>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="styled-select blue semi-square">                    
                            <DatePicker
                            dateFormat="YYYY/MM/DD"
                            selected={this.state.date}
                            onChange={this.handleDateChange} />
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="styled-select blue semi-square">
                            <select name="department" value={this.state.department} onChange={this.handleChange}>
                                <option value={undefined}>Select Department</option>
                                <option value="CSE">CSE</option>
                                <option value="ME">ME</option>
                                <option value="CE">CE</option>
                                <option value="EEE">EEE</option>
                                <option value="ECE">ECE</option>
                                <option value="BioTech">BioTech</option>
                            </select>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="styled-select blue semi-square">
                            <select name="year" value={this.state.year} onChange={this.handleChange}>
                                <option value={undefined}>Select Year</option>
                                <option value="1">1st</option>
                                <option value="2">2nd</option>
                                <option value="3">3rd</option>
                                <option value="4">4th</option>
                            </select>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="styled-select blue semi-square">
                            <button className="filter__button" onClick={this.onFilter}>Save</button>
                        </div>
                    </div>
                </div>
                {this.renderResult()}
            </div>
        );
    }
} 