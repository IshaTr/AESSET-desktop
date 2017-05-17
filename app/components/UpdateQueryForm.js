import React, { Component } from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';

import Phone from 'react-phone-number-input';

export default class QueryForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data
        };
    }

    handleChange = (e) => {
        this.setState({
            data: {...this.state.data, ...{[e.target.name]: e.target.value}}
        });
    }

    onSubmit = () => {
        const params = this.state.data;
        axios({
            method: 'PATCH',
            url: `http://localhost:8000/queryupdate/${this.state.data.token_id}/`,
            data: params
        })
        .then((response) => {
            this.props.toggleForm(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        const { data } = this.state;
        return (
            <div className="overlay">
                <div className="form-container content-wrapper">
                    <input 
                        className="form__input"
                        placeholder="student"
                        type="text"
                        name="student"
                        value={data.student === "" ? undefined : data.student}
                        onChange={this.handleChange} />

                    <Phone
                    placeholder="Enter phone number"
                    onChange={ phone => this.setState({ phone }) }
                    value={data.phone === "" ? undefined : data.phone}
                     />
                    <input 
                        className="form__input"
                        placeholder="email"
                        type="text"
                        name="email"
                        value={data.email === "" ? undefined : data.email}
                        onChange={this.handleChange} />
                    <input 
                        className="form__input"
                        placeholder="date"
                        type="date"
                        name="date"
                        value={data.date === "" ? undefined : data.date}
                        onChange={this.handleChange} />
                    <select 
                        className="form__input"
                        placeholder="query_type"
                        type="text"
                        name="query_type"
                        value={data.query_type === "" ? undefined : data.query_type} 
                        onChange={this.handleChange}>
                        <option>Query Type</option>
                        <option value="result">Result Discrepancy</option>
                        <option value="credit">Credit Discrepancy</option>
                        <option value="pdc_issue">PDC Issue</option>
                        <option value="other_certificate">Other Document Issue</option>
                    </select>
                    <select 
                        className="form__input"
                        placeholder="department"
                        type="text"
                        name="department"
                        value={data.department === "" ? undefined : data.department}
                        onChange={this.handleChange}>
                        <option>Select Department</option>
                        <option value="CSE">CSE</option>
                        <option value="ME">ME</option>
                        <option value="CE">CE</option>
                        <option value="EEE">EEE</option>
                        <option value="BioTech">Biotech</option>
                    </select>
                    
                    <select 
                        className="form__input"
                        placeholder="year"
                        type="text"
                        name="year"
                        value={data.year === "" ? undefined : data.year} 
                        onChange={this.handleChange}>
                        <option>Select Year</option>
                        <option value="1">1st</option>
                        <option value="2">2nd</option>
                        <option value="3">3rd</option>
                        <option value="4">4th</option>
                    </select>
                    
                    <select 
                        className="form__input"
                        placeholder="status"
                        type="text"
                        name="status"
                        value={data.status === "" ? undefined : data.status} 
                        onChange={this.handleChange}>
                        <option value="resolved">Resolved</option>
                        <option value="unresolved">Unresolved</option>
                        <option value="pending">Pending</option>
                        <option value="reschedule">Reschedule</option>
                        <option value="other_department">Transfer to other Department</option>
                    </select>
                    
                    <input 
                        className="form__input"
                        placeholder="description"
                        type="text"
                        name="description"
                        value={data.description === "" ? undefined : data.description}
                        onChange={this.handleChange} />
                    
                    <button onClick={this.onSubmit} className="button button-next">Update</button>
                </div>
            </div>
        );
    }
}