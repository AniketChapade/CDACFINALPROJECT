package com.example.project.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.project.Entities.Login;
import com.example.project.POJO.DummyUser;
import com.example.project.Repository.LoginRepository;

@Service
public class LoginService {
	
	@Autowired
	LoginRepository lrepo;
	
	public Login saveLogin(Login u)
	{
		return lrepo.save(u);
	}
	
	public Login getLoginByEmail(String uname,String pass)
	{
		System.out.println(uname+" "+pass);
		return lrepo.getUserByEmail(uname,pass);
	}
	
	public Login saveLibrarian(Login u)
	{
		return lrepo.save(u);
	}
	
	

}


