import React, {Component} from 'react';
import RestClient from "../../rest_api/RestClient";

class Rubros extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            rubros: [],
            isLoaded:false
        }
    }

    componentWillMount() {
        RestClient.getRubros().then(json => {this.setState({ rubros: json, isLoaded: true})});
    }

    handlerClickItem(codigo) {
        this.props.history.push('/rubro/' + codigo)
    }

    render() {

        var  {isLoaded, rubros} =this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        }
        else
        {
            return (
                <div >
                    <ul className="listRubros">
                        {
                            rubros.map(item => (
                                <li key={item.codigo} onClick={this.handlerClickItem.bind(this,item.codigo)}> Nro Rubro: {item.codigo}</li>
                            ))
                        }
                    </ul>
                </div>
            );
        }
    }
}

export default Rubros;