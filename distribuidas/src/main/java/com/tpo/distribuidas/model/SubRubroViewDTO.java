package com.tpo.distribuidas.model;

import view.SubRubroView;

public class SubRubroViewDTO {

	private int codigo;
	private String descripcion;
	private RubroViewDTO rubro;
	
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
	public RubroViewDTO getRubro() {
		return rubro;
	}
	public void setRubro(RubroViewDTO rubro) {
		this.rubro = rubro;
	}
	public SubRubroView toSubRubroView() {
		return new SubRubroView(codigo, descripcion, rubro.toRubroView());
	}
	
	
}
