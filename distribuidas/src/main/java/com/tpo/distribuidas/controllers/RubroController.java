package com.tpo.distribuidas.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import controlador.Controlador;
import exceptions.PedidoException;
import view.RubroView;

@RestController
public class RubroController {

	Controlador c = Controlador.getInstancia();
	
	@RequestMapping("/get_rubros")
	public List<RubroView> getRubros() throws PedidoException {
		return c.getRubros();
	}
	
	@RequestMapping("/get_subrubros")
	public List<RubroView> getSubRubros() throws PedidoException {
		return c.getRubros();
	}
	
}
