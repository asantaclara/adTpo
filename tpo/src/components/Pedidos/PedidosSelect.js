import React, {Component} from 'react';
import RestClient from "../../rest_api/RestClient";

class PedidosSelect extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            pedidos: [],
            isLoaded:false,
            pedidoId: '',

        };
    }

    getPedidoValue(){
        return this.state.pedidoId;
    }

    componentDidMount() {
        if(this.props.onMounted){
            this.props.onMounted({
                getPedidoValue: this.getPedidoValue.bind(this),
            })
        }
    }

    componentWillMount() {
        RestClient.getPedidos().then(json => {this.setState({ pedidos: json, isLoaded: true})});
    }

    handlePedidosChange(event){
        this.setState({pedidoId: event.target.value});
    }

    render() {
        var  {isLoaded, pedidos} =this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <li>
                        <label htmlFor="pedidos">Pedidos</label>
                        <select onChange={this.handlePedidosChange.bind(this)}>
                            {pedidos.map((pedido) => <option key={pedido.numeroPedido} value={pedido.numeroPedido}>{pedido.numeroPedido} {pedido.fechaPedido}</option>)}
                        </select>
                    </li>
                </div>
            );
        }
    }
}

export default PedidosSelect;