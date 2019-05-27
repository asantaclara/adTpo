import React, {Component} from 'react';
import './Productos.css';
import { Link } from 'react-router-dom';
import RestClient from "../../rest_api/RestClient";

class Producto extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            producto: [],
            isLoaded:false
        }
    }

    handleSubRubroItemClick(codigo) {
        this.props.history.push('/subrubro/' + codigo)
    }

    componentWillMount() {
        RestClient.getProducto(this.props.match.params.identificador).then(json => {this.setState({ producto: json, isLoaded: true})});
    }

    render() {
        var  {isLoaded, producto} = this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="Producto">
                    <li>Identificador: {producto.identificador}</li>
                    <li>Nombre: {producto.nombre}</li>
                    <li>Marcha: {producto.marca}</li>
                    <li>CodigoBarras: {producto.codigoBarras}</li>
                    <li>Precio: {producto.precio}</li>
                    <li onClick={this.handleSubRubroItemClick.bind(this,producto.subRubro.codigo)}> SubRubro: ({producto.subRubro.codigo}) - {producto.subRubro.descripcion}</li>
                    <br/>
                    <Link  to="/productos">Volver</Link>
                </div>
            );
        }
    }
}
export default Producto;
