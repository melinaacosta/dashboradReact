import React, { Component } from 'react';
import "../assets/css/MiniCard.css";

class MiniCard extends Component {
    constructor(props) {
        super(props);   //ejecuta el constructor de component que es una clase de react
        this.state = {
           
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(e => console.log(e))
    }

    componentDidMount() {
        this.apiCall("http://localhost:3000/api/users/11", this.ultimoUsuario);
        this.apiCall("http://localhost:3000/api/products/29", this.ultimoProducto);
        
    }

    ultimoUsuario = (data) => {
        // console.log(data)
        this.setState({
            name: data.data.name,  // en el state de este comnponente seteale en la propiedad  total el valor data.meta.total
           email: data.data.email,
           avatar: data.data.avatar,
           admin: data.data.admin
        })
    }

    ultimoProducto = (data) => {
        // console.log(data)
        this.setState({
            nombre: data.data.name,  // en el state de este comnponente seteale en la propiedad  total el valor data.meta.total
           price: data.data.price,
           color: data.data.color_id,
           talle: data.data.size_id,
           status: data.data.status_id
        })
    }

    render() {
        return (
            <div className="minicard">
                <div className="car">
                        <h3>Usuarios</h3>
                        <p>Nombre: {this.state.name}</p>
                        <p>Email: {this.state.email}</p>
                        <p>Admin: {this.state.admin}</p>
                        <p>{this.state.avatar}</p>
                </div>
                <div className="car">
                        <h3>Productos</h3>
                        <p>Nombre: {this.state.nombre}</p>
                        <p>Precio: $ {this.state.price}</p>
                        <p>Color: {this.state.color}</p>
                        <p>Talle: {this.state.talle}</p>
                        <p>Status: {this.state.status}</p>
                </div>

            </div>
        );
    }
}

export default MiniCard;