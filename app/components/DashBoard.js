import React, { Component } from 'react';
import axios from 'axios';

export default class DashBoard extends Component {
    getQueries = () => {
        axios.get(`http://localhost:8000/querylist/`)
            .then(response = () =>  {
                console.log(response.data);
            })
            .catch(function (errors) {
                console.log(errors);
            });
    }
    render() {
        return (
<<<<<<< HEAD
            <div onLoad={this.getQueries}>
                <div className="content-item">
=======
            <div>
            
                <div className="content-item" onClick={this.queryForm}>
>>>>>>> 707b8e1537751a59a3c67bb5ea0bc928f88830cd
                    <div className="content__person">
                        <div className="person-image">
                            <div className="image">
                                <img src="./static/image/person-icon-8.png" alt="" />
                            </div>
                        </div>
                        <div className="person-name">
                            <div className="person">
                                <span className="person__name">John Doe</span>
                                <span className="person__ID">ABC</span>
                            </div>
                        </div>                
                    </div>
                    <div className="content__query">
                        <h4>Query Type</h4>
                        <div className="query__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, temporibus.</div>
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
                <div className="content-item">
                    <div className="content__person">
                        <div className="person-image">
                            <div className="image">
                                <img src="./static/image/person-icon-8.png" alt="" />
                            </div>
                        </div>
                        <div className="person-name">
                            <div className="person">
                                <span className="person__name">John Doe</span>
                                <span className="person__ID">System ID</span>
                            </div>
                        </div>                
                    </div>
                    <div className="content__query">
                        <h4>Query Type</h4>
                        <div className="query__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, temporibus.</div>
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
                <div className="content-item">
                    <div className="content__person">
                        <div className="person-image">
                            <div className="image">
                                <img src="./static/image/person-icon-8.png" alt="" />
                            </div>
                        </div>
                        <div className="person-name">
                            <div className="person">
                                <span className="person__name">John Doe</span>
                                <span className="person__ID">System ID</span>
                            </div>
                        </div>                
                    </div>
                    <div className="content__query">
                        <h4>Query Type</h4>
                        <div className="query__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, temporibus.</div>
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
                <div className="content-item">
                    <div className="content__person">
                        <div className="person-image">
                            <div className="image">
                                <img src="./static/image/person-icon-8.png" alt="" />
                            </div>
                        </div>
                        <div className="person-name">
                            <div className="person">
                                <span className="person__name">John Doe</span>
                                <span className="person__ID">System ID</span>
                            </div>
                        </div>                
                    </div>
                    <div className="content__query">
                        <h4>Query Type</h4>
                        <div className="query__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, temporibus.</div>
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
                <div className="content-item">
                    <div className="content__person">
                        <div className="person-image">
                            <div className="image">
                                <img src="./static/image/person-icon-8.png" alt="" />
                            </div>
                        </div>
                        <div className="person-name">
                            <div className="person">
                                <span className="person__name">John Doe</span>
                                <span className="person__ID">System ID</span>
                            </div>
                        </div>                
                    </div>
                    <div className="content__query">
                        <h4>Query Type</h4>
                        <div className="query__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, temporibus.</div>
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
                <div className="content-item">
                    <div className="content__person">
                        <div className="person-image">
                            <div className="image">
                                <img src="./static/image/person-icon-8.png" alt="" />
                            </div>
                        </div>
                        <div className="person-name">
                            <div className="person">
                                <span className="person__name">John Doe</span>
                                <span className="person__ID">System ID</span>
                            </div>
                        </div>                
                    </div>
                    <div className="content__query">
                        <h4>Query Type</h4>
                        <div className="query__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, temporibus.</div>
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