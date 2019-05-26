package com.tpo.distribuidas.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tpo.distribuidas.exceptions.CodeAndMessageException;
import com.tpo.distribuidas.exceptions.CodeAndMessageException.ErrorCode;

import controlador.Controlador;
import exceptions.RubroException;
import exceptions.SubRubroException;
import view.RubroView;
import view.SubRubroView;

@CrossOrigin(origins = "*", allowedHeaders = "*")
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
	
	@RequestMapping("/get_rubro_by_id/{codigo}")
	public RubroView getRubroById(@PathVariable int codigo) {
		try {
			return c.getRubroById(codigo);	
		} catch (RubroException e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.RUBRO_INEXISTENTE, "El rubro no existe");
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	}
	
	@RequestMapping("/get_subrubros")
	public List<SubRubroView> getSubRubros() {
		try {			
			return c.getSubRubros();
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	}
	
	@RequestMapping("/get_subrubro_by_id/{codigo}")
	public SubRubroView getSubRubroById(@PathVariable int codigo) {
		try {
			return c.getSubRubroById(codigo);	
		} catch (SubRubroException e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.SUBRUBRO_INEXISTENTE, "El subrubro no existe");
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	}
	
	@RequestMapping("/get_subrubros_by_rubro_id/{codigoRubro}")
	public List<SubRubroView> getSubRubrosByRubroId(@PathVariable int codigoRubro) {
		try {
			return c.getSubRubrosByRubroId(codigoRubro);	
		} catch (RubroException e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.RUBRO_INEXISTENTE, "El rubro no existe");
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	}
	
	
	
}
