import React, {Component} from 'react';
import RestClient from "../../rest_api/RestClient";

class ProductosDePedidoSelect extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            pedidos: [],
            items: [],
            isLoaded:false,
            pedidoId: '',
            itemId: ''
        };
        this.items = React.createRef();

    }

    getPedidoValue(){
        return {
            numeroPedido: this.state.pedidoId
        }
    }

    getItemValue(){
        return {
            numero: this.state.itemId
        }
    }

    componentDidMount() {
        if(this.props.onMounted){
            this.props.onMounted({
                getPedidoValue: this.getPedidoValue.bind(this),
                getItemValue: this.getItemValue.bind(this)
            })
        }
    }

    componentWillMount() {
        RestClient.getPedidos().then(json => {this.setState({ pedidos: json, isLoaded: true})});
    }

    handlePedidosChange(event){
        RestClient.getPedido(event.target.value).then(json => {this.setState({ items: json.items})});
        this.setState({pedidoId: event.target.value});
    }

    handleItemsChange(event){
        this.setState({itemId: event.target.value});
    }

    render() {
        var  {isLoaded, pedidos, items} =this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <li>
                        <label htmlFor="rubros">Pedidos</label>
                        <select onClick={this.handlePedidosChange.bind(this)}>
                            {pedidos.map((pedido) => <option key={pedido.numeroPedido} value={pedido.numeroPedido}>{'('+pedido.numeroPedido+')'} {pedido.fechaPedido}</option>)}
                        </select>
                        <label htmlFor="item">Items</label>
                        <select ref={this.items} onClick={this.handleItemsChange.bind(this)}>
                            {items.map((item) => <option key={item.numero} value={item.numero}>{'('+item.numero+')'} {item.producto.nombre} {'Cantidad: '+item.cantidad}</option>)}
                        </select>
                    </li>
                </div>
            );
        }
    }
}

export default ProductosDePedidoSelect;