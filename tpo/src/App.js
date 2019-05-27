import React from 'react';
import Clientes from './components/Clientes/Clientes';
import Cliente from './components/Clientes/Cliente';
import Pedidos from './components/Pedidos/Pedidos';
import Pedido from './components/Pedidos/Pedido';
import Productos from './components/Productos/Productos';
import Producto from './components/Productos/Producto';
import SubRubro from './components/Rubros/SubRubro';
import SubRubros from './components/Rubros/SubRubros';
import Rubro from './components/Rubros/Rubro';
import Rubros from './components/Rubros/Rubros';
import AltaProducto from './components/Productos/AltaProducto';
import BajaProducto from './components/Productos/BajaProducto';
import BajaPedido from './components/Pedidos/BajaPedido';
import ModificarProducto from './components/Productos/ModificarProducto';
import Footer from './Footer'
import Home from './Home/Home'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Header from "./Header";
import AltaPedido from "./components/Pedidos/AltaPedido";
import FacturarPedido from "./components/Pedidos/FacturarPedido";
import AgregarProductoEnPedido from "./components/Pedidos/AgregarProductoEnPedido";
import EliminarProductoDePedido from "./components/Pedidos/EliminarProductoDePedido";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/clientes" component={Clientes} />
                <Route path="/cliente/:numero" component={Cliente} />
                <Route path="/pedidos" component={Pedidos} />
                <Route path="/pedido/:numeroPedido" component={Pedido} />
                <Route path="/productos" component={Productos} />
                <Route path="/producto/:identificador" component={Producto} />
                <Route path="/subrubros" component={SubRubros} />
                <Route path="/subrubro/:codigo" component={SubRubro} />
                <Route path="/rubros" component={Rubros} />
                <Route path="/rubro/:codigo" component={Rubro} />
                <Route path="/altaproducto" component={AltaProducto} />
                <Route path="/bajaproducto" component={BajaProducto} />
                <Route path="/modificarproducto" component={ModificarProducto} />
                <Route path="/altapedido" component={AltaPedido} />
                <Route path="/bajapedido" component={BajaPedido} />
                <Route path="/facturarpedido" component={FacturarPedido} />
                <Route path="/agregarproductoenpedido" component={AgregarProductoEnPedido} />
                <Route path="/eliminarproductodepedido" component={EliminarProductoDePedido} />


            </Router>
            <Footer />
        </div>
    );
}

export default App;