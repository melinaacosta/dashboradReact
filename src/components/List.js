import React, { Component } from 'react';
import "../assets/css/List.css"


class List extends Component {
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
        this.apiCall("http://localhost:3000/api/products/18", this.totalProducto18);
        this.apiCall("http://localhost:3000/api/products/19", this.totalProducto19);
        this.apiCall("http://localhost:3000/api/products/20", this.totalProducto20);
        this.apiCall("http://localhost:3000/api/products/21", this.totalProducto21);
        this.apiCall("http://localhost:3000/api/products/22", this.totalProducto22);
        this.apiCall("http://localhost:3000/api/products/23", this.totalProducto23);
        this.apiCall("http://localhost:3000/api/products/24", this.totalProducto24);
        this.apiCall("http://localhost:3000/api/products/25", this.totalProducto25);
        this.apiCall("http://localhost:3000/api/products/26", this.totalProducto26);
        this.apiCall("http://localhost:3000/api/products/27", this.totalProducto27);
        this.apiCall("http://localhost:3000/api/products/28", this.totalProducto28);
        this.apiCall("http://localhost:3000/api/products/29", this.totalProducto29);

        
    }

    totalProducto18 = (data) => {
        // console.log(data)
        this.setState({
            name: data.data.name,  // en el state de este comnponente seteale en la propiedad  total el valor data.meta.total
            desc: data.data.description,
            price: data.data.price,
            category: data.data.category_id,
            color: data.data.color_id
        })
    }

    totalProducto19 = (data) => {
        // console.log(data)
        this.setState({
            name: data.data.name,  // en el state de este comnponente seteale en la propiedad  total el valor data.meta.total
            desc: data.data.description,
            price: data.data.price
        })
    }
    totalProducto20 = (data) => {
        // console.log(data)
        this.setState({
            name: data.data.name,  // en el state de este comnponente seteale en la propiedad  total el valor data.meta.total
            desc: data.data.description,
            price: data.data.price
        })
    }
    totalProducto21 = (data) => {
        // console.log(data)
        this.setState({
            name: data.data.name,  // en el state de este comnponente seteale en la propiedad  total el valor data.meta.total
            desc: data.data.description,
            price: data.data.price
        })
    }
    totalProducto22 = (data) => {
        // console.log(data)
        this.setState({
            name: data.data.name,  // en el state de este comnponente seteale en la propiedad  total el valor data.meta.total
            desc: data.data.description,
            price: data.data.price
        })
    }
    totalProducto23 = (data) => {
        // console.log(data)
        this.setState({
            name: data.data.name,  // en el state de este comnponente seteale en la propiedad  total el valor data.meta.total
            desc: data.data.description,
            price: data.data.price
        })
    }
    totalProducto24 = (data) => {
        // console.log(data)
        this.setState({
            name: data.data.name,  // en el state de este comnponente seteale en la propiedad  total el valor data.meta.total
            desc: data.data.description,
            price: data.data.price
        })
    }
    totalProducto25 = (data) => {
        // console.log(data)
        this.setState({
            name: data.data.name,  // en el state de este comnponente seteale en la propiedad  total el valor data.meta.total
            desc: data.data.description,
            price: data.data.price
        })
    }
    totalProducto26 = (data) => {
        // console.log(data)
        this.setState({
            name: data.data.name,  // en el state de este comnponente seteale en la propiedad  total el valor data.meta.total
            desc: data.data.description,
            price: data.data.price
        })
    }
    totalProducto27 = (data) => {
        // console.log(data)
        this.setState({
            name: data.data.name,  // en el state de este comnponente seteale en la propiedad  total el valor data.meta.total
            desc: data.data.description,
            price: data.data.price
        })
    }
    totalProducto28 = (data) => {
        // console.log(data)
        this.setState({
            name: data.data.name,  // en el state de este comnponente seteale en la propiedad  total el valor data.meta.total
            desc: data.data.description,
            price: data.data.price
        })
    }
    totalProducto29 = (data) => {
        // console.log(data)
        this.setState({
            name: data.data.name,  // en el state de este comnponente seteale en la propiedad  total el valor data.meta.total
            desc: data.data.description,
            price: data.data.price
        })
    }


    render() {
        return (
            <div className="shadow mb-4">
                <h1 className="h1">All the products in the Database</h1>
                <div>
                    <div>
                        <table className="table table-bordered" id="dataTable">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Categories</th>
                                    <th>Colors</th>
                                    <th>Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.name}</td>
                                    <td>{this.state.desc}</td>
                                    <td>${this.state.price}</td>
                                    <td>
                                        <ul>
                                            <li>Category {this.state.category}</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            
                                            <li><span className="text-primary">{this.state.color}</span></li>
                                            
                                        </ul>
                                    </td>
                                    <td>245</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        );
    }
}

export default List;