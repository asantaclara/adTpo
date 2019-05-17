package com.tpo.distribuidas.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tpo.distribuidas.exceptions.CodeAndMessageException;
import com.tpo.distribuidas.exceptions.CodeAndMessageException.ErrorCode;

import controlador.Controlador;
import exceptions.PedidoException;
import view.RubroView;

@RestController
public class RubroController {

	Controlador c = Controlador.getInstancia();
	
	@RequestMapping("/get_rubros")
	public List<RubroView> getRubros() {
		try {
			return c.getRubros();
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	}
	
	@RequestMapping("/get_subrubros")
	public List<RubroView> getSubRubros() {
		try {			
			return c.getRubros();
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	}
	
}
