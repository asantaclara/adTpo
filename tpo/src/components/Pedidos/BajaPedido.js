import React, {Component} from 'react';
import RestClient from "../../rest_api/RestClient";
import PedidosSelect from "./PedidosSelect";

class BajaPedido extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            pedido: [],
        };
        this.pedidosSelect = React.createRef();

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Pedido Eliminado');
        RestClient.bajaPedido(this.pedidoSelectCallbacks.getPedidoValue());
    }

    render() {
        return (
            <div >
                <PedidosSelect ref={this.pedidoSelect} onMounted={callbacks => this.pedidoSelectCallbacks=callbacks}/>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <button>Dar de Baja</button>
                </form>
            </div>

        );
    }

}
export default BajaPedido;