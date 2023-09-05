package com.example.demo.controller;

import java.util.List;
import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Register;
import com.example.demo.service.RegisterService;

@RestController
@CrossOrigin
public class RegisterController {

	@Autowired
	RegisterService fs;
@PostMapping("/add/reg")
	
	public Register add(@RequestBody  Register se)
	{
		return fs.saveInfo(se);
	}
@GetMapping("/show/reg")
public List<Register> show()
{
	return fs.showInfo();
}

@GetMapping("/get/reg/{id}")
public Optional<Register> getid(@PathVariable String id)
{
	return fs.findbyid(id);
}
@GetMapping("/verify-login")
public int verification(@RequestParam(name="username")String username, @RequestParam(name="password") String password)
{
	return fs.verification(username, password);
}

}