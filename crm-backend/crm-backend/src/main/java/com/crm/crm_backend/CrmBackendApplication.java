package com.crm.crm_backend;

import com.crm.crm_backend.entity.User;
import com.crm.crm_backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.time.LocalDateTime;

@SpringBootApplication
public class CrmBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrmBackendApplication.class, args);
	}

    @Bean
    public CommandLineRunner seedAdmin(UserRepository userRepository){
        return args -> {
            if(userRepository.findByEmail("admin@pulsecrm.com").isEmpty()){
                User admin = new User();
                admin.setFullName("PulseCRM Admin");
                admin.setEmail("admin@pulsecrm.com");
                admin.setPassword(new BCryptPasswordEncoder().encode("Admin@123"));
                admin.setRole(User.Role.ADMIN);
                admin.setCreatedAt(LocalDateTime.now());
                userRepository.save(admin);
                System.out.println("Default Admin created: admin@pulsecrm.com / Admin@123");
            }
        };
    }

}
