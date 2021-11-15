package com.spreadmat.auth.service.impl;

import com.spreadmat.auth.domain.User;
import com.spreadmat.auth.repository.UserRepository;
import com.spreadmat.auth.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
public class MemberServiceImpl implements MemberService {

    @Autowired private UserRepository userRepository;

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public Page<User> findAll(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    @Override
    public User findOneByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public Optional<User> findById(Long id) {

        return userRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
    }

    // 최초 멤버 생성
    @Override
    public User createUser(User user) {
        if(user == null || user.getUsername() == null) throw new RuntimeException("Invalid Arguments! 멤버가 비어있습니다.");
        final String userName = user.getUsername();
        if(userRepository.existsByUsername(userName)) throw new RuntimeException("Email already exist! 이메일이 이미 존재합니다!");
        return userRepository.save(user);
    }

}
