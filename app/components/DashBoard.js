import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';

let today = new Date().toLocaleDateString('ko-KR').slice(0, 10).replace(/\. /g,"-");

export default class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/querylistfrom/?date=${today}`)
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
                <Card data={card} key={card.token_id} />
            ));
        }

        return null;
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="heading-container">
                    <div className="person-name">
                        <span>Token ID</span>
                    </div>
                    <div className="person-name">
                        <span>System ID</span>
                    </div>
                    <div className="person-name">
                        <span>Query Type</span>
                    </div>
                    <div className="person-name">
                        <span className="span-status">Status</span>
                    </div>
                </div>
                <div>
                    {this.renderCards()}
                </div>
            </div>
        );
    }

} 