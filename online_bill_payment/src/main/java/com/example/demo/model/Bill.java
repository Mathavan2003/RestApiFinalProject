package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "bill_details")
public class Bill {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int bill_id;
	private int user_id;
	private String biller_name;
	private double amount;
	private String duedate;
	private String status;
	
	public int getBill_id() {
		return bill_id;
	}
	public void setBill_id(int bill_id) {
		this.bill_id = bill_id;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getBiller_name() {
		return biller_name;
	}
	public void setBiller_name(String biller_name) {
		this.biller_name = biller_name;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public String getDuedate() {
		return duedate;
	}
	public void setDuedate(String duedate) {
		this.duedate = duedate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Bill(int bill_id, int user_id, String biller_name, double amount, String duedate, String status) {
		super();
		this.bill_id = bill_id;
		this.user_id = user_id;
		this.biller_name = biller_name;
		this.amount = amount;
		this.duedate = duedate;
		this.status = status;
	}
	public Bill() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
