import React, {Component} from 'react';
import RestClient from "../rest_api/RestClient";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container, Form,
  Row
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import RubrosSubRubrosProductoSelect from "../components/Productos/RubrosSubRubrosProductoSelect";

class AgregarItemEnPedido extends Component {

  constructor(props) {
    super(props);
    this.state  = {
      pedido: {},
      isLoaded:false
    }
    this.rubrosSubRubrosProductoSelect = React.createRef();
  }
  handlerVolverAPedidoClick(numeroPedido){
    this.props.history.push('/pedido/' + numeroPedido)
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = JSON.stringify({
      numeroPedido: this.state.pedido.numeroPedido,
      identificadorProducto: this.rubrosSubRubrosProductoSelectCallbacks.getProductoValue(),
      cantidad: this.rubrosSubRubrosProductoSelectCallbacks.getCantidadValue(),
    });
    RestClient.agregarAPedido(data).then(data => this.handlerVolverAPedidoClick(this.state.pedido.numeroPedido));
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
                  </div>
                  <div className="float-right text-right">
                    <div>
                      <Button theme="danger" className="mb-2 mr-1" onClick={this.handlerVolverAPedidoClick.bind(this,pedido.numeroPedido)}>
                        Volver a Pedido
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="p-0 pb-3">
                  <Col lg="8" className="mb-4">
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                      <RubrosSubRubrosProductoSelect ref={this.rubrosSubRubrosProductoSelect} onMounted={callbacks => this.rubrosSubRubrosProductoSelectCallbacks=callbacks}/>
                      <Button type="submit" >Agregar Producto</Button>
                    </Form>
                  </Col>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}
export default AgregarItemEnPedido;
