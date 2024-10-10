package com.jayrajgajul.personal_finance_tracker.service;

import com.jayrajgajul.personal_finance_tracker.repository.UserRepository;
import com.jayrajgajul.personal_finance_tracker.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    // Additional methods can be added as needed
}
