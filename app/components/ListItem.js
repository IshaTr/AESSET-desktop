import React, { Component } from 'react';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    render() {
        const { data } = this.state;
        return(    
            <div className="content-item">
                <div className="content__person">
                    <div className="person-name">
                        <div className="person">
                            <span className="person__name">{data.token_id}</span>
                            <div><span className="person__ID">{data.student}</span></div>
                        </div>
                    </div>
                    
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
        );
    }
}