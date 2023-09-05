package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="login_credentials")
public class Register {

	@Id
	private String username;
	public Register(String username, String password, String mobile) {
		super();
		this.username = username;
		this.password = password;
		this.mobile = mobile;
	}

	private String password;
	private String mobile;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public Register() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}