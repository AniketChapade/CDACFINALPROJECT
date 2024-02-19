package com.example.project.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.project.Entities.User;
import com.example.project.Repository.UserRepository;

public class UserServive {
	 @Autowired
		UserRepository urepo;
	    
	   
		public User saveUser(User u)
		{
			return urepo.save(u);
		}
		
		public User getUserById(int id)
		{
			 Optional<User> or=urepo.findById(id);
			 User r=null;
			 try
			 {
				 if(or!=null)
				 {
					 r=or.get();
				 }
				  
			 }
			 catch(Exception e)
			 {
				 e.printStackTrace();
			 }
			 return r;
		}
		
		
	}


