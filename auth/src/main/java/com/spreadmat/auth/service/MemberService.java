package com.spreadmat.auth.service;

import com.spreadmat.auth.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface MemberService {

    User save(User user);

    Page<User> findAll(Pageable pageable);

    User findOneByUsername(String username);

    Optional<User> findById(Long id);

    void delete(Long Id);

    User createUser(final User user);

}
