import React from 'react';
import { connect } from "react-redux"
class StatusOfToDoList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>STATUSOFTODOLIST</h1>
            </div>
        );
    }
}

export default connect()(StatusOfToDoList);