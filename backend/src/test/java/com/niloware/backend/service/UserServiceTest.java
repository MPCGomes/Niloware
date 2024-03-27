package com.niloware.backend.service;

import com.niloware.backend.dto.UserDTO;
import com.niloware.backend.entity.Role;
import com.niloware.backend.entity.User;
import com.niloware.backend.repository.RoleRepository;
import com.niloware.backend.repository.UserRepository;
import com.niloware.backend.security.SecurityConfig;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.util.ReflectionTestUtils;

import java.time.LocalDate;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {
    @InjectMocks
    private UserService userService;
    @Mock
    private UserRepository userRepository;
    @Mock
    private PasswordEncoder passwordEncoder;
    @Mock
    private RoleRepository roleRepository;
    @Mock
    private SecurityConfig securityConfig;
    @BeforeEach
    void setUp() {
        when(securityConfig.passwordEncoder()).thenReturn(passwordEncoder);
        userService = new UserService(userRepository, securityConfig, roleRepository);
    }

    @Test
    void registerUserShouldThrowIllegalArgumentsException () {
        assertThrows(IllegalArgumentException.class, ()-> userService.registerUser(new UserDTO("email", "pass", LocalDate.now(), "username")));
    }

    @Test
    void registerNewUserSuccessful () {
        User user = new User();
        user.setEmail("amelia@gmail.com");
        user.setPassword("trixie123");
        user.setBirthdate(LocalDate.now());
        user.setUsername("Starlight");
        user.setRole(new Role(1L, "USER"));

        UserDTO userDTO = new UserDTO(user.getEmail(), user.getPassword(), LocalDate.of(1, 1, 1), user.getUsername());

        when(userRepository.save(any())).thenReturn(user);
        when(passwordEncoder.encode(any())).thenReturn("Moondancer");
        when(roleRepository.findByName(anyString())).thenReturn((Optional.of(new Role(1L, "USER"))));
        assertEquals(user, userService.registerUser(userDTO));
    }
}
