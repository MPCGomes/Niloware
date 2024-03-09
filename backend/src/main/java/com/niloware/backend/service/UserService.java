package com.niloware.backend.service;

import com.niloware.backend.dto.UserDTO;
import com.niloware.backend.model.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

    User registerUser(UserDTO userDTO);

    User changePassword(UserDTO userDTO);

    User changeUsername(UserDTO userDTO);

    User changeEmail(UserDTO userDTO);
}
