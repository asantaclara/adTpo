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
import NuevoProducto from "../components/Productos/NuevoProducto";

class AltaProducto extends Component {

  constructor(props) {
    super(props);
    this.state  = {
    };
    this.nuevoProducto = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Pedido abierto');
    const data = JSON.stringify({
      precio:  this.nuevoProductoCallbacks.getPrecioValue(),
      codigoBarras: this.nuevoProductoCallbacks.getCodigoBarrasValue(),
      marca: this.nuevoProductoCallbacks.getMarcaValue(),
      nombre: this.nuevoProductoCallbacks.getNombreValue(),
      rubro: this.nuevoProductoCallbacks.getRubroValue(),
      subRubro: this.nuevoProductoCallbacks.getSubRubroValue(),

    });
    console.log(data);
    RestClient.altaProducto(data).then(response => this.irAProductos());
  }

  irAProductos(){
    this.props.history.push('/productos');
  }

  render() {

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Nuevo Producto" className="text-sm-left"/>
        </Row>
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <Col lg="8" className="mb-4">
                  <Form onSubmit={this.handleSubmit.bind(this)}>
                    <NuevoProducto ref={this.nuevoProducto} onMounted={callbacks => this.nuevoProductoCallbacks=callbacks}/>
                    <br/>
                    <Button type="submit" >Crear Producto</Button>
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
export default AltaProducto;
