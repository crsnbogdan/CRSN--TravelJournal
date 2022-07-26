import React, {Component} from "react";
import './Card.css';
import pin from '../../Media/pin.svg'

export default class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {        
        return(
            <div className="card">
                <div className="card--image" style={{backgroundImage: `url("${process.env.PUBLIC_URL}/${this.props.imageUrl}")`}}/>
                <div className="card--info">
                    <div className="info--top">
                        <div className="top--row">
                            <img src={pin} className="top--pin"/>
                            <p className="top--location">{this.props.location}</p>
                            <a href={this.props.googleMapsUrl} className="top--link">View on Google Maps</a>
                        </div>
                        <div className="top--row">
                    <h3 className="row--title">{this.props.title}</h3>
                        </div>
                    </div>
                    <div className="info--bottom">
                        <p className="bottom--duration">{this.props.startDate} - {this.props.endDate}</p>
                        <p className="bottom--description">{this.props.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}