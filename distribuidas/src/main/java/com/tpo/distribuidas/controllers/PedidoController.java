package com.tpo.distribuidas.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tpo.distribuidas.exceptions.CodeAndMessageException;
import com.tpo.distribuidas.exceptions.CodeAndMessageException.ErrorCode;
import com.tpo.distribuidas.model.AuxiliarItemPedido;

import controlador.Controlador;
import exceptions.ClienteException;
import exceptions.PedidoException;
import exceptions.ProductoException;
import view.PedidoView;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class PedidoController {

	Controlador c = Controlador.getInstancia();
	
	@RequestMapping("/get_pedido_by_id/{numero}")
	public PedidoView getPedidoById(@PathVariable int numero) {
		try {
			return c.getPedidoById(numero);
		} catch (PedidoException e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.PEDIDO_INEXISTENTE, "El pedido no existe");
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	}
	
	@PostMapping("/facturar_pedido/{numero}")
	public void facturar(@PathVariable int numero) {
		try {
			c.facturarPedido(numero);
		} catch (PedidoException e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.PEDIDO_INEXISTENTE, "El pedido no existe");
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	}
	
	@PostMapping("/eliminar_pedido/{numeroPedido}")
	public void eliminar(@PathVariable int numeroPedido){
		try {
			c.eliminarPedido(numeroPedido);	
		} catch (NullPointerException e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.PEDIDO_INEXISTENTE, "El pedido no existe");
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	}
	
	@PostMapping("/agregar_producto_en_pedido")
	public void agregarProductoEnPedido(@RequestBody AuxiliarItemPedido item){
		try {
			c.agregarProductoEnPedido(item.getNumeroPedido(), item.getIdentificadorProducto(), item.getCantidad());
		} catch (PedidoException e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.PEDIDO_INEXISTENTE, "El pedido no existe");
		} catch (ProductoException e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.PRODUCTO_INEXISTENTE, "El producto no existe");
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	}
	
	@PostMapping("/crear_pedido/{cuit}")
	public int crearPedido(@PathVariable String cuit) {
		try {
			return c.crearPedido(cuit);
		} catch (ClienteException e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.CLIENTE_INEXISTENTE, "El cliente no existe");
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	}
	
	@PostMapping("/crear_pedido")
	public int crearPedido(@RequestBody PedidoView p) {
		try {
			return c.crearPedido(p);
		} catch (ClienteException e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.CLIENTE_INEXISTENTE, "El cliente no existe");
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	}
	
	@RequestMapping("/get_pedidos")
	public List<PedidoView> getPedidos() {
		try {
			return c.getPedidos();
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	}
	
}