import React, {Component} from 'react';
import ProductosDePedidoSelect from "../Productos/ProductosDePedidoSelect";

class EliminarProductoDePedido extends Component {
    constructor(props) {
        super(props);
        this.productosDePedidoSelect = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = JSON.stringify({
            pedido: this.productosDePedidoSelectCallbacks.getPedidoValue(),
            item: this.productosDePedidoSelectCallbacks.getItemValue()
        });
        console.log(data);
        console.log('Pedido dado de alta');
        // RestClient.altaProducto(data);

        //Hay que implementar el metodo en el negocio y despues en RestClient la constante y el metodo, tambien
        //en el controlador de Spring.
    }

    render() {
        return (
            <div >
                <ProductosDePedidoSelect ref={this.productosDePedidoSelect} onMounted={callbacks => this.productosDePedidoSelectCallbacks=callbacks}/>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <li>
                        <button>Eliminar Item</button>
                    </li>
                </form>
            </div>
        );
    }
}
export default EliminarProductoDePedido;