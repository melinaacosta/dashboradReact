import React, { Component } from 'react';
import "../assets/css/Main.css";

class ChartRight extends Component {
    constructor(props) {
        super(props);   //ejecuta el constructor de component que es una clase de react
        this.state = {
            total: 0
        }
    }

    render() {
        return (
            <div className="charts__right">
            <div className="charts__right__title">
                <div>
                    <h1>
                        Categorias
                        </h1>
                    <p>Buenos Aires, Argentina</p>
                </div>
                <i className="fa fa-usd"></i>
            </div>
            <div className="charts__right__cards">
                <div className="card1">
                    <h1>Remera</h1>
                    <p>kkkkk</p>
                </div>
                <div className="card2">
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
                </div>

            </div>
        </div>

            );
        }
    }
    
    export default ChartRight;