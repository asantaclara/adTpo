import React, {Component} from 'react';
import './Pedidos.css';
import { Link } from 'react-router-dom';
import RestClient from "../../rest_api/RestClient";

class Pedido extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            pedido: [],
            isLoaded:false
        }
    }

    handleClientItemClick(numero) {
        this.props.history.push('/cliente/' + numero)
    }

    handleProductItemClick(identificador) {
        this.props.history.push('/producto/' + identificador)
    }

    componentWillMount() {
        RestClient.getPedido(this.props.match.params.numeroPedido).then(json => {this.setState({ pedido: json, isLoaded: true})});
    }

    render() {
        var  {isLoaded, pedido} = this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="Pedido">
                    <ul>
                        <li>Nro Pedido: {pedido.numeroPedido}</li>
                        <li onClick={this.handleClientItemClick.bind(this,pedido.cliente.numero)}> Cliente: ({pedido.cliente.numero}) {pedido.cliente.nombre}</li>
                        <li>Fecha de pedido: {pedido.fechaPedido}</li>
                        <li>Items:</li>
                        <ul className="listItems">
                            {
                                pedido.items.map(item => (
                                <li key={item.numero} onClick={this.handleProductItemClick.bind(this,item.numero)} >({item.producto.identificador}) - {item.producto.nombre} - Cant: {item.cantidad}</li>
                                ))
                            }
                        </ul>
                    </ul>
                    {/*<li>Numero: {cliente.numero}</li>*/}
                    {/*<li>Nombre: {cliente.nombre}</li>*/}
                    {/*<li>Cuil: {cliente.cuil}</li>*/}
                    {/*<li>Activo: {(cliente.activo) ? 'SI' : 'NO'}</li>*/}
                    <br/>
                    <Link  to="/pedidos">Volver</Link>
                </div>
            );
        }
    }
}
export default Pedido;
