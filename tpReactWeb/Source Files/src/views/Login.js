import React, {Component} from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import RestClient from "../rest_api/RestClient";
import { Button } from "shards-react";
import LoginInterno from "../components/Login/LoginInterno";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      isLoaded: false
    }
  }

  componentWillMount() {
    this.fetchProductos();
  }

  fetchProductos() {
    RestClient.getProductos().then(json => {
      this.setState({productos: json, isLoaded: true})
    });
  }

  handlerEliminarClickItem(numeroProducto) {
    RestClient.bajaProducto(numeroProducto).then(data => this.fetchProductos());
  }
  handlerNuevoProductoClick() {
    this.props.history.push('/nuevo-producto')
  }

  render() {
    var {isLoaded, productos} = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <Container fluid className="main-content-container px-4 pb-4">
          <div className="error">
            <div className="error__content">
              <h3>Bienvenido al sistema de pedidos</h3>
            <LoginInterno/>
            </div>
          </div>
        </Container>
      );
    }
  }
}

export default Login;
