import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
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
        const { data, formStatus } = this.state;
        const URL = "/updatequery/" + `${data.token_id}`
        return (
            <div>
            {
                formStatus === true ? 
                (<UpdateQueryForm data={data} key={data.token_id} toggleForm={this.toggleForm} />) : 
                (
                    <div onClick={this.toggleForm}>
                        <div className="content-item">
                            <div className="content__person">
                                <div className="person-image">
                                    <div className="image">
                                        <img src="./static/image/person-icon-8.png" alt="" />
                                    </div>
                                </div>
                                <div className="person-name">
                                    <div className="person">
                                        <span className="person__name">{data.token_id}</span>
                                        <div><span className="person__ID">{data.student}</span></div>
                                    </div>
                                </div>                
                            </div>
                            <div className="content__query">
                                <div className="query__text">{ data.description }</div>
                            </div>
                            <div className="content__footer">
                                <div className="footer__button" onClick={() => this.toggleStatus("resolved")}>
                                    <button className="status-button" type="submit">
                                        <div className="person-status">
                                            <i className="material-icons md-32 greenA400 icon">check_circle</i>
                                        </div>
                                    </button>
                                </div>
                                <div className="footer__button" onClick={() => this.toggleStatus("unresolved")}>
                                    <button className="status-button" type="submit">
                                        <div className="person-status">
                                            <i className="material-icons md-32 Orange500 icon">error</i>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
        );
    }
}