import React, {Component} from 'react';
import RestClient from "../../rest_api/RestClient";

class SubRubros extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            subRubros: [],
            isLoaded:false
        }
    }

    componentWillMount() {
        RestClient.getSubRubros().then(json => {this.setState({ subRubros: json, isLoaded: true})});
    }

    handlerClickItem(codigo) {
        this.props.history.push('/subrubro/' + codigo)
    }

    render() {

        var  {isLoaded, subRubros} =this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        }
        else
        {
            return (
                <div >
                    <ul className="listSubRubros">
                        {
                            subRubros.map(item => (
                                <li key={item.codigo} onClick={this.handlerClickItem.bind(this,item.codigo)}> Nro SubRubro: {item.codigo}</li>
                            ))
                        }
                    </ul>
                </div>
            );
        }
    }
}

export default SubRubros;