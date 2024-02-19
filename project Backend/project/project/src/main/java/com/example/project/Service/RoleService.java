package com.example.project.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.project.Entities.Roles;
import com.example.project.Repository.RoleRepository;

public class RoleService {
	@Autowired
	RoleRepository roleRepo;
	
	public Roles getRole(int id)
	{
		 Optional<Roles> or=roleRepo.findById(id);
		 Roles r=null;
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


