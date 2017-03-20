import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import Filter from './Filter';

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
                <Card data={card} key={card.token_id} />
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