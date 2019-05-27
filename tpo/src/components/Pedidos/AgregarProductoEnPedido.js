import React, {Component} from 'react';
import RestClient from "../../rest_api/RestClient";
import ProductosSelect from "../Productos/ProductosSelect";
import PedidosSelect from "./PedidosSelect";

class AgregarProductoEnPedido extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            cantidad: ''
        };
        this.productoSelect = React.createRef();
        this.pedidoSelect = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = JSON.stringify({
            numeroPedido: this.pedidoSelectCallbacks.getPedidoValue(),
            identificadorProducto: this.productoSelectCallbacks.getProductoValue(),
            cantidad: this.state.cantidad
        });
        console.log(data);
        console.log('Producto Agregado');
        RestClient.agregarAPedido(data);
    }

    changeCantidadHandler = event => {
        this.setState({
            cantidad: event.target.value
        });
    };

    render() {
        return (
            <div >
                <PedidosSelect ref={this.pedidoSelect} onMounted={callbacks => this.pedidoSelectCallbacks=callbacks}/>
                <ProductosSelect ref={this.productoSelect} onMounted={callbacks => this.productoSelectCallbacks=callbacks}/>
                <li>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input id="cantidad" name="cantidad" type="text" value={this.state.cantidad} onChange={this.changeCantidadHandler}/>
                </li>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <button>Agregar producto en pedido</button>
                </form>
            </div>

        );
    }

}
export default AgregarProductoEnPedido;