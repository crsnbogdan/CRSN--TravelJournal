import React, {Component} from "react";
import logo from '../../Media/logo.svg'
import './Nav.css'
export default class Nav extends Component {
    render() {
        return(
            <div className="nav">
                <img src={logo} className="nav--logo"/>
                <h2 className="nav--heading">My travel journal.</h2>
            </div>
        )
    }
}