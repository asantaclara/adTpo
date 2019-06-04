class RestClient {
    static API_URL = "http://localhost:8080";
    static GET_CLIENTES = "/get_clientes";
    static GET_CLIENTE = "/get_cliente/";
    static GET_PEDIDOS = "/get_pedidos";
    static GET_PEDIDO = "/get_pedido_by_id/";
    static GET_PRODUCTOS = "/get_productos";
    static GET_PRODUCTO = "/get_producto_by_id/";
    static GET_SUBRUBROS = "/get_subrubros";
    static GET_SUBRUBRO = "/get_subrubro_by_id/";
    static GET_RUBROS = "/get_rubros";
    static GET_RUBRO = "/get_rubro_by_id/";
    static GET_SUBRUBROS_BY_RUBRO = "/get_subrubros_by_rubro_id/";
  static GET_PRODUCTOS_BY_SUBRUBRO = "/get_productos_by_subrubro/";
  static ALTA_PRODUCTO = "/alta_producto";
  static BAJA_PRODUCTO = "/baja_producto/";
  static MODIFICAR_PRODUCTO = "/modificar_producto";
  static ALTA_PEDIDO = "/crear_pedido";
  static AGREGAR_A_PEDIDO = "/agregar_producto_en_pedido";
  static BAJA_PEDIDO = "/eliminar_pedido/";
  static FACTURAR_PEDIDO = "/facturar_pedido/";
  static ELIMINAR_ITEM = "/eliminar_producto_de_pedido";
  static LOGIN = "/login";



static getClientes() {
        return fetch(RestClient.API_URL + RestClient.GET_CLIENTES)
            .then(response => response.json());
    }

    static getCliente(numero) {
        return fetch(RestClient.API_URL + RestClient.GET_CLIENTE + numero)
            .then(response => response.json());
    }

    static getPedidos() {
        return fetch(RestClient.API_URL + RestClient.GET_PEDIDOS)
            .then(response => response.json());
    }

    static getPedido(numeroPedido) {
        return fetch(RestClient.API_URL + RestClient.GET_PEDIDO + numeroPedido)
            .then(response => response.json());
    }

    static getProductos() {
        return fetch(RestClient.API_URL + RestClient.GET_PRODUCTOS)
            .then(response => response.json());
    }

    static getProducto(identificador) {
        return fetch(RestClient.API_URL + RestClient.GET_PRODUCTO + identificador)
            .then(response => response.json());
    }

    static getSubRubros() {
        return fetch(RestClient.API_URL + RestClient.GET_SUBRUBROS)
            .then(response => response.json());
    }

    static getSubRubro(codigo) {
        return fetch(RestClient.API_URL + RestClient.GET_SUBRUBRO + codigo)
            .then(response => response.json());
    }

    static getRubros() {
        return fetch(RestClient.API_URL + RestClient.GET_RUBROS)
            .then(response => response.json());
    }

    static getRubro(codigo) {
        return fetch(RestClient.API_URL + RestClient.GET_RUBRO + codigo)
            .then(response => response.json());
    }

    static getSubRubrosByRubro(codigoRubro) {
        return fetch(RestClient.API_URL + RestClient.GET_SUBRUBROS_BY_RUBRO + codigoRubro)
            .then(response => response.json());
    }

    static altaProducto(data) {
        return fetch(RestClient.API_URL + RestClient.ALTA_PRODUCTO, {
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            },
            body: data
        });
    }

    static bajaProducto(data) {
        return fetch(RestClient.API_URL + RestClient.BAJA_PRODUCTO + data, {
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            },
            body: data
        });
    }

    static modificarProducto(data) {
        return fetch(RestClient.API_URL + RestClient.MODIFICAR_PRODUCTO, {
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            },
            body: data
        });
    }

    static getProductosBySubRubro(codigoSubRubro) {
      return fetch(RestClient.API_URL + RestClient.GET_PRODUCTOS_BY_SUBRUBRO + codigoSubRubro)
        .then(response => response.json());
    }

    static altaPedido(data) {
        return fetch(RestClient.API_URL + RestClient.ALTA_PEDIDO, {
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            },
            body: data
        }).then(response => response.json());
    }

    static agregarAPedido(data) {
        return fetch(RestClient.API_URL + RestClient.AGREGAR_A_PEDIDO, {
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            },
            body: data
        });
    }

  static eliminarItemDePedido(data) {
    return fetch(RestClient.API_URL + RestClient.ELIMINAR_ITEM, {
      method: 'POST',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json',
      },
      body: data
    });
  }

    static bajaPedido(data) {
        return fetch(RestClient.API_URL + RestClient.BAJA_PEDIDO + data, {
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            }
        });
    }

    static facturarPedido(data) {
        return fetch(RestClient.API_URL + RestClient.FACTURAR_PEDIDO + data, {
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            },
            body: data
        });
    }
    static login(data) {
        return fetch(RestClient.API_URL + RestClient.LOGIN, {
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            },
            body: data
        });
    }

}
export default RestClient;
