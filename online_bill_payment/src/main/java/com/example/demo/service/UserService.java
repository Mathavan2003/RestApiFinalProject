package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;

@Service
public class UserService {

	
	@Autowired
	UserRepo br;
	
	public User saveInfo(User b)
	{
		return br.save(b);
	}
	
	public List<User> showAll()
	{
		return br.findAll();
	}
	
	public User change(User b)
	{
		return br.saveAndFlush(b);
	}
	
	public void delete(int id)
	{
		br.deleteById(id);
	}
public List<User> sortInfo(String str) {
		
		return br.findAll(Sort.by(Sort.DEFAULT_DIRECTION.DESC,str));
	}
	public List<User> pageInfo(int page ,int pagesize)
	{
		Page<User> pg = br.findAll(PageRequest.of(page,pagesize));
		return pg.getContent();
	}
	public List<User> pageInfoSorted(int page ,int pagesize,String str)
	{
		Page<User> pg = br.findAll(PageRequest.of(page,pagesize,Sort.by(Sort.DEFAULT_DIRECTION,str)));
		return pg.getContent();
			
	}
	public User getDetails(int id)
	{
		return br.getInfo(id);
	}
	public void updateDetails(int id,int newid) {
		 br.updateInfo(id, newid);
		
	}
	public void deleteDetails(int id)
	{
		 br.deleteInfo(id);
		
	}

}
