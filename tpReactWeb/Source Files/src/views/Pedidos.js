import React, {Component} from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import RestClient from "../rest_api/RestClient";
import { Button } from "shards-react";

class Pedidos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pedidos: [],
      isLoaded: false
    }
  }

  componentWillMount() {
    this.fetchPedidos();
  }

  fetchPedidos() {
    RestClient.getPedidos().then(json => {
      this.setState({pedidos: json, isLoaded: true})
    });
  }

  handlerVerClickItem(numeroPedido) {
    this.props.history.push('/pedido/' + numeroPedido)
  }
  handlerEliminarClickItem(numeroPedido) {
    RestClient.bajaPedido(numeroPedido).then(data => this.fetchPedidos());
  }
  handlerFacturarClickItem(numeroPedido) {
    RestClient.facturarPedido(numeroPedido).then(data => this.fetchPedidos());
  }
  handlerNuevoPedidoClick() {
    this.props.history.push('/nuevo-pedido')
  }

  render() {
    var {isLoaded, pedidos} = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <Container fluid className="main-content-container px-4">
          {/* Page Header */}
          <Row noGutters className="page-header py-4">
            <div>
              <div className="float-left">
                <PageTitle sm="4" title="Pedidos" className="text-sm-left"/>
              </div>
              <div className="float-right">
                <Button size="sm" theme="info" className="mb-2 mr-1" onClick={this.handlerNuevoPedidoClick.bind(this)}>
                  Nuevo Pedido
                </Button>
              </div>
            </div>
          </Row>
          <Row>
            <Col>
              <Card small className="mb-4">
                <CardHeader className="border-bottom">

                </CardHeader>
                <CardBody className="p-0 pb-3">
                  <table className="table mb-0">
                    <thead className="bg-light">
                    <tr>
                      <th>Nro</th>
                      <th>Cliente</th>
                      <th>Fecha</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      pedidos.map(item => (
                        <tr key={item.numeroPedido}>
                          <td>{item.numeroPedido}</td>
                          <td>{item.cliente.nombre}</td>
                          <td>{item.fechaPedido}</td>
                          <td>{item.estado}</td>
                          <td>
                            <Button theme="secondary" className="mb-2 mr-1" onClick={this.handlerVerClickItem.bind(this,item.numeroPedido)}>
                              Ver/Editar
                            </Button>
                            <Button theme="success" className="mb-2 mr-1" onClick={this.handlerFacturarClickItem.bind(this,item.numeroPedido)}>
                              Facturar
                            </Button>
                            <Button theme="danger" className="mb-2 mr-1" onClick={this.handlerEliminarClickItem.bind(this,item.numeroPedido)}>
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

export default Pedidos;
