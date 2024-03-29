package com.example.project.Entities;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.example.project.POJO.DummyUser;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import jakarta.persistence.Table;
import lombok.AllArgsConstructor;

@Entity
@Table(name="Login")
@AllArgsConstructor
public class Login {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="LOGIN_ID")
	private int loginId;
	
	@Column(name="EMAIL")
	private String email;
	
	@Column(name="PASSWORD")
	private String password;
	
	
	
	@ManyToOne
//	@Cascade(value = CascadeType.ALL)
	@JoinColumn(name="ROLL_ID")
	private Roles rollId;



	public int getLoginId() {
		return loginId;
	}


	public void setLoginId(int loginId) {
		this.loginId = loginId;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public Roles getRollId() {
		return rollId;
	}


	public void setRollId(Roles rollId) {
		this.rollId = rollId;
	}


	public Login(String email, String password, Roles rollId) {
		super();
		this.email = email;
		this.password = password;
		this.rollId = rollId;
	}



	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}
		

	@Override
	public String toString() {
		return "Login [loginId=" + loginId + ", email=" + email + ", password=" + password + ", rollId=" + rollId + "]";
	}

	


}
