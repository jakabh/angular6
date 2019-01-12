package com.example.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {
	@Autowired
	UserRepository repo;
	
	@RequestMapping(
			path = "/login",
			method = RequestMethod.POST)
	Boolean validateCredentials(@RequestBody String username, @RequestBody String password) {
		return true;
	}
	
	@RequestMapping(
			path = "/users",
			method = RequestMethod.GET)
	List<User> returnListOfUsers(){
		return repo.findAll();
	}
	
	@RequestMapping(
			path ="/users",
			method= RequestMethod.POST)
	Boolean saveUser( @RequestBody User user) {
		if ( user != null ) {
			repo.save(user);
			return true;
		}else {
			return false;
		}
		
	}
	
	

}
