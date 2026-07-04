package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {

    public static void main(String[] args) {

        // Load Spring container
        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get Service Bean
        BookService service = (BookService) context.getBean("bookService");

        // Test DI
        service.displayBook();
    }
}
