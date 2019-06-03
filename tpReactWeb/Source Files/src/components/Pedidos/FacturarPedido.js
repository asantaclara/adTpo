import React, {Component} from 'react';
import RestClient from "../../rest_api/RestClient";
import PedidosSelect from "./PedidosSelect";

class FacturarPedido extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            pedido: [],
        };
        this.pedidosSelect = React.createRef();

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Pedido Facturado');
        RestClient.facturarPedido(this.pedidoSelectCallbacks.getPedidoValue());
    }

    render() {
        return (
            <div >
                <PedidosSelect ref={this.pedidoSelect} onMounted={callbacks => this.pedidoSelectCallbacks=callbacks}/>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <button>Facturar</button>
                </form>
            </div>

        );
    }

}
export default FacturarPedido;