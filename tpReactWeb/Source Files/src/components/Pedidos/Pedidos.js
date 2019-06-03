import React, {Component} from 'react';
import RestClient from "../../rest_api/RestClient";

class Pedidos extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            pedidos: [],
            isLoaded:false
        }
    }

    componentWillMount() {
        RestClient.getPedidos().then(json => {this.setState({ pedidos: json, isLoaded: true})});
    }

    handlerClickItem(numeroPedido) {
        this.props.history.push('/pedido/' + numeroPedido)
    }

    render() {

        var  {isLoaded, pedidos} =this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        }
        else
        {
            return (
                <div >
                    <ul className="listPedidos">
                        {
                            pedidos.map(item => (
                                <li key={item.numeroPedido} onClick={this.handlerClickItem.bind(this,item.numeroPedido)}> Nro Pedido: {item.numeroPedido}</li>
                            ))
                        }
                    </ul>
                </div>
            );
        }
    }
}

export default Pedidos;