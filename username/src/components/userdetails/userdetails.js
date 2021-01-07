import React from 'react';
import { Datacontext } from "../datacontext/datacontext"


import secureAxios from '../secureaxios/secureaxios';



export default class UserDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userdetails: [],
            tempUser: [],

        }
    }
    click = () => {
        this.setState({
            userdetails: [...this.state.userdetails, this.state.tempUser]
        })
        this.setState({
            tempUser: ""
        })

        secureAxios.post('/posts', `posted_data:${this.state.tempUser}`).then(res => console.log(res.data))
    }


    render() {
        console.log(this.state.userdetails)
        return (
            <div className="container-fluid" >
                <div className=" row  bg-primary d-flex justify-content-center text-white">
                    <div className="  mb-5" >
                        <h1>DIGIKULL STUDENTS</h1>
                    </div>
                </div>
                <div>
                    <h3 className="mt-5 mb-5" >HELLO USER</h3>
                    <div className="mb">
                        <input type="text" name="name" value={this.state.tempUser} onChange={(event) => this.setState({ tempUser: event.target.value })} />
                        <button onClick={this.click}>ADD</button>
                    </div>
                    {this.context.userdetails.map(item => {
                        return <h2 className="border border-dark m-2">{item.name}</h2>
                    })}


                </div>
            </div>

        )
    }
}


UserDetails.contextType = Datacontext