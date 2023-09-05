package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Register;
import com.example.demo.repository.RegisterRepo;

@Service
public class RegisterService {


	@Autowired
	RegisterRepo f;
	public Register saveInfo(Register st)
	{
		return f.save(st);
	}
	public List<Register> showInfo()
	{
		return f.findAll();
	}
	public Optional<Register> findbyid(String id)
	{
		return f.findById(id);
	}
	public int verification(String username ,String password)
	{
		Optional<Register> user = f.findById(username);
		if(!user.isPresent())
		{
			return -1;
		}
		else {
			Register user_get = user.get();
			if(user_get == null)
				return -1;
			String pass = user_get.getPassword();
			if(pass.equals(password))
					return 1;
			else return -1;
		}

		
		
	}
	
}