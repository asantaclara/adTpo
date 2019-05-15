package com.tpo.distribuidas.model;

import view.ClienteView;

public class ClienteViewDTO {

	private int numero;
	private String nombre;
	private String cuil;
	private boolean activo;
	
	public int getNumero() {
		return numero;
	}
	public void setNumero(int numero) {
		this.numero = numero;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getCuil() {
		return cuil;
	}
	public void setCuil(String cuil) {
		this.cuil = cuil;
	}
	public boolean isActivo() {
		return activo;
	}
	public void setActivo(boolean activo) {
		this.activo = activo;
	}
	public ClienteView toClienteView() {
		return new ClienteView(numero, nombre, cuil, activo);
	}
	
	
}
