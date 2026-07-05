package com.cognizant.ormlearn.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "country")
public class Country {

    @Id
    @Column(name = "code")
    private String code;

    @Column(name = "name")
    private String name;

    // Default Constructor
    public Country() {
    }

    // Parameterized Constructor
    public Country(String code, String name) {
        this.code = code;
        this.name = name;
    }

    // Getter for Code
    public String getCode() {
        return code;
    }

    // Setter for Code
    public void setCode(String code) {
        this.code = code;
    }

    // Getter for Name
    public String getName() {
        return name;
    }

    // Setter for Name
    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Country [code=" + code + ", name=" + name + "]";
    }
}
