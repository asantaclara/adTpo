import React, {Component} from 'react';
import RestClient from "../../rest_api/RestClient";

class ProductosSelect extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            productos: [],
            isLoaded:false,
            productoId: '',

        };
    }

    getProductoValue(){
        return this.state.productoId;
    }

    componentDidMount() {
        if(this.props.onMounted){
            this.props.onMounted({
                getProductoValue: this.getProductoValue.bind(this),
            })
        }
    }

    componentWillMount() {
        RestClient.getProductos().then(json => {this.setState({ productos: json, isLoaded: true})});
    }

   handleProductoChange(event){
        this.setState({productoId: event.target.value});
    }

    render() {
        var  {isLoaded, productos} =this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <li>
                        <label htmlFor="productos">Productos</label>
                        <select onChange={this.handleProductoChange.bind(this)}>
                            {productos.map((producto) => <option key={producto.identificador} value={producto.identificador}>{producto.identificador} {producto.nombre}</option>)}
                        </select>
                    </li>
                </div>
            );
        }
    }
}

export default ProductosSelect;