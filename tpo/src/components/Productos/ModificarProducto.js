import React, {Component} from 'react';
import RestClient from "../../rest_api/RestClient";
import RubrosSubRubrosSelect from "../Rubros/RubrosSubRubrosSelect";

class ModificarProducto extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            identificador: '',
            nombre: '',
            marca: '',
            codigoBarras: '',
            precio: ''
        };
        this.rubroYSubRubroSelect = React.createRef();
    }

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
    changePrecioHandler = event => {
        this.setState({
            precio: event.target.value
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        const data = JSON.stringify({
            identificador: this.state.identificador,
            nombre: this.state.nombre,
            marca: this.state.marca,
            codigoBarras: this.state.codigoBarras,
            precio: this.state.precio,
            rubro: this.rubroYSubRubroSelectCallbacks.getRubroValue(),
            subRubro: this.rubroYSubRubroSelectCallbacks.getSubRubroValue()
        });
        RestClient.modificarProducto(data);
    }

    render() {
        return (
            <div >
                <strong>En Reparacion // Habria que armar bien el modificar en el controlador, porque por ahora no hace nada.
                </strong>


                {/*<RubrosSubRubrosSelect ref={this.rubroYSubRubroSelect} onMounted={callbacks => this.rubroYSubRubroSelectCallbacks=callbacks}/>*/}
                {/*<form onSubmit={this.handleSubmit.bind(this)}>*/}
                {/*    <li>*/}
                {/*        <label htmlFor="nombre">Nombre</label>*/}
                {/*        <input id="nombre" name="nombre" type="text" value={this.state.nombre} onChange={this.changeNombreHandler}/>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <label htmlFor="marca">Marca</label>*/}
                {/*        <input id="marca" name="marca" type="text" value={this.state.marca} onChange={this.changeMarcaHandler}/>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <label htmlFor="codigoBarras">Codigo de Barras</label>*/}
                {/*        <input id="codigoBarras" name="codigoBarras" type="text" value={this.state.codigoBarras} onChange={this.changeCodigoBarrasHandler}/>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <label htmlFor="precio">Precio</label>*/}
                {/*        <input id="precio" name="precio" type="text" value={this.state.precio} onChange={this.changePrecioHandler}/>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <button>Dar de Alta</button>*/}
                {/*    </li>*/}
                {/*</form>*/}
            </div>
        );
    }
}
export default ModificarProducto;