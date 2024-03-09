package com.niloware.backend.service;

import com.niloware.backend.dto.UserDTO;
import com.niloware.backend.model.User;
import com.niloware.backend.repository.UserRepository;
import com.niloware.backend.security.SecurityConfig;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, SecurityConfig securityConfig) {
        this.userRepository = userRepository;
        this.passwordEncoder = securityConfig.passwordEncoder();
    }

    public User registerUser(UserDTO userDTO) {
        if (!isAgeValid(userDTO.getBirthdate())) {
            throw new IllegalArgumentException("User must be at least 13 years old");
        }

        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        user.setBirthdate(userDTO.getBirthdate());
        user.setUsername(userDTO.getUsername());
        return userRepository.save(user);
    }

    private boolean isAgeValid(LocalDate birthdate) {
        LocalDate today = LocalDate.now();
        Period period = Period.between(birthdate, today);
        return period.getYears() >= 13;
    }

    public void changePassword(UserDTO userDTO) {
        User user = userRepository.findByEmail(userDTO.getEmail());
        if (user == null) {
            return;
        }
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        userRepository.save(user);
    }

    public void changeUsername(UserDTO userDTO) {
        User user = userRepository.findByEmail(userDTO.getEmail());
        if (user == null) {
            return;
        }
        user.setUsername(userDTO.getUsername());
        userRepository.save(user);
    }

    public void changeEmail(UserDTO userDTO) {
        User user = userRepository.findByUsername(userDTO.getUsername());
        if (user == null) {
            return;
        }
        user.setEmail(userDTO.getEmail());
        userRepository.save(user);
    }


}
