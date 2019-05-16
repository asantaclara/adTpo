package com.tpo.distribuidas.config;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.tpo.distribuidas.exceptions.CodeAndMessageException;

@ControllerAdvice
public class ControllerAdviceConfig {

	@ExceptionHandler({CodeAndMessageException.class})
	void handleCodeAndMessageException(HttpServletResponse response, CodeAndMessageException e) throws IOException {
		response.sendError(e.getHttpStatus().value(), e.toCodeAndMessageString());
	}
	
//	@ExceptionHandler({LoginException.class})
//	void handleLoginException(HttpServletResponse response) throws IOException {
//		response.sendError(HttpStatus., "Los datos ingresado no son correctos, reingrese");
//	}
//	
//	@ExceptionHandler({CambioPasswordException.class})
//	void handleCambioPasswordException(HttpServletResponse response) throws IOException {
//		response.sendError(HttpStatus.BAD_REQUEST.value(), "La password esta vencida, debe cambiarla");
//	}
//	
//	@ExceptionHandler({UsuarioException.class})
//	void handleUsuarioException(HttpServletResponse response) throws IOException {
//		response.sendError(HttpStatus.BAD_REQUEST.value(), "Los datos ingresado no son correctos, reingrese");
//	}
//	
//	@ExceptionHandler({PedidoException.class})
//	void handlePedidoException(HttpServletResponse response) throws IOException {
//		response.sendError(HttpStatus.BAD_REQUEST.value(), "El pedido es inexistente");
//	}
//	
	
	
}
