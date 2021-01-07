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
                    <div><h1 className="comp">COMPONENT LIFE CYCLE</h1></div>
                    <div> <Link to="/Mounting" className="link">MountingPhase</Link></div>
                    <div> <Link to="/UnMounting" className="link">UnMountingPhase</Link></div>
                    <div> <Link to="/Updating" className="comp1">UpdatingPhase</Link></div>
                </div>
            </div>
        )
    }
}