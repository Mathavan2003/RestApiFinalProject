package com.example.demo.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_details")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int user_id;
	private String first_name;
	private String last_name;
	private String email;
	private String username;
	private String password;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="fk_bill_id")
	private Bill bill;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="fk_payment_history_id")
	private List<PaymentHistory> ph;
	
	
	public int getUser_id() {
		return user_id;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
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
	public Bill getBill() {
		return bill;
	}
	public void setBill(Bill bill) {
		this.bill = bill;
	}
	public List<PaymentHistory> getPh() {
		return ph;
	}
	public void setPh(List<PaymentHistory> ph) {
		this.ph = ph;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public User(int user_id, String first_name, String last_name, String email, String username, String password,
			Bill bill, List<PaymentHistory> ph) {
		super();
		this.user_id = user_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.username = username;
		this.password = password;
		this.bill = bill;
		this.ph = ph;
	}
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
