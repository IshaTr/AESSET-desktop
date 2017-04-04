import React, { Component } from 'react';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    render() {
        let queryDict = {
            result: "Result Discrepency",
            other_certificate: "Other certificate issue",
            pdc_issue: "Issue of PDC",
            credit: "Credit Discrepancy"
        }
        
        const { data } = this.state;
        return(    
            <div className="content-item">
                <div className="content__person">
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
                        </div>
                    </div>
            </div>
        );
    }
}