import React, {Component} from 'react';
import RestClient from "../../rest_api/RestClient";

class Clientes extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            clientes: [],
            isLoaded:false
        }
    }

    componentWillMount() {
        RestClient.getClientes().then(json => {this.setState({ clientes: json, isLoaded: true})});
    }

    handlerClickItem(numero) {
        this.props.history.push('/cliente/' + numero)
    }

    render() {

        var  {isLoaded, clientes} =this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        }
        else
        {
            return (
                <div >
                    <ul className="listClientes">
                        {
                            clientes.map(item => (
                                <li key={item.numero} onClick={this.handlerClickItem.bind(this,item.numero)}> {item.nombre}</li>
                            ))
                        }
                    </ul>
                </div>
            );
        }
    }
}

export default Clientes;