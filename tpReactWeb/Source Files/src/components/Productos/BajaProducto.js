import React, {Component} from 'react';
import RestClient from "../../rest_api/RestClient";
import ProductosSelect from "./ProductosSelect";

class BajaProducto extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            producto: [],
        };
        this.productoSelect = React.createRef();

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Producto Eliminado');
        RestClient.bajaProducto(this.productoSelectCallbacks.getProductoValue());
    }

    render() {
       return (
            <div >
                <ProductosSelect ref={this.productoSelect} onMounted={callbacks => this.productoSelectCallbacks=callbacks}/>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <button>Dar de Baja</button>
                </form>
            </div>

       );
    }

}
export default BajaProducto;