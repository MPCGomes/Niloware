package com.niloware.backend.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    @Email(message = "Invalid email format")
    @NotBlank(message = "Email cannot be blank")
    @Size(max = 255, message = "Email must be less than 256 characters long")
    private String email;

    @NotBlank(message = "Password cannot be blank")
    @Size(min = 8, max = 72, message = "Password must be between 8 and 72 characters long")
    private String password;

    @Past(message = "Birthdate must be in the past")
    private LocalDate birthdate;

    @NotBlank(message = "Username cannot be blank")
    @Size(min = 3, max = 16, message = "Username must be between 3 and 16 characters long")
    private String username;
}
