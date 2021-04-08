import React, { Component } from 'react';
import "../assets/css/MiniCard.css";


class Gif extends Component {
    constructor(props) {
        super(props);   //ejecuta el constructor de component que es una clase de react
        this.state = {
           
        }
    }

    render() {
        return (
            <div>
                <embed src={this.props.gif.embed_url}></embed>
            </div>

    );
}
}

export default Gif;