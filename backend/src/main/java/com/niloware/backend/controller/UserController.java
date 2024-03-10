package com.niloware.backend.controller;

import com.niloware.backend.dto.UserDTO;
import com.niloware.backend.entity.User;
import com.niloware.backend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(userService.registerUser(userDTO));
    }

    @PutMapping("/change-password")
    public ResponseEntity<Void> changePassword(@RequestBody UserDTO userDTO) {
        userService.changePassword(userDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/change-username")
    public ResponseEntity<Void> changeUsername(@RequestBody UserDTO userDTO) {
        userService.changeUsername(userDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/change-email")
    public ResponseEntity<Void> changeEmail(@RequestBody UserDTO userDTO) {
        userService.changeEmail(userDTO);
        return ResponseEntity.ok().build();
    }
}
