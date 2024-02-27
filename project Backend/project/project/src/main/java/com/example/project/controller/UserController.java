package com.example.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.project.Entities.Login;
import com.example.project.Entities.Roles;
import com.example.project.Entities.User;
import com.example.project.POJO.DummyUser;
import com.example.project.Service.LoginService;
import com.example.project.Service.RoleService;
import com.example.project.Service.UserServive;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	 
	     @Autowired
		private UserServive uservice;
	    
	    @Autowired
	    private  LoginService lservice;
	    
	    @Autowired
	    private RoleService rl;
	    
	    @PostMapping("/userRegister")
		public User registerCustomer(@RequestBody DummyUser cr)
		{
	    	Roles rollId = rl.getRole(cr.getRole());
	    	Login l = lservice.saveLogin(new Login(cr.getEmail(), cr.getPassword(), rollId));
	    	User user_details = uservice.saveUser(new User(cr.getFirstname(), cr.getLastname(), cr.getEmail(), cr.getMobileno(), cr.getPassword(), cr.getAddress(), l));
	    	return user_details;

		    
		}
	    
	    
	    @PostMapping("/login")
	    public Login userlogin(@RequestBody Login n)
	    {
	    	Login chk=lservice.getLoginByEmail(n.getEmail(),n.getPassword());
	    	System.out.println(chk);
	    	
	    	return chk;
	    }
	   
	   
	    @GetMapping("/getUserById" )
	    public User getUserByID(@RequestParam int id)
	    {
	    	return uservice.getUserById(id);
	    }

	}


