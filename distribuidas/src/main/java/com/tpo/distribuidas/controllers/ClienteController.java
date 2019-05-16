package com.tpo.distribuidas.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import controlador.Controlador;
import view.ClienteView;

@RestController
public class ClienteController {

	Controlador c = Controlador.getInstancia();
	
	@RequestMapping("/get_clientes")
	public List<ClienteView> getClientes() {
		return c.getClientes();
	}

	
}
