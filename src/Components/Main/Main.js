import React, {Component} from "react";
import './Main.css';
import Data from "../../data"
import Card from "../Card/Card"
export default class Main extends Component {
    render() {
        let dataElements = Data.map(dataObj => <Card {...dataObj}/>)
        return(
            <div className="main">
                {dataElements}
            </div>
        )
    }
}