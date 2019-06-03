import React, {Component} from 'react';
import './Rubros.css';
import { Link } from 'react-router-dom';
import RestClient from "../../rest_api/RestClient";

class Rubro extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            rubro: [],
            isLoaded:false
        }
    }

    componentWillMount() {
        RestClient.getRubro(this.props.match.params.codigo).then(json => {this.setState({ rubro: json, isLoaded: true})});
    }

    render() {
        var  {isLoaded, rubro} = this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="Rubro">
                    <li>Codigo: {rubro.codigo}</li>
                    <li>Descripcion: {rubro.descripcion}</li>
                    <li>Habilitado: {(rubro.habilitado) ? 'SI' : 'NO'}</li>
                    <br/>
                    <Link  to="/rubros">Volver</Link>
                </div>
            );
        }
    }
}
export default Rubro;
