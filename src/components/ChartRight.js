import React, { Component } from 'react';
import "../assets/css/Main.css";
import MiniChart from "../components/miniChart"

class ChartRight extends Component {
    constructor(props) {
        super(props);   //ejecuta el constructor de component que es una clase de react
        this.state = {
            arrayCategorias: []
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(e => console.log(e))
    }

    componentDidMount() {
        this.apiCall("http://localhost:3000/api/products/category", this.categorias);
       

        
    }

   categorias = (data) => {
        // console.log(data)
        this.setState({
            arrayCategorias: data.data,  // en el state de este comnponente seteale en la propiedad  total el valor data.meta.total
        })
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
            {this.state.arrayCategorias.map((categoria)=> { return <MiniChart category={categoria} />})}

            </div>
        </div>

            );
        }
    }
    
    export default ChartRight;