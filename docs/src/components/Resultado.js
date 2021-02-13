import React, { Component } from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';

export default class Resultado extends Component {
    mostrarImagenes = () => {
        const imagenes = this.props.imagenes;
        if(imagenes.length === 0){
            return null
        }
        console.log(imagenes);
        return(
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {imagenes.map(imagen =>(
                        <Imagen
                        //el key es para obtener el id de la imagen y que no se repita
                        key = {imagen.id}
                        imagen={imagen}
                        />
                    ))}
                </div>
                <Paginacion
                paginaAnterior={this.props.paginaAnterior}
                paginaSiguiente={this.props.paginaSiguiente}
                />
            </React.Fragment>
        )
        
    }
    render() {
        return (
            <div>
                {this.mostrarImagenes()}
            </div>
        )
    }
}