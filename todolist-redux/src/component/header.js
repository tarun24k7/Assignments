import React from 'react';
import { Link } from 'react-router-dom';
import "./heading.css"

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className="head">
                    <div><h1 className="comp">TODOS</h1></div>
                    <div> <Link to="/ToDoList" className="link">ToDoList</Link></div>
                    <div> <Link to="/AddToDo" className="link">AddToDoList</Link></div>
                    <div> <Link to="/StatusToDo" className="comp1">StatusOfToDoList</Link></div>
                </div>
            </div>
        )
    }
}