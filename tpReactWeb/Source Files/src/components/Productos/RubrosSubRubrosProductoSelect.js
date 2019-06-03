import React, {Component} from 'react';
import RestClient from "../../rest_api/RestClient";
import {FormSelect, Col, FormInput} from "shards-react";

class RubrosSubRubrosProductoSelect extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            rubros: [],
            subRubros: [],
            productos: [],
            isLoaded:false,
            rubroId: '',
            subRubroId: '',
            productoId: '',
            cantidad: ''
        };
        this.subRubro = React.createRef();
        this.producto = React.createRef();

    }

    getProductoValue(){
      return this.state.productoId
    }
    getRubroValue(){
        return this.state.rubroId
    }

    getSubRubroValue(){
        return this.state.subRubroId
    }

    getCantidadValue(){
      return this.state.cantidad
    }

    componentDidMount() {
        if(this.props.onMounted){
            this.props.onMounted({
                getRubroValue: this.getRubroValue.bind(this),
                getSubRubroValue: this.getSubRubroValue.bind(this),
                getProductoValue: this.getProductoValue.bind(this),
                getCantidadValue: this.getCantidadValue.bind(this),

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
       RestClient.getProductosBySubRubro(event.target.value).then(json => {this.setState({ productos: json})});
       this.setState({subRubroId: event.target.value});
    }

    handleProductosChange(event){
        this.setState({productoId: event.target.value});
    }

    changeCantidadHandler = event => {
      this.setState({
        cantidad: event.target.value
      });
    };

    render() {
        var  {isLoaded, rubros, subRubros, productos} =this.state;

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
                    <label htmlFor="rubros">Producto</label>
                    <FormSelect id="feInputState3" ref={this.producto} onClick={this.handleProductosChange.bind(this)}>
                      {productos.map((producto) => <option key={producto.identificador} value={producto.identificador}>{producto.marca} - {producto.nombre}</option>)}
                    </FormSelect>
                  </Col>
                  <Col md="12" className="form-group">
                    <label htmlFor="feInputCantidad">Cantidad</label>
                    <FormInput id="feInputCantidad" onChange={this.changeCantidadHandler}/>
                  </Col>
                </div>
            );
        }
    }
}

export default RubrosSubRubrosProductoSelect;

