import React, {Component} from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import RestClient from "../rest_api/RestClient";
import { Button } from "shards-react";

class Productos extends Component {

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
        <Container fluid className="main-content-container px-4">
          {/* Page Header */}
          <Row noGutters className="page-header py-4">
            <div>
              <div className="float-left">
                <PageTitle sm="4" title="Productos" className="text-sm-left"/>
              </div>
              <div className="float-right">
                <Button size="sm" theme="info" className="mb-2 mr-1" onClick={this.handlerNuevoProductoClick.bind(this)}>
                  Nuevo Producto
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
                      <th>ID Producto</th>
                      <th>Nombre</th>
                      <th>Marca</th>
                      <th>Rubro</th>
                      <th>SubRubro</th>
                      <th>Codigo</th>
                      <th>Precio Unitario</th>
                      <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      productos.map(item => (
                        <tr key={item.identificador}>
                          <td>{item.identificador}</td>
                          <td>{item.nombre}</td>
                          <td>{item.marca}</td>
                          <td>{item.rubro.descripcion}</td>
                          <td>{item.subRubro.descripcion}</td>
                          <td>{item.codigoBarras}</td>
                          <td>{item.precio}</td>
                          <td>
                            <Button theme="danger" className="mb-2 mr-1" onClick={this.handlerEliminarClickItem.bind(this,item.identificador)}>
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

export default Productos;
