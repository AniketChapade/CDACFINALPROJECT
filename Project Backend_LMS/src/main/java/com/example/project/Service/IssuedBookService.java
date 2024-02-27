package com.example.project.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.project.Entities.Book;
import com.example.project.Entities.IssuedBook;
import com.example.project.Entities.User;
import com.example.project.Repository.BookRepository;
import com.example.project.Repository.IssuedBookRepository;
import com.example.project.controller.BookController;

@Service
public class IssuedBookService {

	@Autowired
	IssuedBookRepository Issrepo;
	
	
	
	public int BookStatus(int loginId,int bookId) {
		try {
			Issrepo.AllowUser(bookId, loginId);
			return 1;
		}
		catch (Exception e) {
			return 0;
		}
	}
	
	public IssuedBook askForIssue(IssuedBook ib) {
		return Issrepo.save(ib);
	}
	
    public List<IssuedBook>GetAllInfo()
    {
    	return Issrepo.findAll();
    }
    
	public IssuedBook saveBookDetails(IssuedBook u)
	{
		return Issrepo.save(u);
	}
	public List<IssuedBook> getBooks(){
		return Issrepo.getBooksToApprove();
	}
}
