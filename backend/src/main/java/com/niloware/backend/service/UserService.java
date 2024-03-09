package com.niloware.backend.service;

import com.niloware.backend.dto.UserDTO;
import com.niloware.backend.model.User;
import com.niloware.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registerUser(UserDTO userDTO) {
        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        user.setBirthdate(userDTO.getBirthdate());
        user.setUsername(userDTO.getUsername());
        return userRepository.save(user);
    }

    public User changePassword(UserDTO userDTO) {
        User user = userRepository.findByEmail(userDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        return userRepository.save(user);
    }

    public User changeUsername(UserDTO userDTO) {
        User user = userRepository.findByEmail(userDTO.getEmail());
        user.setUsername(userDTO.getUsername());
        return userRepository.save(user);
    }

    public User changeEmail(UserDTO userDTO) {
        User user = userRepository.findByUsername(userDTO.getUsername());
        user.setEmail(userDTO.getEmail());
        return userRepository.save(user);
    }
}
