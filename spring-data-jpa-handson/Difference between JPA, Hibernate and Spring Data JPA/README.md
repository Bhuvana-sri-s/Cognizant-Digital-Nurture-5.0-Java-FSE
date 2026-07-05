# Difference Between JPA, Hibernate and Spring Data JPA

## Overview

This document explains the difference between JPA, Hibernate, and Spring Data JPA with simple examples and comparison.

---

# 1. Java Persistence API (JPA)

- JPA stands for Java Persistence API
- It is a specification (JSR 338) for ORM in Java
- It defines rules for mapping Java objects to database tables
- It does not provide implementation

### Key Points
- Provides annotations like @Entity, @Table, @Id, @Column
- Requires implementation like Hibernate or EclipseLink
- Only defines standards

---

# 2. Hibernate

- Hibernate is an ORM framework
- It is one of the most popular implementations of JPA
- It handles database operations (CRUD)

### Example (Hibernate Code)

Session session = factory.openSession();
Transaction tx = session.beginTransaction();

session.save(employee);

tx.commit();
session.close();

### Key Points
- Manual session and transaction handling
- Implements JPA specification
- Supports caching, HQL, lazy loading

---

# 3. Spring Data JPA

- Spring Data JPA is a Spring module
- It simplifies database operations using JPA
- Reduces boilerplate code
- Works with Hibernate internally

### Example

#### Repository Layer
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}

#### Service Layer
@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public void addEmployee(Employee employee) {
        employeeRepository.save(employee);
    }
}

### Key Points
- No need to write SQL or session code
- Built-in methods like save(), findAll(), deleteById()
- Automatic transaction handling

---

# Comparison Table

| Feature | JPA | Hibernate | Spring Data JPA |
|--------|-----|-----------|-----------------|
| Type | Specification | ORM Framework | Spring Module |
| Implementation | No | Yes | No |
| Transaction Handling | No | Manual | Automatic |
| Boilerplate Code | High | Medium | Low |
| CRUD Support | No | Yes | Yes |
| Repository Support | No | No | Yes |

---

# Relationship Flow

Spring Data JPA
        ↓
JPA (Specification)
        ↓
Hibernate (Implementation)
        ↓
Database (MySQL)

---

# Conclusion

- JPA defines rules for ORM
- Hibernate implements JPA
- Spring Data JPA simplifies database operations and reduces boilerplate code
