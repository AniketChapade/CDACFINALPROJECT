package com.example.project.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="ROLES")
public class Roles {
	@Id
	//@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ROLL_ID")
	private int rollId;
	
	@Column(name="ROLL_NAME")
	private String rollName;
	
	public Roles(int rollId, String rollName) {
		super();
		this.rollId = rollId;
		this.rollName = rollName;
	}

	public Roles() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Roles [rollId=" + rollId + ", rollName=" + rollName + "]";
	}

	public int getRollId() {
		return rollId;
	}

	public void setRollId(int rollId) {
		this.rollId = rollId;
	}

	public String getRollName() {
		return rollName;
	}

	public void setRollName(String rollName) {
		this.rollName = rollName;
	}

	
	
	

}
