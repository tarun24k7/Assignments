import React, { createContext } from 'react';

import secureAxios from "../secureaxios/secureaxios"

export const Datacontext = createContext()

export default class DatacontextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userdetails: []
        }
    }

    componentDidMount() {
        secureAxios.get('/users').then(res => res.data).then(data => { this.setState({ userdetails: data }) })
    }

    handelchange = (val) => { this.setState({ userdetails: val }) }

    render() {
        return (
            <Datacontext.Provider value={{ userdetails: this.state.userdetails, handelchange: this.handelchange }}>
                {this.props.children}
            </Datacontext.Provider>
        )
    }
}