import React from 'react';
import { connect } from "react-redux"
class ToDoList extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        console.log(this.props.todos, "in todo")
        return (
            <div>
                <div>
                    <h1>TODOLIST</h1>



                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ todos: state.todolist })



export default connect(mapStateToProps)(ToDoList);