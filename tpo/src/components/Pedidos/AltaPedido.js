import React, {Component} from 'react';
import RestClient from "../../rest_api/RestClient";
import ClientesSelect from "../Clientes/ClientesSelect";

class AltaPedido extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            cliente: [],
        };
        this.clienteSelect = React.createRef();

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Pedido abierto');
        const data = JSON.stringify({
            cliente:  this.clienteSelectCallbacks.getClienteValue()});
        RestClient.altaPedido(data);
    }

    render() {
        return (
            <div >
                <ClientesSelect ref={this.clienteSelect} onMounted={callbacks => this.clienteSelectCallbacks=callbacks}/>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <button>Nuevo Pedido</button>
                </form>
            </div>

        );
    }

}
export default AltaPedido;