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
import ClientesSelect from "../components/Clientes/ClientesSelect";

class AltaPedido extends Component {

  constructor(props) {
    super(props);
    this.state  = {
    };
    this.clienteSelect = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Abriendo pedido');
    const data = JSON.stringify({
      cliente:  this.clienteSelectCallbacks.getClienteValue()});
    RestClient.altaPedido(data).then(response => this.irANuevoPedido(response));
  }

  irANuevoPedido(numeroPedido){
    if (numeroPedido) {
      this.props.history.push('/pedido/' + numeroPedido);
    }
  }

  render() {

      return (
        <Container fluid className="main-content-container px-4">
          {/* Page Header */}
          <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="Nuevo Pedido" className="text-sm-left"/>
          </Row>
          <Row>
            <Col>
              <Card small className="mb-4">
                <CardHeader className="border-bottom">
                </CardHeader>
                <CardBody className="p-0 pb-3">
                  <Col lg="8" className="mb-4">
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                      <ClientesSelect ref={this.clienteSelect} onMounted={callbacks => this.clienteSelectCallbacks=callbacks}/>
                      <br/>
                      <Button type="submit" >Nuevo Pedido</Button>
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
export default AltaPedido;
