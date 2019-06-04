import React, {Component} from 'react';
import RestClient from "../../rest_api/RestClient";
import {FormSelect, Col, FormInput} from "shards-react";

class NuevoProducto extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            rubros: [],
            subRubros: [],
            isLoaded:false,
            rubroId: '',
          subRubroId: '',
          precio: '',

          nombre: '',
          marca: '',
          codigoBarras: '',
        };
        this.subRubro = React.createRef();
        this.producto = React.createRef();

    }

    getProductoValue(){
      return this.state.productoId
    }
    getRubroValue(){
      return {
        codigo: this.state.rubroId,
      }
    }

    getSubRubroValue(){
      return {
        codigo: this.state.subRubroId,
      }
    }

    getPrecioValue(){
      return this.state.precio
    }

    getNombreValue(){
        return this.state.nombre
    }

    getMarcaValue(){
        return this.state.marca
    }

    getCodigoBarrasValue(){
      return this.state.codigoBarras
    }

    componentDidMount() {
        if(this.props.onMounted){
            this.props.onMounted({
                getRubroValue: this.getRubroValue.bind(this),
                getSubRubroValue: this.getSubRubroValue.bind(this),
                getProductoValue: this.getProductoValue.bind(this),
                getPrecioValue: this.getPrecioValue.bind(this),
                getNombreValue: this.getNombreValue.bind(this),
                getMarcaValue: this.getMarcaValue.bind(this),
                getCodigoBarrasValue: this.getCodigoBarrasValue.bind(this),

            })
        }
    }

    componentWillMount() {
        RestClient.getRubros().then(json => {this.setState({ rubros: json, isLoaded: true})});
    }

    handleRubrosChange(event){
       RestClient.getSubRubrosByRubro(event.target.value).then(json => {this.setState({ subRubros: json})});
       this.setState({rubroId: event.target.value});
    }

    handleSubRubrosChange(event){
       this.setState({subRubroId: event.target.value});
    }

    changePrecioHandler = event => {
      this.setState({
        precio: event.target.value
      });
    };
    changeNombreHandler = event => {
      this.setState({
        nombre: event.target.value
      });
    };
    changeMarcaHandler = event => {
      this.setState({
        marca: event.target.value
      });
    };
    changeCodigoBarrasHandler = event => {
      this.setState({
        codigoBarras: event.target.value
      });
    };

    render() {
        var  {isLoaded, rubros, subRubros} =this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                  <Col>
                    <label htmlFor="rubros">Rubro</label>
                    <FormSelect id="feInputState" onClick={this.handleRubrosChange.bind(this)}>
                        {rubros.map((rubro) => <option key={rubro.codigo} value={rubro.codigo}>{rubro.descripcion}</option>)}
                    </FormSelect>
                    <label htmlFor="subRubros">Subrubro</label>
                    <FormSelect id="feInputState2" ref={this.subRubro} onClick={this.handleSubRubrosChange.bind(this)}>
                        {subRubros.map((subrubro) => <option key={subrubro.codigo} value={subrubro.codigo}>{subrubro.descripcion}</option>)}
                    </FormSelect>
                  </Col>
                  <Col md="12" className="form-group">
                    <label htmlFor="feInputNombre">Nombre</label>
                    <FormInput id="feInputNombre" onChange={this.changeNombreHandler}/>
                  </Col>
                  <Col md="12" className="form-group">
                    <label htmlFor="feInputMarca">Marca</label>
                    <FormInput id="feInputMarca" onChange={this.changeMarcaHandler}/>
                  </Col>
                  <Col md="12" className="form-group">
                    <label htmlFor="feInputPrecio">Precio</label>
                    <FormInput id="feInputPrecio" onChange={this.changePrecioHandler}/>
                  </Col>
                  <Col md="12" className="form-group">
                    <label htmlFor="feInputCodigoBarras">Codigo de Barras</label>
                    <FormInput id="feInputCodigoBarras" onChange={this.changeCodigoBarrasHandler}/>
                  </Col>
                </div>
            );
        }
    }
}

export default NuevoProducto;

