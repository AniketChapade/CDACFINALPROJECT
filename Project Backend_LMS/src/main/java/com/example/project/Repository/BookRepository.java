package com.example.project.Repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.project.Entities.Book;

import jakarta.transaction.Transactional;




@Repository
@Transactional
public interface BookRepository extends JpaRepository<Book,Integer>{
	@Query("select B from Book B where B.status=0")
	public List<Book> getNotVerified();
	  
	@Modifying
	@Query("UPDATE Book b SET b.status = 1 WHERE b.bookId = :bid")
	public int VerifyBook(int bid);
}