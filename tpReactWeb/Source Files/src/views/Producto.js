import React, {Component} from 'react';
import RestClient from "../rest_api/RestClient";
import {Button, Card, CardHeader, Col, Container, Form, Row} from "shards-react";
import PageTitle from "../components/common/PageTitle"

class Producto extends Component {

  constructor(props) {
    super(props);
    this.state  = {
      producto: {},
      isLoaded: false
    };
  }

  componentWillMount(){
    this.fetchProducto();
  }

  fetchProducto() {
    RestClient.getProducto(this.props.match.params.identificador)
      .then(json => {this.setState({ producto: json, isLoaded: true})});
  }

  handlerVolverAProductoClick(){
      this.props.history.push('/productos')
  }

  render() {
    var {isLoaded, producto} = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <Container fluid className="main-content-container px-4">
          {/* Page Header */}
          <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="Vista Producto" className="text-sm-left"/>
          </Row>
          <Row>
            <Col>
              <Card small className="mb-4">
                <CardHeader className="border-bottom">
                  <div className="float-left">
                    <div>Identificador: {producto.identificador}</div>
                    <div>Nombre: {producto.nombre}</div>
                    <div>Rubro: {producto.rubro.descripcion}</div>
                    <div>SubRubro: {producto.subRubro.descripcion}</div>
                    <div>Marca: {producto.marca}</div>
                    <div>Codigo de Barras: {producto.codigoBarras}</div>
                    <div>Precio: {producto.precio}</div>
                    <br></br>
                    <Button theme="danger" className="mb-2 mr-1" onClick={this.handlerVolverAProductoClick.bind(this)}>
                      Volver a Lista Productos
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}
export default Producto;
