import React, { Component } from 'react';
import "../assets/css/Main.css";
import hello from "../assets/images/hellos.jpg"
import Chart from "../components/Charts";

class Main extends Component {
    render() {
        return (
            <main>
                <div className="main__container">
                    <div className="main__title">
                        <img src={hello} alt="hello" />
                        <div className="main__greeting">
                            <h1>Hello World</h1>
                            <p>Welcome to your admin dashborad in React</p>
                        </div>
                    </div>
                    <div className="main__cards">
                        <div className="card">
                            <i className=" fa fa-user-o fa-2x text-lightblue"></i>
                            <div className="card_inner">
                                <p className="text-primary-p">Cantidad de Usuarios</p>
                                <span className="font-bold text-title">578</span>
                            </div>
                        </div>
                        <div className="card">
                            <i className=" fa fa-calendar fa-2x text-red"></i>
                            <div className="card_inner">
                                <p className="text-primary-p">Numero de Visitas</p>
                                <span className="font-bold text-title">2475</span>
                            </div>
                        </div>
                        <div className="card">
                            <i className=" fa fa-videos-camera fa-2x text-yellow"></i>
                            <div className="card_inner">
                                <p className="text-primary-p">Numero de Videos</p>
                                <span className="font-bold text-title">340</span>
                            </div>
                        </div>
                        <div className="card">
                            <i className=" fa fa-thumbs-up fa-2x text-green"></i>
                            <div className="card_inner">
                                <p className="text-primary-p">Numero de Likes</p>
                                <span className="font-bold text-title">600</span>
                            </div>
                        </div>
                    </div>
                        <div className="charts">
                            <div className="charts__left">
                                <div className="charts__left__title">
                                    <div>
                                        <h1>
                                            Daily Reports
                                        </h1>
                                        <p>Cupertino, California, USA</p>
                                    </div>
                                    <i className="fa fa-usd"></i>
                                </div>
                                <Chart/>
                            </div>
                            <div className="charts__right">
                                <div className="charts__right__title">
                                    <div>
                                        <h1>
                                            States Reports
                                        </h1>
                                        <p>Cupertino, California, USA</p>
                                    </div>
                                    <i className="fa fa-use"></i>
                                </div>
                             <div className="charts__right__cards">
                                 <div className="card1">
                                    <h1>kkkk</h1>
                                    <p>kkkkk</p>
                                 </div>

                             </div>
                             <div className="charts__right__cards">
                                 <div className="card2">
                                    <h1>kkkk</h1>
                                    <p>kkkkk</p>
                                 </div>

                             </div>
                             <div className="charts__right__cards">
                                 <div className="card3">
                                    <h1>kkkk</h1>
                                    <p>kkkkk</p>
                                 </div>

                             </div>
                             <div className="charts__right__cards">
                                 <div className="card4">
                                    <h1>kkkk</h1>
                                    <p>kkkkk</p>
                                 </div>

                             </div>
                            </div>

                        </div>

                    
                </div>
            </main>
        );
    }
}

export default Main;