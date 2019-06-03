package com.tpo.distribuidas.model;

public class AuxiliarItemPedido {
	
	private int numeroPedido;
	private int identificadorProducto;
	private int cantidad;
	private int identificadorItem;

	public int getNumeroPedido() {
		return numeroPedido;
	}

	public void setNumeroPedido(int numeroPedido) {
		this.numeroPedido = numeroPedido;
	}

	public int getIdentificadorProducto() {
		return identificadorProducto;
	}

	public void setIdentificadorProducto(int identificadorProducto) {
		this.identificadorProducto = identificadorProducto;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	public int getIdentificadorItem() {
		return identificadorItem;
	}

	public void setIdentificadorItem(int identificadorItem) {
		this.identificadorItem = identificadorItem;
	}
	
	
}
