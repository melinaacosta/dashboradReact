import React, { Component } from 'react';
import "../assets/css/Main.css";

class MiniChart extends Component {
    constructor(props) {
        super(props);   //ejecuta el constructor de component que es una clase de react
        this.state = {
           
        }
    }

    render() {
        return (
            <div>
            <div className="card4">
                    <h1>{this.props.category.nombre}</h1>
                    <p>{this.props.category.total}</p>
            </div>
                {/* <div className="card2">
                    <h1>Buzos</h1>
                    <p>kkkkk</p>
                </div>
                <div className="card3">
                    <h1>Jeans</h1>
                    <p>kkkkk</p>
                </div>
                <div className="card4">
                    <h1>kkkk</h1>
                    <p>kkkkk</p>
            </div> */}
            </div>
            );
        }
    }
    
    export default MiniChart;