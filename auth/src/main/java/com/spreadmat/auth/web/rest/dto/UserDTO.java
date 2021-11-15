package com.spreadmat.auth.web.rest.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private String username;
    private String password;
    private String nickname;
    private String id;

    public UserDTO passwordEncrypt(PasswordEncoder passwordEncoder){
        this.password = "{bcrypt}" + passwordEncoder.encode(this.password);
        return this;
    }
    public UserDTO passwordSecret(){
        this.password = "";
        return this;
    }
}
