package com.example.project.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.project.Entities.IssuedBook;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface IssuedBookRepository extends JpaRepository<IssuedBook, Integer> {
	 @Modifying
	 @Query(value = "UPDATE issued_book SET approve_status = 1 WHERE book_id =:bookId AND login_id =:loginId", nativeQuery = true)
	    public int AllowUser(int bookId, int loginId);
	 
	 
	 
	 @Query(value = "select * from book b where b.book_id in (select book_id from issued_book where approve_status=0);",nativeQuery = true)
	 public List<IssuedBook> getBooksToApprove();
	 
	 
}
