import React, {Component} from 'react';
import './Clientes.css';
import { Link } from 'react-router-dom';
import RestClient from "../../rest_api/RestClient";

class Cliente extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            cliente: [],
            isLoaded:false
        }
    }

    componentWillMount() {
        if(!this.isLoaded){
            RestClient.getCliente(this.props.match.params.numero).then(json => {this.setState({ cliente: json, isLoaded: true})});
        }
    }

    render() {
        var  {isLoaded, cliente} = this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="Cliente">
                    <li>Numero: {cliente.numero}</li>
                    <li>Nombre: {cliente.nombre}</li>
                    <li>Cuil: {cliente.cuil}</li>
                    <li>Activo: {(cliente.activo) ? 'SI' : 'NO'}</li>
                    <br/>
                    <Link  to="/clientes">Volver</Link>
                </div>
            );
        }
    }
}
export default Cliente;
