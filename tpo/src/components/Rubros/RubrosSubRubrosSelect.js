import React, {Component} from 'react';
import RestClient from "../../rest_api/RestClient";

class RubrosSubRubrosSelect extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            rubros: [],
            subRubros: [],
            isLoaded:false,
            rubroId: '',
            subRubroId: ''
        };
        this.subRubro = React.createRef();

    }

    getRubroValue(){
        return {
            codigo: this.state.rubroId
        }
    }

    getSubRubroValue(){
        return {
            codigo: this.state.subRubroId
        }
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
        this.setState({subRubroId: event.target.value});
    }

    render() {
        var  {isLoaded, rubros, subRubros} =this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <li>
                        <label htmlFor="rubros">Rubros</label>
                        <select onClick={this.handleRubrosChange.bind(this)}>
                            {rubros.map((rubro) => <option key={rubro.codigo} value={rubro.codigo}>{rubro.descripcion}</option>)}
                        </select>
                        <label htmlFor="subRubros">Subrubros</label>
                        <select ref={this.subRubro} onClick={this.handleSubRubrosChange.bind(this)}>
                            {subRubros.map((rubro) => <option key={rubro.codigo} value={rubro.codigo}>{rubro.descripcion}</option>)}
                        </select>
                    </li>
                </div>
            );
        }
    }
}

export default RubrosSubRubrosSelect;