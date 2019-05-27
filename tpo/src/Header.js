import React from 'react';
import {Link} from 'react-router-dom'

export default class Header extends React.Component {
    render() {
        return (
            <div className="topBlue">
                <div>
                    <h3>
                        UADE - AD 2019 - REACT WEB | JSON + API CALL EXAMPLE
                    </h3>
                    <ul className="menu">
                        <li style={{listStyleType: "none"}}>
                            <Link to="/altapedido">Alta Pedido</Link>
                        </li>
                        <li style={{listStyleType: "none"}}>
                            <Link to="/bajapedido">Baja Pedido</Link>
                        </li>
                        <li style={{listStyleType: "none"}}>
                            <Link to="/agregarproductoenpedido">Agregar Producto En Pedido</Link>
                        </li>
                        <li style={{listStyleType: "none"}}>
                            <Link to="/eliminarproductodepedido">Eliminar Producto de Pedido</Link>
                        </li>
                        <li style={{listStyleType: "none"}}>
                            <Link to="/facturarpedido">Facturar Pedido</Link>
                        </li>
                        <li style={{listStyleType: "none"}}>
                            <Link to="/modificarproducto">Modificar Producto</Link>
                        </li>
                        <li style={{listStyleType: "none"}}>
                            <Link to="/bajaproducto">Baja Producto</Link>
                        </li>
                        <li style={{listStyleType: "none"}}>
                            <Link to="/altaproducto">Alta producto</Link>
                        </li>
                        <li style={{listStyleType: "none"}}>
                            <Link to="/home">Home</Link>
                        </li>
                        <li style={{listStyleType: "none"}}>
                            <Link to="/clientes">Clientes</Link>
                        </li>
                        <li style={{listStyleType: "none"}}>
                            <Link to="/pedidos">Pedidos</Link>
                        </li>
                        <li style={{listStyleType: "none"}}>
                            <Link to="/productos">Productos</Link>
                        </li>
                        <li style={{listStyleType: "none"}}>
                            <Link to="/subrubros">SubRubros</Link>
                        </li>
                        <li style={{listStyleType: "none"}}>
                            <Link to="/rubros">Rubros</Link>
                        </li>
                    </ul>
                </div>
                <hr/>
            </div>
        );
    }
}
