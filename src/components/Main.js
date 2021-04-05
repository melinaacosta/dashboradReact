import React, { Component } from 'react';
import "../assets/css/Main.css";
import hello from "../assets/images/hellos.jpg"
import Chart from "../components/Charts";
import Card from "../components/Card";
import ChartRight from "../components/ChartRight";
import MiniCard from "../components/MiniCard";

class Main extends Component {
    constructor(props) {
        super(props);   //ejecuta el constructor de component que es una clase de react
        this.state = {
            total: 0
        }
    }

    render() {
        return (
            <main>
                <div className="main__container">
                    <div className="main__title">
                        <img src={hello} alt="hello" />
                        <div className="main__greeting">
                            <h1>Hello {this.props.nombre}</h1>
                            <p>Welcome to your admin dashborad in React</p>
                        </div>
                    </div>
                    
                    <Card/>
                    
                    <div className="charts">
                        <ChartRight/>
                        <div className="charts__left">
                            <div className="charts__left__title">
                                <div>
                                    <h1>
                                        Daily Reports 
                                        </h1>
                                    <p>Últimos creados</p>
                                </div>
                                <i className="fa fa-usd"></i>
                            </div>
                            <MiniCard/>
                            

                        </div>
                    </div>
                    

                </div>
            </main>
        );
    }
}

export default Main;