package com.tpo.distribuidas.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tpo.distribuidas.exceptions.CodeAndMessageException;
import com.tpo.distribuidas.exceptions.CodeAndMessageException.ErrorCode;
import com.tpo.distribuidas.model.UsuarioViewDTO;

import controlador.Controlador;
import exceptions.CambioPasswordException;
import exceptions.LoginException;
import exceptions.UsuarioException;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class LoginController {

	Controlador c = Controlador.getInstancia();
	
	@PostMapping("/login")
	public boolean login(@RequestBody UsuarioViewDTO usuario){
			try {
				return c.login(usuario.getNombre(), usuario.getPassword());
			} catch (LoginException e) {
				throw new CodeAndMessageException(HttpStatus.FORBIDDEN, ErrorCode.PASSWORD_INCORRECTA, "La password no corresponde al usuario");
			} catch (CambioPasswordException e) {
				throw new CodeAndMessageException(HttpStatus.NOT_ACCEPTABLE, ErrorCode.PASSWORD_VENCIDA, "La password esta vencida, por favor cambiela");
			} catch (UsuarioException e) {
				throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.DATOS_INCORRECTOS, "El usuario no existe");
			} catch (Exception e) {
				throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
			}
	}
	
	@PostMapping("/cambiar_password")
	public void cambiarPassword(@RequestBody UsuarioViewDTO usuario) {
		try {
			c.cambioPassword(usuario.getNombre(), usuario.getPassword());
		} catch (CambioPasswordException e) {
			throw new CodeAndMessageException(HttpStatus.NOT_ACCEPTABLE, ErrorCode.PASSWORD_NO_SEGURA, "La password elegida no cumple con los requisitos de seguridad");
		} catch (UsuarioException e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.USUARIO_INEXISTENTE, "El usuario no existe");
		} catch (Exception e) {
			throw new CodeAndMessageException(HttpStatus.NOT_FOUND, ErrorCode.ERROR_INESPERADO, "Ha ocurrido un error inesperado");
		}
	}
}
