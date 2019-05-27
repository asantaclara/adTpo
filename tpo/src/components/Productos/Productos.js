import React, {Component} from 'react';
import RestClient from "../../rest_api/RestClient";

class Productos extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            productos: [],
            isLoaded:false
        }
    }

    componentWillMount() {
        RestClient.getProductos().then(json => {this.setState({ productos: json, isLoaded: true})});
    }

    handlerClickItem(identificador) {
        this.props.history.push('/producto/' + identificador)
    }

    render() {

        var  {isLoaded, productos} =this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        }
        else
        {
            return (
                <div >
                    <ul className="listProductos">
                        {
                            productos.map(item => (
                                <li key={item.identificador} onClick={this.handlerClickItem.bind(this,item.identificador)}> Nro Producto: {item.identificador}</li>
                            ))
                        }
                    </ul>
                </div>
            );
        }
    }
}

export default Productos;