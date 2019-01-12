package com.example.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner runner(UserRepository repo ) {
		return (args) -> {
			User u = new User();
			u.setFirstName("John");
			u.setLastName("Doe");
			u.setUsername("Jaydee");
			u.setPassword("abcdefg");
			repo.save(u);
			repo.flush();
		};
	}

}

