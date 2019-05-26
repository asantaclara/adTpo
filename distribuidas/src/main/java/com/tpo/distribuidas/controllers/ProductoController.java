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

import controlador.Controlador;
import exceptions.ProductoException;
import exceptions.RubroException;
import exceptions.SubRubroException;
import view.ProductoView;
import view.RubroView;
import view.SubRubroView;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ProductoController {

	Controlador c = Controlador.getInstancia();

	@RequestMapping("/get_productos")
	public List<ProductoView> getProductos() {
		
		try {
			return c.getProductos();	
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	} 

	@RequestMapping("/get_productos_by_rubro/{rubro}")
	public List<ProductoView> getProductosByRubro(@PathVariable int rubro) {
		
		try {
			return c.getProductosByRubro(new RubroView(rubro, null, true));	
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	}
	
	@RequestMapping("/get_producto_by_id/{id}")
	public ProductoView getProductoById(@PathVariable int id) {
		try {
			return c.getProductoById(id);	
		} catch (ProductoException e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.PRODUCTO_INEXISTENTE, "El producto no existe");
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	}

	@RequestMapping("/get_productos_by_subrubro/{subRubro}")
	public List<ProductoView> getProductosBySubrubro(@PathVariable int subRubro) {
		try {
			return c.getProductosBySubRubro(new SubRubroView(subRubro, null, null));	
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	}

	@PostMapping("/alta_producto")
	public void altaProducto(@RequestBody ProductoView producto){
		try {
			c.altaProducto(producto);
		} catch (RubroException e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.RUBRO_INEXISTENTE, "El rubro no existe");
		} catch (SubRubroException e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.SUBRUBRO_INEXISTENTE, "El subrubro no existe");
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	}

	@PostMapping("/baja_producto/{codigoProducto}")
	public void bajaProducto(@PathVariable int codigoProducto) {
		try {
			c.bajaProducto(new ProductoView(null, null, null, null, null, 0, codigoProducto));
		} catch (ProductoException e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.PRODUCTO_INEXISTENTE, "El producto no existe");
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	}
	
	@PostMapping("/modificar_producto")
	public void bajaProducto(@RequestBody ProductoView recibido) {
		try {
			c.modificaProducto(recibido);
		} catch (ProductoException e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.PRODUCTO_INEXISTENTE, "El producto no existe");
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	}
	
	
}
