import React, { Component } from 'react';
import axios from 'axios';

export default class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/querylist/`)
            .then(response => {
                this.setState({data: response.data});
            })
            .catch(function (errors) {
                console.log(errors);
            });
    }

    renderCards() {
        const { data } = this.state;
        if (data.length) {
            return data.map(card => (
                <div className="content-item" onClick={this.queryForm}>
                    <div className="content__person">
                        <div className="person-image">
                            <div className="image">
                                <img src="./static/image/person-icon-8.png" alt="" />
                            </div>
                        </div>
                        <div className="person-name">
                            <div className="person">
                                <span className="person__name">John Doe</span>
                                <span className="person__ID">{  card.student }</span>
                            </div>
                        </div>                
                    </div>
                    <div className="content__query">
                        <h4>{ card.query_type }</h4>
                        <div className="query__text">{ card.description }</div>
                    </div>
                    <div className="content__footer">
                        <div className="footer__button">
                            <button className="status-button" type="submit">
                                <div className="person-status">
                                    <i className="material-icons md-32 greenA400 icon">check_circle</i>
                                </div>
                            </button>
                        </div>
                        <div className="footer__button">
                            <button className="status-button" type="submit">
                                <div className="person-status">
                                    <i className="material-icons md-32 Orange500 icon">error</i>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            ));
        }

        return null;
    }

    render() {
        return (
            <div>
                {this.renderCards()}
            </div>
        );
    }
}