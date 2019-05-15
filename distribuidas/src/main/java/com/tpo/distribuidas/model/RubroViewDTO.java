package com.tpo.distribuidas.model;

import view.RubroView;

public class RubroViewDTO {
	
	private int codigo;
	private String descripcion;
	private boolean habilitado;
	
	public int getCodigo() {
		return codigo;
	}
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public boolean isHabilitado() {
		return habilitado;
	}
	public void setHabilitado(boolean habilitado) {
		this.habilitado = habilitado;
	}
	public RubroView toRubroView() {
		return new RubroView(codigo, descripcion, habilitado);
	}
}
