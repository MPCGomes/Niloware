package com.niloware.backend.controller;

import com.niloware.backend.dto.UserDTO;
import com.niloware.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(userService.registerUser(userDTO));
    }

    @PutMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody UserDTO userDTO) {
        userService.changePassword(userDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/change-username")
    public ResponseEntity<?> changeUsername(@RequestBody UserDTO userDTO) {
        userService.changeUsername(userDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/change-email")
    public ResponseEntity<?> changeEmail(@RequestBody UserDTO userDTO) {
        userService.changeEmail(userDTO);
        return ResponseEntity.ok().build();
    }
}
