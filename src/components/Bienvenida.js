import React from 'react';

function Bienvenida(props){
    return(
        <h1>Bienvenidx {props.nombre} a mi perfil en React</h1>
    );
}

Bienvenida.defaultProps = {
    nombre: "?"
}


export default Bienvenida;