import React, { Component } from 'react';
import "../assets/css/List.css"
import Listitem from "../components/Listitem"


class List extends Component {
    constructor(props) {
        super(props);   //ejecuta el constructor de component que es una clase de react
        this.state = {
            arrayProductos: []
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
       

        
    }

    totalProductos = (data) => {
        // console.log(data)
        this.setState({
            arrayProductos: data.data,  // en el state de este comnponente seteale en la propiedad  total el valor data.meta.total
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
                                    <th>Talle</th>
                                </tr>
                               
                            </thead>
                            <tbody>
                               {this.state.arrayProductos.map((producto)=> { return <Listitem item={producto} />})}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        );
    }
}

export default List;