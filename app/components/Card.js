import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return (
            <div>
                <div className="content-item" onClick={this.queryForm} key= { this.props.data.token_id }>
                    <div className="content__person">
                        <div className="person-image">
                            <div className="image">
                                <img src="./static/image/person-icon-8.png" alt="" />
                            </div>
                        </div>
                        <div className="person-name">
                            <div className="person">
                                <span className="person__name">John Doe</span>
                                <div><span className="person__ID">{  this.props.data.student }</span></div>
                            </div>
                        </div>                
                    </div>
                    <div className="content__query">
                        <h4>{ this.props.data.query_type }</h4>
                        <div className="query__text">{ this.props.data.description }</div>
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
            </div>
        );
    }
}