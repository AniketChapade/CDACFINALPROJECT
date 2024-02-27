package com.example.project.Entities;



import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="USERS")
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="USER_ID")
	private  int userId;
	
	
	@Column(name="FIRST_NAME")
	private String firstName;
	
	@Column(name="LAST_NAME")
	private String LastName;
	

	public User() {
		super();
		
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", firstName=" + firstName + ", LastName=" + LastName + ", email=" + email
				+ ", mobileNo=" + mobileNo + ", password=" + password + ", address=" + address + ", loginId=" + loginId
				+ "]";
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return LastName;
	}

	public void setLastName(String lastName) {
		LastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
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

	public Login getLoginId() {
		return loginId;
	}

	public void setLoginId(Login loginId) {
		this.loginId = loginId;
	}

	@Column(name="EMAIL")
	private String email;
	
	@Column(name="MOBILE_NO")
    private String  mobileNo;
	
	@Column(name="PASSWORD")
    private String password;
	
	@Column(name="ADDRESS")
    private String address;

	
	@OneToOne
	@Cascade(value = CascadeType.ALL)
	@JoinColumn(name="LOGIN_ID")
	private Login loginId;





	public User(int  string, String firstName, String lastName, String email, String mobileNo, String login,
			String i, Login loginId) {
		super();
		this.userId = string;
		this.firstName = firstName;
		LastName = lastName;
		this.email = email;
		this.mobileNo = mobileNo;
		this.password = login;
		this.address = i;
		this.loginId = loginId;
	}

	public User( String firstName, String lastName, String email, String mobileNo, String login,
			String i, Login loginId) {
		super();
		this.firstName = firstName;
		LastName = lastName;
		this.email = email;
		this.mobileNo = mobileNo;
		this.password = login;
		this.address = i;
		this.loginId = loginId;
	}
	

	
}
