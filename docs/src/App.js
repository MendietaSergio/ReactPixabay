import React, { Component } from 'react';
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";


class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: ''

  }
  scroll = ()=>{
    //selecciono a jumbotron
    const elemento = document.querySelector('.jumbotron');
    //indico que incie desde el comiendo al hacer click en siguiente o atras
    elemento.scrollIntoView('smooth','start')
  }

  paginaAnterior = () => {
    //leer el state de la pagina actual
    let pagina = this.state.pagina;
    //leer si la pagian es 1 no ir hacia atras
    if(pagina===1 )return null;
    //resta uno a la pagina actual 
    pagina -= 1;
    //agregar el cambio al state con setState
    this.setState({
      pagina
    },()=>{
      this.consultarApi();
      this.scroll();
    });

  }

  paginaSiguiente = () => {
    //leer el state de la pagina actual
    let pagina = this.state.pagina;
    //sumar uno a la pagina actual 
    pagina += 1;
    //agregar el cambio al state con setState
    this.setState({
      pagina
    },()=>{
      this.consultarApi();
      this.scroll();
    });

  }
  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;

    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${termino}&per_page=30&page=${pagina}`;
    //console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }))
  }

  datosBusqueda = (termino) => {
    //esto hace que se cambie el state, para luego mostrar lo que buscó
    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarApi()
    })
  }
  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imagenes</p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}

          />
        </div>

      </div>
    );
  }
}

export default App;
