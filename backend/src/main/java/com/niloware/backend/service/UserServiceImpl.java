package com.niloware.backend.service;

import com.niloware.backend.dto.UserDTO;
import com.niloware.backend.model.User;
import com.niloware.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User registerUser(UserDTO userDTO) {
        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        user.setBirthdate(userDTO.getBirthdate());
        user.setUsername(userDTO.getUsername());
        return userRepository.save(user);
    }

    @Override
    public User changePassword(UserDTO userDTO) {
        User user = userRepository.findByEmail(userDTO.getEmail());
        if (user == null) {
            return null;
        }
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public User changeUsername(UserDTO userDTO) {
        User user = userRepository.findByEmail(userDTO.getEmail());
        if (user == null) {
            return null;
        }
        user.setUsername(userDTO.getUsername());
        return userRepository.save(user);
    }

    @Override
    public User changeEmail(UserDTO userDTO) {
        User user = userRepository.findByUsername(userDTO.getUsername());
        if (user == null) {
            return null;
        }
        user.setEmail(userDTO.getEmail());
        return userRepository.save(user);
    }
}