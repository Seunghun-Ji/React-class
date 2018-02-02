import React, { Component } from 'react';

class Card extends Component {

    constructor(props) {
        super(props);
        console.log("constructor");
        console.log(props);
        this.state = {};
    }
    componentWillMount() {
        console.log("componentWillMount")
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    render() {
        console.log("render")
        return (
        <div>
            <img src={this.props.contentImage}></img>
            <h1>{this.props.contentTitle}</h1>
        </div>
        );
    }
}

export default Card;