package com.tpo.distribuidas.exceptions;

import org.springframework.http.HttpStatus;

public class CodeAndMessageException extends RuntimeException {
	
	public enum ErrorCode {
		DATOS_INCORRECTOS,
		PASSWORD_VENCIDA, 
		PASSWORD_NO_SEGURA, 
		USUARIO_INEXISTENTE, 
		PASSWORD_INCORRECTA, 
		PEDIDO_INEXISTENTE, 
		PRODUCTO_INEXISTENTE, 
		CLIENTE_INEXISTENTE, 
		RUBRO_INEXISTENTE, 
		SUBRUBRO_INEXISTENTE, 
		ERROR_INESPERADO
	}
	
	private HttpStatus httpStatus;
	private ErrorCode errorCode;
	private String errorMessage;

	public CodeAndMessageException(HttpStatus httpStatus, ErrorCode errorCode, String errorMessage) {
		super();
		this.errorCode = errorCode;
		this.errorMessage = errorMessage;
		this.httpStatus = httpStatus;
	}

	public CodeAndMessageException(HttpStatus httpStatus, RuntimeException e, ErrorCode errorCode, String message) {
		super(e);
		this.errorCode = errorCode;
		this.errorMessage = message;
		this.httpStatus = httpStatus;
	}
	
	public String getErrorMessage() {
		return errorMessage;
	}
	
	public ErrorCode getErrorCode() {
		return errorCode;
	}
	
	public HttpStatus getHttpStatus() {
		return httpStatus;
	}
	
	public String toCodeAndMessageString() {
		return errorCode + " - " + errorMessage;
	}
	
}
