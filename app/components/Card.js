import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Toggle from 'react-toggle';
import UpdateQueryForm from './UpdateQueryForm';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            formStatus: false
        };
    }


    toggleStatus = (status) => {
        axios({
            method: 'patch',
            url: `http://localhost:8000/queryupdate/${this.state.data.token_id}/`,
            data: {
                status
            }
        })
            .then((response) => {
                const updated = {
                    status: response.data.data.status
                };
                this.setState({
                    data: {...this.state.data, ...updated}
                });
            })
            .catch((error) => {

            });
    }

    toggleForm = () => {
        this.setState({
            formStatus: !this.state.formStatus
        });
    }

    render() {
        let queryDict = {
            result: "Result Discrepency",
            other_certificate: "Other certificate issue",
            pdc_issue: "Issue of PDC",
            credit: "Credit Discrepancy"
        }
            
        const { data, formStatus } = this.state;
        let status = data.status;
        if(status === "unresolved") {
            status = "resolved";
        }
        else {
            status = "unresolved";
        }
        return (
            <div>
            {
                formStatus === true ? 
                (<UpdateQueryForm 
                    data={data} 
                    key={data.token_id} 
                    toggleForm={this.toggleForm} />
                ) : 
                (
                    <div>
                        <div className="content-item">
                            <div className="content__person">
                                <div className="person-name">
                                    <div className="person">
                                        <span className="person-id">
                                            {data.token_id}
                                        </span>
                                    </div>
                                </div>
                                <div className="person-name">
                                    <span className="">
                                        {data.student}
                                    </span>
                                </div>
                                <div className="person-name">
                                    <span className="query-type">
                                        {queryDict[data.query_type]}
                                    </span>
                                </div>
                            </div>
                            <div className="content__footer">
                                <Toggle defaultChecked={(data.status === "resolved" ? true: false)} onClick={() => this.toggleStatus(status)}/>
                            </div>
                            <div className="person-name" onClick={this.toggleForm}>
                                <i className="material-icons">
                                    edit
                                </i>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
        );
    }
}