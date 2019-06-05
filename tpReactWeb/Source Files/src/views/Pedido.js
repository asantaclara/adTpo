import React, {Component} from 'react';
import RestClient from "../rest_api/RestClient";
import {Button, Card, CardBody, CardHeader, Col, Container, Row} from "shards-react";
import PageTitle from "../components/common/PageTitle";

class Pedido extends Component {

  constructor(props) {
    super(props);
    this.state  = {
      pedido: {},
      isLoaded:false
    }
  }

  handlerEliminarPedidoClick(numeroPedido) {
    RestClient.bajaPedido(numeroPedido).then(data => this.props.history.push('/pedidos'));
  }

  handlerFacturarClickItem(numeroPedido) {
    RestClient.facturarPedido(numeroPedido).then(data => this.fetchPedido());
  }

  handlerEliminarItemClick(numeroItem) {
    const data = JSON.stringify({
      numeroPedido: this.state.pedido.numeroPedido,
      identificadorItem: numeroItem});
    RestClient.eliminarItemDePedido(data).then(data => this.fetchPedido());
  }

  handlerAgregarItemClick(numeroPedido) {
    if(numeroPedido){
      this.props.history.push('/agregar-item-en-pedido/' + numeroPedido)
    }
  }

  componentWillMount() {
    this.fetchPedido();
  }

  fetchPedido() {
    RestClient.getPedido(this.props.match.params.numeroPedido)
      .then(json => {this.setState({ pedido: json, isLoaded: true})});
  }

  render() {
    var {isLoaded, pedido} = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <Container fluid className="main-content-container px-4">
          {/* Page Header */}
          <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title={"Pedido Nro: " + pedido.numeroPedido} className="text-sm-left"/>
          </Row>
          <Row>
            <Col>
              <Card small className="mb-4">
                <CardHeader className="border-bottom">
                  <div className="float-left">
                    <div>Cliente: {pedido.cliente.nombre}</div>
                    <div>Cuil: {pedido.cliente.cuil}</div>
                    <div>Fecha: {pedido.fechaPedido}</div>
                    <div>Estado: {pedido.estado}</div>
                    <div>Cantidad Items: {pedido.items.length}</div>
                  </div>
                  <div className="float-right text-right">
                    <div>
                      <Button theme="success" className="mb-2 mr-1" onClick={this.handlerFacturarClickItem.bind(this,pedido.numeroPedido)}>
                        Facturar
                      </Button>
                    </div>
                    <div>
                      <Button theme="primary" className="mb-2 mr-1" onClick={this.handlerAgregarItemClick.bind(this,pedido.numeroPedido)}>
                        Agregar Item
                      </Button>
                    </div>
                    <div>
                      <Button theme="danger" className="mb-2 mr-1" onClick={this.handlerEliminarPedidoClick.bind(this,pedido.numeroPedido)}>
                        Eliminar Pedido
                      </Button>
                    </div>

                  </div>
                </CardHeader>
                <CardBody className="p-0 pb-3">
                  <table className="table mb-0">
                    <thead className="bg-light">
                    <tr>
                      <th>Nro Item</th>
                      <th>ID Producto</th>
                      <th>Nombre</th>
                      <th>Marca</th>
                      <th>Rubro</th>
                      <th>SubRubro</th>
                      <th>Codigo</th>
                      <th>Precio Unitario</th>
                      <th>Cantidad</th>
                      <th>Precio Total</th>
                      <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      pedido.items.map(item => (
                        <tr key={item.numero}>
                          <td>{item.numero}</td>
                          <td>{item.producto.identificador}</td>
                          <td>{item.producto.nombre}</td>
                          <td>{item.producto.marca}</td>
                          <td>{item.producto.rubro.descripcion}</td>
                          <td>{item.producto.subRubro.descripcion}</td>
                          <td>{item.producto.codigoBarras}</td>
                          <td>{item.producto.precio}</td>
                          <td>{item.cantidad}</td>
                          <td>{item.precio}</td>
                          <td>
                            <Button theme="danger" className="mb-2 mr-1" onClick={this.handlerEliminarItemClick.bind(this,item.numero)}>
                              Eliminar
                            </Button>
                          </td>
                        </tr>
                      ))
                    }
                    </tbody>
                  </table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}
export default Pedido;
