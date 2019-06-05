import React, {Component} from 'react';
import RestClient from "../../rest_api/RestClient";
import {FormSelect} from "shards-react";

class ClientesSelect extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            clientes: [],
            isLoaded:false,
            clienteCuil: ''

        };
    }

    getClienteValue(){
        return {cuil: this.state.clienteCuil};
    }

    componentDidMount() {
        if(this.props.onMounted){
            this.props.onMounted({
                getClienteValue: this.getClienteValue.bind(this),
            })
        }
    }

    componentWillMount() {
        RestClient.getClientes().then(json => {this.setState({ clientes: json, isLoaded: true})});
    }

    handleClienteChange(event){
        this.setState({clienteCuil: event.target.value});
    }

    render() {
        var  {isLoaded, clientes} =this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                  <label htmlFor="clientes">Clientes</label>
                  <FormSelect onChange={this.handleClienteChange.bind(this)}>
                      {clientes.map((cliente) => <option key={cliente.numero} value={cliente.cuil}>{cliente.numero} {cliente.nombre}</option>)}
                  </FormSelect>
                </div>
            );
        }
    }
}

export default ClientesSelect;