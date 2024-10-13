package com.hrmanagement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity  // Marks this class as a JPA entity (mapped to a database table)
public class Resume {

    @Id  // Indicates this field is the primary key for the Resume table
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-generate unique IDs for each resume
    private Long id;

    private String name;  // Stores the name of the resume owner
    private String email;  // Stores the email address
    private String phone;  // Stores the contact phone number
    private String skills;  // Stores the skills listed in the resume
    private String experience;  // Stores the work experience

    // Getters and Setters for each field
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }
}
