package com.niloware.backend.security;

import com.niloware.backend.entity.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import com.niloware.backend.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class MyUserDetailsService implements UserDetailsService {

    private static final Logger logger = LoggerFactory.getLogger(MyUserDetailsService.class);

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public MyUserDetailsService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

//    DEBUG TEST - ENCONDED PASSWORD MISMATCH
//    @Override
//    public UserDetails loadUserByUsername(String username) {
//        String encodedPassword = "$2a$12$FknsH6.DzxunDsPVIDz6z.6jlAHcb1GnMCt44Y09hob2wc.4BWO22";
//        return new org.springframework.security.core.userdetails.User("admin", encodedPassword, new ArrayList<>());
//    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try {
            com.niloware.backend.entity.User user = userRepository.findByUsername(username)
                    .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
            logger.debug("Loading user by username: {}", username);

            List<GrantedAuthority> authorities = new ArrayList<>();
            if (user.getRole() != null) {
                authorities.add(new SimpleGrantedAuthority(user.getRole().getName()));
                logger.info("Successfully loaded user: {} with role: {}", user.getUsername(), user.getRole().getName());
            } else {
                logger.warn("User: {} does not have any assigned roles.", username);
            }
            return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
        } catch (UsernameNotFoundException e) {
            logger.error("User not found exception for username: {}", username, e);
            throw e;
        } catch (Exception e) {
            logger.error("An unexpected error occurred while loading user by username: {}", username, e);
            throw new UsernameNotFoundException("An unexpected error occurred.", e);
        }
    }
}
