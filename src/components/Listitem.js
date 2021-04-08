import React, { Component } from 'react';
import "../assets/css/List.css"


class Listitem extends Component{
    constructor(props) {
        super(props);   //ejecuta el constructor de component que es una clase de react
        this.state = {

        }
    }

    render() {
        return (
        <tr>
            <td>{this.props.item.name}</td>
            <td>{this.props.item.description}</td>
            <td>${this.props.item.price}</td>
            <td>Category: {this.props.item.category_id}</td>
            <td>{this.props.item.color_id}</td>
            <td>{this.props.item.size_id}</td>
        </tr>
        );
    }
}


export default Listitem;