import React, { Component } from 'react';
import axios from 'axios';

export default class QueryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: '',
            query_type: '',
            email: '',
            phone: '',
            department: '',
            year: '',
            status: '',
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
            }
        })
    }

    render() {
        return (
            <div className="form-container content-wrapper">
                <input className="form__input" placeholder="System Id" type="text" name="student" value={this.state.student} onChange={this.handleChange} />
                <input className="form__input" placeholder="Phone Number" type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
                <input className="form__input" placeholder="Email" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                <input className="form__input" placeholder="Query Type" type="text" name="query_type" value={this.state.query_type} onChange={this.handleChange} />
                <input className="form__input" placeholder="Department" type="text" name="department" value={this.state.department} onChange={this.handleChange} />
                <input className="form__input" placeholder="Year" type="text" name="year" value={this.state.year} onChange={this.handleChange} />
                <input className="form__input" placeholder="Status" type="text" name="status" value={this.state.status} onChange={this.handleChange} />
                <input className="form__input" placeholder="Description" type="textarea" name="description" value={this.state.description} onChange={this.handleChange} />
                <button onClick={this.onSubmit} className="button button-next">Save</button>
            </div>
        );
    }
}