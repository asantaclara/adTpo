import React, {Component} from 'react';
import RestClient from "../../rest_api/RestClient";
import {Button,FormSelect, Col, FormInput} from "shards-react";

class LoginInterno extends Component {

  constructor(props) {
    super(props);
    this.state  = {
      usuario: '',
      password: '',
    };
  }

  getUsuarioValue(){
    return this.state.usuario
  }

  getPasswordValue(){
    return this.state.password
  }

  componentDidMount() {
    if(this.props.onMounted){
      this.props.onMounted({
        getUsuarioValue: this.getUsuarioValue.bind(this),
        getPasswordValue: this.getPasswordValue.bind(this),
      })
    }
  }

  changeUsuarioHandler = event => {
    this.setState({
      usuario: event.target.value
    });
  };
  changePasswordHandler = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleChangeSubmit(event) {
    event.preventDefault();
    console.log('LoginInterno');
    const data = JSON.stringify({
      cliente:  this.clienteSelectCallbacks.getClienteValue()});
    RestClient.altaPedido(data);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    console.log('Pedido abierto');
    const data = JSON.stringify({
      nombre:  this.state.usuario,
      password: this.state.password
    });
    RestClient.login(data);
  }

  render() {
      return (
        <div>
          <label htmlFor="feInputUsuari">Usuario</label>
          <FormInput id="feInputUsuario" onChange={this.changeUsuarioHandler} />
          <br/>
          <label htmlFor="feInputPass">Contraseña</label>
          <FormInput type="password" id="feInputPass" onChange={this.changePasswordHandler}/>
          <br/>
          <table>
            <tbody>
              <tr>
                <td>
                    <Button onClick={this.handleLoginSubmit}>Ingresar al sistema</Button>
                </td>
                <td>
                    <Button onClick={this.handleChangeSubmit}>Cambiar Password</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
  }
}
export default LoginInterno;

