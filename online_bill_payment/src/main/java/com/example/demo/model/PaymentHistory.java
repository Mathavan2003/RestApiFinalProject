package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="payment_history_table")
public class PaymentHistory {
	@Id
	private int payment_history_id;
	private int user_id;
	private int bill_id;
	private double transaction_amount;
	private String transaction_status;
	
	
	
	public PaymentHistory(int payment_history_id, int user_id, int bill_id, double transaction_amount,
			String transaction_status) {
		super();
		this.payment_history_id = payment_history_id;
		this.user_id = user_id;
		this.bill_id = bill_id;
		this.transaction_amount = transaction_amount;
		this.transaction_status = transaction_status;
	}
	public PaymentHistory() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getPayment_history_id() {
		return payment_history_id;
	}
	public void setPayment_history_id(int payment_history_id) {
		this.payment_history_id = payment_history_id;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public int getBill_id() {
		return bill_id;
	}
	public void setBill_id(int bill_id) {
		this.bill_id = bill_id;
	}
	public double getTransaction_amount() {
		return transaction_amount;
	}
	public void setTransaction_amount(double transaction_amount) {
		this.transaction_amount = transaction_amount;
	}
	public String getTransaction_status() {
		return transaction_status;
	}
	public void setTransaction_status(String transaction_status) {
		this.transaction_status = transaction_status;
	}
	
	

}
