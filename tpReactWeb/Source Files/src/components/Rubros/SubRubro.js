import React, {Component} from 'react';
import './SubRubros.css';
import { Link } from 'react-router-dom';
import RestClient from "../../rest_api/RestClient";

class SubRubro extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            subRubro: [],
            isLoaded:false
        }
    }

    handleRubroItemClick(codigo) {
        this.props.history.push('/rubro/' + codigo)
    }

    componentWillMount() {
        RestClient.getSubRubro(this.props.match.params.codigo).then(json => {this.setState({ subRubro: json, isLoaded: true})});
    }

    render() {
        var  {isLoaded, subRubro} = this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="SubRubro">
                    <li>Codigo: {subRubro.codigo}</li>
                    <li>Descripcion: {subRubro.descripcion}</li>
                    <li onClick={this.handleRubroItemClick.bind(this,subRubro.rubro.codigo)}> Rubro: ({subRubro.rubro.codigo}) - {subRubro.rubro.descripcion}</li>

                    <br/>
                    <Link  to="/subrubros">Volver</Link>
                </div>
            );
        }
    }
}
export default SubRubro;
