import React, { Component } from 'react';
import "../assets/css/Main.css"


class Card extends Component {
    constructor(props) {
        super(props);   //ejecuta el constructor de component que es una clase de react
        this.state = {
            total: 0,
            user: 0
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(e => console.log(e))
    }

    componentDidMount() {
        this.apiCall("http://localhost:3000/api/products", this.totalProductos);
        this.apiCall("http://localhost:3000/api/users", this.totalUsuarios);
    }

    totalProductos = (data) => {
        // console.log(data)
        this.setState({
            total: data.meta.total  // en el state de este comnponente seteale en la propiedad  total el valor data.meta.total
           
        })
    }

    totalUsuarios = (data) => {
        this.setState({
            user: data.meta.total,
        })
    }

    componentDidUpdate(prevProps, prevState) {

    }


    render() {
        return (
            <div className="main__cards">
            <div className="card">
                <i className=" fa fa-product-hunt fa-3x text-lightblue"></i>
                <div className="card_inner">
                    <p className="text-primary-p">Total productos</p>
                    <span className="font-bold text-title">{this.state.total}</span>
                </div>
            </div>
            <div className="card">
            <i className=" fa fa-child fa-3x text-red"></i>
            <div className="card_inner">
                <p className="text-primary-p">Total categorias</p>
                <span className="font-bold text-title">2475</span>
            </div>
        </div>
        <div className="card">
            <i className=" fa fa-user-o fa-3x text-yellow"></i>
            <div className="card_inner">
                <p className="text-primary-p">Total Usuarios</p>
                <span className="font-bold text-title">{this.state.user}</span>
            </div>
        </div>
        <div className="card">
            <i className=" fa fa-thumbs-up fa-3x text-green"></i>
            <div className="card_inner">
                <p className="text-primary-p">Numero de Likes</p>
                <span className="font-bold text-title">600</span>
            </div>
        </div>
        </div>

        );
    }
}

export default Card;