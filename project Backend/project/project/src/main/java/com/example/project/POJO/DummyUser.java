package com.example.project.POJO;

import com.example.project.Entities.Login;

public class DummyUser {
	private int userid;
	private String firstname;
	private String lastname;
	private String email;
	private String mobileno;
	private String password;
	private String address;
	Login log;
	int Role;
	
	
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobileno() {
		return mobileno;
	}
	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Login getLog() {
		return log;
	}
	public void setLog(Login log) {
		this.log = log;
	}
	public int getRole() {
		return Role;
	}
	public void setRole(int role) {
		Role = role;
	}
	public DummyUser() {
		super();
		
	}
	@Override
	public String toString() {
		return "DummyUser [userid=" + userid + ", firstname=" + firstname + ", lastname=" + lastname + ", email="
				+ email + ", mobileno=" + mobileno + ", password=" + password + ", address=" + address + ", log=" + log
				+ ", Role=" + Role + "]";
	}
	public DummyUser(int userid, String firstname, String lastname, String email, String mobileno, String password,
			String address, Login log, int role) {
		super();
		this.userid = userid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.mobileno = mobileno;
		this.password = password;
		this.address = address;
		this.log = log;
		Role = role;
	}
	
	

}
