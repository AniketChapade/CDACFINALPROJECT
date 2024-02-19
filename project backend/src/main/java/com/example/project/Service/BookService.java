package com.example.project.Service;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.project.Entities.Book;
import com.example.project.Repository.BookRepository;

@Service
public class BookService {
    
    @Autowired
     BookRepository bookRepository;
    
    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }
    
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }
    
  
    
  
}
