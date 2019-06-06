import React, {Component} from 'react';
import RestClient from "../../rest_api/RestClient";
import {FormSelect, Col, FormInput} from "shards-react";

class RubrosSubRubroSelect extends Component {

  constructor(props) {
    super(props);
    this.state  = {
      rubros: [],
      subRubros: [],
      isLoaded:false,
      rubroId: '',
      subRubroId: '',
    };
    this.subRubro = React.createRef();
  }

  getRubroValue(){
    return this.state.rubroId
  }

  getSubRubroValue(){
    return this.state.subRubroId
  }
  componentDidMount() {
    if(this.props.onMounted){
      this.props.onMounted({
        getRubroValue: this.getRubroValue.bind(this),
        getSubRubroValue: this.getSubRubroValue.bind(this)
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
          </Col>
        </div>
      );
    }
  }
}

export default RubrosSubRubroSelect;

