import React, { Component } from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';

export default class QueryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: '',
            query_type: undefined,
            email: '',
            phone: '',
            department: '',
            year: '',
            date: '',
            time: '',
            status: '',
            token_id: '',
            description: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = () => {
        axios({
            method: 'post',
            url: `http://localhost:8000/query/`,
            data: {
                student : this.state.student,
                query_type: this.state.query_type,
                email: this.state.email,
                phone: this.state.phone,
                department: this.state.department,
                year: this.state.year,
                date: this.state.date,
                time: this.state.time,
                status: this.state.status,
                token_id: this.state.token_id,
                description: this.state.description
            }
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
        hashHistory.push('/');
    }

    render() {
        return (
            <div className="form-container content-wrapper">
                <input className="form__input" placeholder="System Id" type="text" name="student" value={this.state.student} onChange={this.handleChange} />
                <br />
                <input className="form__input" placeholder="Phone Number" type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
                <br />
                <input className="form__input" placeholder="Email" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                <br />
                <input className="form__input" placeholder="Date" type="date" name="date" value={this.state.date} onChange={this.handleChange} />
                <br />
                <input className="form__input" placeholder="Time" type="time" name="time" value={this.state.time} onChange={this.handleChange} />
                <br />
                <select className="form__input" placeholder="Query Type" type="text" name="query_type" value={this.state.query_type} onChange={this.handleChange}>
                    <option>Query Type</option>
                    <option value="result">Result Discrepancy</option>
                    <option value="credit">Credit Discrepancy</option>
                    <option value="pdc_issue">PDC Issue</option>
                    <option value="other_certificate">Other Document Issue</option>
                </select>
                <br />
                <select value="" className="form__input" placeholder="Department" type="text" name="department" value={this.state.department} onChange={this.handleChange}>
                    <option>Select Department</option>
                    <option value="CSE">CSE</option>
                    <option value="ME">ME</option>
                    <option value="CE">CE</option>
                    <option value="EEE">EEE</option>
                    <option value="BioTech">Biotech</option>
                </select>
                <br />
                <select value="" className="form__input" placeholder="Year" type="text" name="year" value={this.state.year} onChange={this.handleChange}>
                    <option>Select Year</option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                </select>
                <br />
                <select value="" className="form__input" placeholder="Status" type="text" name="status" value={this.state.status} onChange={this.handleChange}>
                    <option value="resolved">Resolved</option>
                    <option value="unresolved">Unresolved</option>
                    <option value="pending">Pending</option>
                    <option value="reschedule">Reschedule</option>
                    <option value="other_department">Transfer to other Department</option>
                </select>
                <br />
                <input className="form__input" placeholder="Token ID" type="text" name="token_id" value={this.state.token_id} onChange={this.handleChange} />
                <br />
                <input value="" className="form__input" placeholder="Description" type="textarea" name="description" value={this.state.description} onChange={this.handleChange} />
                <br />
                <button onClick={this.onSubmit} className="button button-next">Save</button>
            </div>
            
        );
    }
}