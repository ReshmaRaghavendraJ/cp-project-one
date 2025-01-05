package com.example.Antiragging.Controller;

import com.example.Antiragging.Entity.Admin;
import com.example.Antiragging.Repository.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")

public class AdminController
{
    @Autowired
    AdminRepo adminRepo;

    //Login for Admin
    @GetMapping("/adminlogin/{emailid}/{password}")
    public ResponseEntity<?> adminlogin(@PathVariable String emailid, @PathVariable String password) {
        try {
            // Find the user by email ID
            Admin admininfo = adminRepo.findByEmailid(emailid).orElseThrow(() -> new RuntimeException("Email ID not found"));

            // Check if the password matches
            if (!admininfo.getPassword().equals(password)) {
                return new ResponseEntity<>("Admin Password is incorrect", HttpStatus.UNAUTHORIZED);
            } else {
                // Return Admin info if login is successful
                return new ResponseEntity<>(admininfo, HttpStatus.OK);
            }
        } catch (RuntimeException e) {
            // Handle errors gracefully
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }
    }
}

