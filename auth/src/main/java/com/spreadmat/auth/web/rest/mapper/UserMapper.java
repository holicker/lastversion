package com.spreadmat.auth.web.rest.mapper;

import com.spreadmat.auth.domain.User;
import com.spreadmat.auth.web.rest.dto.UserDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper extends EntityMapper<UserDTO, User> {

    User toEntity(UserDTO userDTO);

    @Mapping(target = "passwordEncrypt", ignore = true)
    UserDTO toDto(User user);
}
