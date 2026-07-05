-- Create Database
CREATE DATABASE IF NOT EXISTS ormlearn;

USE ormlearn;

-- Create Country Table
CREATE TABLE country (
    code VARCHAR(2) PRIMARY KEY,
    name VARCHAR(50)
);

-- Insert Sample Data
INSERT INTO country VALUES ('IN', 'India');
INSERT INTO country VALUES ('US', 'United States of America');
