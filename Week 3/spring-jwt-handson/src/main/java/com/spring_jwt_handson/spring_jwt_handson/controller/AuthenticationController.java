package com.spring_jwt_handson.spring_jwt_handson.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public String authenticate() {

        return "Authentication Successful";

    }

}