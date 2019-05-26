package view;

public class ItemPedidoView {

	private int numero;
	private ProductoView producto;
	private int cantidad;
	private float precio;
	
	public ItemPedidoView(ProductoView producto, int cantidad, float precio, int numero) {
		this.producto = producto;
		this.cantidad = cantidad;
		this.precio = precio;
		this.numero = numero;
	}

	public ItemPedidoView() {}
	
	public void setProducto(ProductoView producto) {
		this.producto = producto;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	public void setPrecio(float precio) {
		this.precio = precio;
	}

	public ProductoView getProducto() {
		return producto;
	}

	public int getCantidad() {
		return cantidad;
	}

	public float getPrecio() {
		return precio;
	}
	
	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

}
