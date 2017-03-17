import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Entry extends Component{
    render() {
        return(
            <div className="content-wrapper">
                <div className="content">
                    <div className="content__person">
                        <div className="person-image">
                            <div className="image">
                                <img src="./static/image/darth.jpg" alt="" />
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

ReactDOM.render(<Entry />, document.querySelector('.content'));