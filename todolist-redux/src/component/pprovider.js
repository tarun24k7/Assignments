import React from 'react';
import { Provider } from 'react-redux';
import AddToDoList from './addtodolist';
import reducer from './Reducer';
import ToDoList from './ToDoList';
import StatusOfToDoList from "./status"
import { createStore } from "react"


const initalState = {
    todolist: [
        { name: "Tarun Wadhawan" },
        { name: "Tarun Wadhawan" },
        { name: "Tarun Wadhawan" },

    ]

};
const store = createStore(reducer, initalState)
export default class Providing extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Provider store={store}>
                    <ToDoList />
                    <AddToDoList />
                    <StatusOfToDoList />
                </Provider>
            </div>
        )
    }
}