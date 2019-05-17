package com.tpo.distribuidas.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tpo.distribuidas.exceptions.CodeAndMessageException;
import com.tpo.distribuidas.exceptions.CodeAndMessageException.ErrorCode;

import controlador.Controlador;
import view.ClienteView;

@RestController
public class ClienteController {

	Controlador c = Controlador.getInstancia();
	
	@RequestMapping("/get_clientes")
	public List<ClienteView> getClientes() {
		try {
			return c.getClientes();			
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	}
		
}
