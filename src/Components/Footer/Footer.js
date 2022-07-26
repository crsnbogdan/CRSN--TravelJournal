import React, {Component} from "react";
import './Footer.css'
export default class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <p className="footer--text">© {new Date().getFullYear()} - Crisan Bogdan</p>
            </div>
        )
    }
}